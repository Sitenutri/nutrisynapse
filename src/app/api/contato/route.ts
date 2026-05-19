import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { notifyContact } from "@/lib/mail";
import { logger } from "@/lib/logger";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const contacts = await prisma.contact.findMany({
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json(contacts);
}

export async function POST(req: NextRequest) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: "Todos os campos são obrigatórios" },
        { status: 400 }
      );
    }

    const contact = await prisma.contact.create({
      data: { name, email, subject, message },
    });

    await logger.info("contact.received", "Nova mensagem de contato recebida", { name, email, subject });

    // Notify via email (must await — Vercel kills unawaited promises after response)
    try {
      await notifyContact(name, email, subject, message);
      await logger.info("contact.notification_sent", "Notificação de contato enviada", { name, email, subject });
    } catch (err) {
      await logger.error("contact.notification_failed", "Falha ao enviar notificação de contato", {
        name, email, subject, error: String(err),
      });
    }

    return NextResponse.json(
      { message: "Mensagem enviada com sucesso!", id: contact.id },
      { status: 201 }
    );
  } catch (err) {
    await logger.error("contact.exception", "Exceção não tratada no contato", { error: String(err) });
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
