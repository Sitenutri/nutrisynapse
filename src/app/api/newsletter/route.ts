import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { notifyNewsletter } from "@/lib/mail";

export async function POST(req: NextRequest) {
  try {
    const { name, email } = await req.json();

    if (!name || !email) {
      return NextResponse.json({ error: "Nome e email são obrigatórios" }, { status: 400 });
    }

    const existing = await prisma.newsletter.findUnique({ where: { email } });
    if (existing) {
      return NextResponse.json({ message: "Email já cadastrado" }, { status: 200 });
    }

    await prisma.newsletter.create({ data: { name, email } });

    // Notify via email (non-blocking — don't fail the request if email fails)
    notifyNewsletter(name, email).catch((err) =>
      console.error("[newsletter] Email notification failed:", err)
    );

    return NextResponse.json({ message: "Inscrito com sucesso!" }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
