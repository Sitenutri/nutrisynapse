/**
 * Standalone test for the PDF image extraction pipeline (unpdf + sharp).
 * Does NOT call Claude. Validates: load PDF, extract images, encode PNG, save locally.
 *
 * Run: npx tsx scripts/test-pdf-extract.ts <path-to-pdf>
 */
import { readFile, writeFile, mkdir } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, basename } from "node:path";
import { extractImages, getDocumentProxy, extractText } from "unpdf";
import sharp from "sharp";

const MIN_DIMENSION_PX = 200;
const MAX_DIMENSION_PX = 1920;
const WEBP_QUALITY = 85;
const EXTREME_ASPECT_RATIO = 2.5;
const TARGET_ASPECT_RATIO = 1.5;

async function main() {
  const pdfPath = process.argv[2];
  if (!pdfPath || !existsSync(pdfPath)) {
    console.error("Usage: npx tsx scripts/test-pdf-extract.ts <path-to-pdf>");
    process.exit(1);
  }

  const outDir = join(process.cwd(), "tmp", "pdf-extract");
  await mkdir(outDir, { recursive: true });

  console.log(`📄 Reading: ${basename(pdfPath)}`);
  const buffer = await readFile(pdfPath);
  const pdf = await getDocumentProxy(new Uint8Array(buffer));
  console.log(`   Pages: ${pdf.numPages}`);

  const { text } = await extractText(pdf, { mergePages: false });
  const wordCount = text.reduce((sum, t) => sum + t.split(/\s+/).filter(Boolean).length, 0);
  console.log(`   Approx words: ${wordCount}`);
  console.log(`   First 200 chars page 1: "${text[0]?.slice(0, 200).replace(/\s+/g, " ")}"`);

  console.log(`\n🖼  Extracting images...`);
  let kept = 0;
  let dropped = 0;
  for (let p = 1; p <= pdf.numPages; p++) {
    const imgs = await extractImages(pdf, p).catch((e) => {
      console.warn(`   page ${p}: extract failed —`, e.message);
      return [];
    });
    for (const img of imgs) {
      const isSmall = img.width < MIN_DIMENSION_PX && img.height < MIN_DIMENSION_PX;
      if (isSmall) {
        dropped++;
        continue;
      }
      kept++;
      const rawBytes = new Uint8Array(img.data.buffer, img.data.byteOffset, img.data.byteLength);
      let pipeline = sharp(rawBytes, {
        raw: { width: img.width, height: img.height, channels: img.channels },
      });
      const longSide = Math.max(img.width, img.height);
      const shortSide = Math.min(img.width, img.height);
      const aspectRatio = longSide / shortSide;
      let cropApplied = "";
      if (aspectRatio > EXTREME_ASPECT_RATIO) {
        const isPortrait = img.height > img.width;
        const cropW = isPortrait ? img.width : Math.round(img.height * TARGET_ASPECT_RATIO);
        const cropH = isPortrait ? Math.round(img.width * TARGET_ASPECT_RATIO) : img.height;
        pipeline = pipeline.resize({
          width: cropW,
          height: cropH,
          fit: "cover",
          position: "attention",
        });
        cropApplied = ` [smart-crop ratio=${aspectRatio.toFixed(2)} → ${cropW}x${cropH}]`;
      }
      if (longSide > MAX_DIMENSION_PX) {
        pipeline = pipeline.resize({
          width: MAX_DIMENSION_PX,
          height: MAX_DIMENSION_PX,
          fit: "inside",
          withoutEnlargement: true,
        });
      }
      const webp = await pipeline.webp({ quality: WEBP_QUALITY }).toBuffer();
      console.log(`   ${cropApplied}`);
      const meta = await sharp(webp).metadata();
      const filename = `page${p}-img${kept}-${meta.width}x${meta.height}.webp`;
      await writeFile(join(outDir, filename), webp);
      const sizeKB = (webp.length / 1024).toFixed(1);
      console.log(
        `   page ${p}: ${img.width}x${img.height} (${img.channels}ch) → ${meta.width}x${meta.height} webp (${sizeKB} KB) → ${filename}`
      );
    }
  }

  console.log(`\n✅ Done: ${kept} images kept, ${dropped} dropped (< ${MIN_DIMENSION_PX}px)`);
  console.log(`   Saved to: ${outDir}`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
