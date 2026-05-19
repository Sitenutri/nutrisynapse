import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { notifyNewsletter } from "@/lib/mail";
import { logger } from "@/lib/logger";

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Nome e email são obrigatórios" }, { status: 400 });
    }

    const existing = await prisma.newsletter.findUnique({ where: { email } });
    if (existing) {
      await logger.info("newsletter.duplicate", "Tentativa de inscrição com email já cadastrado", { name, email });
      return NextResponse.json({ message: "Email já cadastrado" }, { status: 200 });
    }

    await prisma.newsletter.create({ data: { name, email } });
    await logger.info("newsletter.subscribed", "Novo inscrito na newsletter", { name, email });

    // Notify via email (must await — Vercel kills unawaited promises after response)
    try {
      await notifyNewsletter(name, email);
      await logger.info("newsletter.notification_sent", "Notificação de novo inscrito enviada", { name, email });
    } catch (err) {
      await logger.error("newsletter.notification_failed", "Falha ao enviar notificação de inscrito", {
        name, email, error: String(err),
      });
    }

    return NextResponse.json({ message: "Inscrito com sucesso!" }, { status: 201 });
  } catch (err) {
    await logger.error("newsletter.exception", "Exceção não tratada na newsletter", { error: String(err) });
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
