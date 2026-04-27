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
  const type = searchParams.get("type");

  if (type === "posts") {
    const count = await prisma.post.count();
    return NextResponse.json({ count });
  }

  if (type === "ebooks") {
    const count = await prisma.ebook.count();
    return NextResponse.json({ count });
  }

  if (type === "subscribers") {
    const count = await prisma.newsletter.count();
    return NextResponse.json({ count });
  }

  // Return all stats when no type specified
  const [posts, ebooks, subscribers] = await Promise.all([
    prisma.post.count(),
    prisma.ebook.count(),
    prisma.newsletter.count(),
  ]);

  return NextResponse.json({ posts, ebooks, subscribers });
}
