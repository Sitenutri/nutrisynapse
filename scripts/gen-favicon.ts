/**
 * Gera os favicons do site a partir de public/logo-nutrisinapse.png.
 * Roda: npx tsx scripts/gen-favicon.ts
 */
import { readFile, writeFile, unlink } from "node:fs/promises";
import { join } from "node:path";
import sharp from "sharp";

async function main() {
  const root = process.cwd();
  const source = join(root, "public", "logo-nutrisinapse.png");
  const buffer = await readFile(source);

  const meta = await sharp(buffer).metadata();
  const srcW = meta.width!;
  const srcH = meta.height!;
  // O desenho (cérebro + frutas) ocupa o topo ~52% da imagem.
  // Recortamos um quadrado dessa região, centralizado horizontalmente.
  const cropSize = Math.floor(srcH * 0.52);
  const cropX = Math.floor((srcW - cropSize) / 2);
  const cropY = Math.floor(srcH * 0.04);

  const cropped = await sharp(buffer)
    .extract({ left: cropX, top: cropY, width: cropSize, height: cropSize })
    .toBuffer();

  const targets = [
    { path: "src/app/icon.png", size: 256 },
    { path: "src/app/apple-icon.png", size: 180 },
  ];

  for (const { path, size } of targets) {
    const out = await sharp(cropped)
      .resize({ width: size, height: size, fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
      .png({ compressionLevel: 9 })
      .toBuffer();
    await writeFile(join(root, path), out);
    const kb = (out.length / 1024).toFixed(1);
    console.log(`✓ ${path} (${size}x${size}, ${kb} KB)`);
  }

  const oldFavicon = join(root, "src/app/favicon.ico");
  await unlink(oldFavicon).catch(() => {});
  console.log("✓ removeu src/app/favicon.ico (Next vai usar icon.png)");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
