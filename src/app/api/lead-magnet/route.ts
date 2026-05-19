import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendLeadMagnetEmail } from "@/lib/mail";

export async function GET() {
  // Public endpoint: returns the active lead magnet ebook info + whether feature is enabled
  const settings = await prisma.siteSettings.findFirst({
    where: { id: "global" },
  });

  if (!settings?.leadMagnetEnabled) {
    return NextResponse.json({ enabled: false });
  }

  const ebook = await prisma.ebook.findFirst({
    where: { isLeadMagnet: true },
    select: {
      id: true,
      title: true,
      description: true,
      coverImage: true,
    },
  });

  if (!ebook) {
    return NextResponse.json({ enabled: false });
  }

  return NextResponse.json({ enabled: true, ebook });
}

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Nome e email sao obrigatorios" }, { status: 400 });
    }

    // Check if lead magnet is enabled
    const settings = await prisma.siteSettings.findFirst({
      where: { id: "global" },
    });

    if (!settings?.leadMagnetEnabled) {
      return NextResponse.json({ error: "Lead magnet desativado" }, { status: 400 });
    }

    // Find the lead magnet ebook
    const ebook = await prisma.ebook.findFirst({
      where: { isLeadMagnet: true },
    });

    if (!ebook) {
      return NextResponse.json({ error: "Nenhum ebook configurado como lead magnet" }, { status: 400 });
    }

    // Save to newsletter subscribers (upsert to avoid duplicates)
    const existing = await prisma.newsletter.findUnique({ where: { email } });
    if (!existing) {
      await prisma.newsletter.create({ data: { name, email } });
    }

    // Send the email with download link (must await — Vercel kills unawaited promises after response)
    const downloadUrl = ebook.downloadUrl || ebook.buyLink || "#";
    try {
      await sendLeadMagnetEmail(name, email, ebook.title, downloadUrl);
    } catch (err) {
      console.error("[lead-magnet] Email send failed:", err);
    }

    return NextResponse.json({ message: "E-book enviado! Verifique seu email." }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
