import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const level  = searchParams.get("level");   // "info" | "warn" | "error"
  const event  = searchParams.get("event");   // ex: "lead_magnet"
  const limit  = parseInt(searchParams.get("limit") ?? "100", 10);

  const logs = await prisma.appLog.findMany({
    where: {
      ...(level  ? { level }                              : {}),
      ...(event  ? { event: { contains: event } }        : {}),
    },
    orderBy: { createdAt: "desc" },
    take: Math.min(limit, 500),
  });

  return NextResponse.json(logs);
}

export async function DELETE(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Não autorizado" }, { status: 401 });
  }

  // Limpa logs com mais de 30 dias
  const cutoff = new Date(Date.now() - 30 * 24 * 60 * 60 * 1000);
  const { count } = await prisma.appLog.deleteMany({
    where: { createdAt: { lt: cutoff } },
  });

  return NextResponse.json({ deleted: count });
}
