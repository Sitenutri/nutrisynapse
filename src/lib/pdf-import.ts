import { extractImages, getDocumentProxy } from "unpdf";
import sharp from "sharp";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { randomUUID } from "crypto";

const s3 = new S3Client({
  region: process.env.AWS_REGION!,
  credentials: {
    accessKeyId: process.env.AWS_ACCESS_KEY_ID!,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY!,
  },
});

const MIN_DIMENSION_PX = 200;
const MAX_DIMENSION_PX = 1920;
const WEBP_QUALITY = 85;
const EXTREME_ASPECT_RATIO = 2.5;
const TARGET_ASPECT_RATIO = 1.5;

export interface ExtractedImage {
  index: number;
  page: number;
  width: number;
  height: number;
  s3Url: string;
}

export async function extractAndUploadImages(pdfBuffer: Buffer): Promise<ExtractedImage[]> {
  const pdf = await getDocumentProxy(new Uint8Array(pdfBuffer));
  const totalPages = pdf.numPages;
  const bucket = process.env.AWS_S3_BUCKET!;
  const region = process.env.AWS_REGION!;

  const result: ExtractedImage[] = [];
  let index = 1;

  for (let pageNum = 1; pageNum <= totalPages; pageNum++) {
    let pageImages;
    try {
      pageImages = await extractImages(pdf, pageNum);
    } catch (e) {
      console.warn(`[pdf-import] Failed to extract images from page ${pageNum}:`, e);
      continue;
    }

    for (const img of pageImages) {
      if (img.width < MIN_DIMENSION_PX && img.height < MIN_DIMENSION_PX) continue;

      try {
        const rawBytes = new Uint8Array(img.data.buffer, img.data.byteOffset, img.data.byteLength);
        let pipeline = sharp(rawBytes, {
          raw: { width: img.width, height: img.height, channels: img.channels },
        });

        const longSide = Math.max(img.width, img.height);
        const shortSide = Math.min(img.width, img.height);
        const aspectRatio = longSide / shortSide;

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
        const meta = await sharp(webp).metadata();
        const finalWidth = meta.width ?? img.width;
        const finalHeight = meta.height ?? img.height;

        const key = `imports/extracted/${randomUUID()}.webp`;
        await s3.send(
          new PutObjectCommand({
            Bucket: bucket,
            Key: key,
            Body: webp,
            ContentType: "image/webp",
          })
        );

        result.push({
          index,
          page: pageNum,
          width: finalWidth,
          height: finalHeight,
          s3Url: `https://${bucket}.s3.${region}.amazonaws.com/${key}`,
        });
        index++;
      } catch (e) {
        console.warn(`[pdf-import] Failed to encode/upload image on page ${pageNum}:`, e);
      }
    }
  }

  return result;
}
