import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

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

    return NextResponse.json({ message: "Inscrito com sucesso!" }, { status: 201 });
  } catch {
    return NextResponse.json({ error: "Erro interno" }, { status: 500 });
  }
}
