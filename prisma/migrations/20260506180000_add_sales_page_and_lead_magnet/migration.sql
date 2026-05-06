-- AlterTable: Add sales page fields to Ebook
ALTER TABLE "Ebook" ADD COLUMN "salesHeadline" TEXT;
ALTER TABLE "Ebook" ADD COLUMN "salesBullets" TEXT[] DEFAULT ARRAY[]::TEXT[];
ALTER TABLE "Ebook" ADD COLUMN "kiwifyUrl" TEXT;
ALTER TABLE "Ebook" ADD COLUMN "salesPageActive" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable: Add lead magnet fields to Ebook
ALTER TABLE "Ebook" ADD COLUMN "isLeadMagnet" BOOLEAN NOT NULL DEFAULT false;
ALTER TABLE "Ebook" ADD COLUMN "downloadUrl" TEXT;

-- CreateTable: SiteSettings
CREATE TABLE "SiteSettings" (
    "id" TEXT NOT NULL DEFAULT 'global',
    "leadMagnetEnabled" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "SiteSettings_pkey" PRIMARY KEY ("id")
);
