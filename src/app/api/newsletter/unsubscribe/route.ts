import { NextRequest, NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(req: NextRequest) {
  const email = req.nextUrl.searchParams.get("email");

  if (!email) {
    return new NextResponse("Email não informado.", { status: 400 });
  }

  try {
    await prisma.newsletter.delete({ where: { email } });
  } catch {
    // Already unsubscribed — treat as success
  }

  return new NextResponse(
    `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><title>Cancelado — Nutrisynapse</title></head>
<body style="font-family:sans-serif;text-align:center;padding:60px 20px;color:#4a5568">
  <h2 style="color:#1a202c">Inscrição cancelada</h2>
  <p>Você foi removido da newsletter da Nutrisynapse.</p>
  <a href="https://nutrisynapse.com" style="color:#0e9aa7">Voltar ao site</a>
</body>
</html>`,
    { status: 200, headers: { "Content-Type": "text/html" } }
  );
}
