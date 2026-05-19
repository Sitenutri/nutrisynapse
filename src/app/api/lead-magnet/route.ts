import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { sendLeadMagnetEmail } from "@/lib/mail";
import { logger } from "@/lib/logger";

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

    await logger.info("lead_magnet.request", "Nova solicitação de lead magnet", { name, email });

    // Check if lead magnet is enabled
    const settings = await prisma.siteSettings.findFirst({
      where: { id: "global" },
    });

    if (!settings?.leadMagnetEnabled) {
      await logger.warn("lead_magnet.disabled", "Lead magnet desativado no sistema", { email });
      return NextResponse.json({ error: "Lead magnet desativado" }, { status: 400 });
    }

    // Find the lead magnet ebook
    const ebook = await prisma.ebook.findFirst({
      where: { isLeadMagnet: true },
    });

    if (!ebook) {
      await logger.error("lead_magnet.no_ebook", "Nenhum ebook configurado como lead magnet", { email });
      return NextResponse.json({ error: "Nenhum ebook configurado como lead magnet" }, { status: 400 });
    }

    // Save to newsletter subscribers (upsert to avoid duplicates)
    const existing = await prisma.newsletter.findUnique({ where: { email } });
    if (!existing) {
      await prisma.newsletter.create({ data: { name, email } });
      await logger.info("lead_magnet.subscribed", "Novo subscriber via lead magnet", { name, email });
    } else {
      await logger.info("lead_magnet.duplicate", "Email já cadastrado — reenvio do ebook", { name, email });
    }

    // Send the email with download link (must await — Vercel kills unawaited promises after response)
    const downloadUrl = ebook.downloadUrl || ebook.buyLink || "#";
    try {
      await sendLeadMagnetEmail(name, email, ebook.title, downloadUrl);
      await logger.info("lead_magnet.email_sent", "Email do ebook enviado com sucesso", {
        name, email, ebook: ebook.title, downloadUrl,
      });
    } catch (err) {
      await logger.error("lead_magnet.email_failed", "Falha ao enviar email do ebook", {
        name, email, ebook: ebook.title, error: String(err),
      });
    }

    return NextResponse.json({ message: "E-book enviado! Verifique seu email." }, { status: 201 });
  } catch (err) {
    await logger.error("lead_magnet.exception", "Exceção não tratada no lead magnet", { error: String(err) });
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
