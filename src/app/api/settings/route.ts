import { NextRequest, NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";

export async function GET() {
  const settings = await prisma.siteSettings.findFirst({
    where: { id: "global" },
  });

  return NextResponse.json(settings || { id: "global", leadMagnetEnabled: false });
}

export async function PUT(req: NextRequest) {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Nao autorizado" }, { status: 401 });
  }

  const body = await req.json();

  const settings = await prisma.siteSettings.upsert({
    where: { id: "global" },
    update: {
      leadMagnetEnabled: body.leadMagnetEnabled ?? false,
    },
    create: {
      id: "global",
      leadMagnetEnabled: body.leadMagnetEnabled ?? false,
    },
  });

  return NextResponse.json(settings);
}
