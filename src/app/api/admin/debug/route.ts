import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { prisma } from "@/lib/prisma";
import { Resend } from "resend";

export async function GET() {
  const session = await getServerSession(authOptions);
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const fromEmail = process.env.RESEND_FROM ?? "(not set — using fallback: Nutrisynapse <newsletter@nutrisynapse.com>)";

  const settings = await prisma.siteSettings.findFirst({ where: { id: "global" } });
  const ebook = await prisma.ebook.findFirst({ where: { isLeadMagnet: true } });

  const diagnostics: Record<string, unknown> = {
    resend_api_key: apiKey ? `set (starts with: ${apiKey.slice(0, 8)}...)` : "NOT SET",
    resend_from: fromEmail,
    lead_magnet_enabled: settings?.leadMagnetEnabled ?? false,
    lead_magnet_ebook: ebook
      ? { id: ebook.id, title: ebook.title, isLeadMagnet: ebook.isLeadMagnet, downloadUrl: ebook.downloadUrl }
      : null,
  };

  // Try to send a test email
  if (apiKey) {
    try {
      const resend = new Resend(apiKey);
      const from = process.env.RESEND_FROM ?? "Nutrisynapse <newsletter@nutrisynapse.com>";
      const result = await resend.emails.send({
        from,
        to: session.user?.email ?? "test@test.com",
        subject: "[DEBUG] Teste de email Nutrisynapse",
        html: "<p>Este é um email de teste do sistema de diagnóstico. Se chegou, o Resend está funcionando!</p>",
      });
      diagnostics.test_email = { status: "sent", to: session.user?.email, result };
    } catch (err: unknown) {
      diagnostics.test_email = { status: "error", error: String(err) };
    }
  } else {
    diagnostics.test_email = { status: "skipped", reason: "RESEND_API_KEY not set" };
  }

  return NextResponse.json(diagnostics, { status: 200 });
}
