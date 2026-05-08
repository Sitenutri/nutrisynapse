import { Resend } from "resend";

let _resend: Resend | null = null;
function getResend() {
  if (!_resend) _resend = new Resend(process.env.RESEND_API_KEY);
  return _resend;
}

const FROM_EMAIL = process.env.RESEND_FROM ?? "Nutrisynapse <newsletter@nutrisynapse.com>";
const SITE_URL = process.env.NEXTAUTH_URL ?? "https://nutrisynapse.com";

// ─────────────────────────────────────────────
// HTML helpers
// ─────────────────────────────────────────────

function markdownToHtml(text: string): string {
  return text
    .replace(/^### (.+)$/gm, '<h3 style="margin:20px 0 8px;font-size:18px;color:#1a202c">$1</h3>')
    .replace(/^## (.+)$/gm, '<h2 style="margin:24px 0 10px;font-size:22px;color:#1a202c">$1</h2>')
    .replace(/^# (.+)$/gm, '<h1 style="margin:28px 0 12px;font-size:26px;color:#1a202c">$1</h1>')
    .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
    .replace(/\*(.+?)\*/g, "<em>$1</em>")
    .replace(/\[(.+?)\]\((.+?)\)/g, '<a href="$2" style="color:#0e9aa7;text-decoration:underline">$1</a>')
    .split(/\n\n+/)
    .map((para) => `<p style="margin:0 0 16px;line-height:1.7;color:#4a5568">${para.replace(/\n/g, "<br>")}</p>`)
    .join("");
}

interface ContentBlock {
  type: "text" | "image";
  content: string | null;
  images: string | null;
  order: number;
}

export function buildEmailHtml(
  subject: string,
  previewText: string | null,
  contents: ContentBlock[],
  recipientEmail: string
): string {
  const body = contents
    .slice()
    .sort((a, b) => a.order - b.order)
    .map((block) => {
      if (block.type === "text" && block.content) {
        return `<div style="padding:0 0 8px">${markdownToHtml(block.content)}</div>`;
      }
      if (block.type === "image" && block.images) {
        const imgs: string[] = JSON.parse(block.images);
        return imgs
          .map(
            (src) =>
              `<div style="margin:16px 0;text-align:center"><img src="${src}" alt="" style="max-width:100%;border-radius:12px;display:block;margin:0 auto"/></div>`
          )
          .join("");
      }
      return "";
    })
    .join("\n");

  const unsubscribeUrl = `${SITE_URL}/api/newsletter/unsubscribe?email=${encodeURIComponent(recipientEmail)}`;

  return `<!DOCTYPE html>
<html lang="pt-BR">
<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width,initial-scale=1">
${previewText ? `<meta name="description" content="${previewText}">` : ""}
<title>${subject}</title>
</head>
<body style="margin:0;padding:0;background:#f7fafc;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif">
  <div style="max-width:600px;margin:0 auto;padding:24px 16px">

    <!-- Header -->
    <div style="text-align:center;padding:24px 0 32px">
      <a href="${SITE_URL}" style="text-decoration:none">
        <span style="font-size:24px;font-weight:700;color:#0e9aa7">Nutri</span><span style="font-size:24px;font-weight:700;color:#1a202c">Synapse</span>
      </a>
    </div>

    <!-- Card -->
    <div style="background:#ffffff;border-radius:16px;padding:32px 28px;box-shadow:0 1px 4px rgba(0,0,0,.06)">
      ${body}
    </div>

    <!-- Footer -->
    <div style="text-align:center;padding:28px 0;color:#a0aec0;font-size:12px;line-height:1.6">
      <p style="margin:0 0 4px">Nutrisynapse — Neurociência, Nutrição e Psicanálise</p>
      <p style="margin:0">
        <a href="${unsubscribeUrl}" style="color:#a0aec0;text-decoration:underline">Cancelar inscrição</a>
      </p>
    </div>

  </div>
</body>
</html>`;
}

// ─────────────────────────────────────────────
// Batch send with rate-limit guard
// Resend free tier: 100 emails/day, ~2 req/sec
// Strategy: batches of 10, 1.2s delay between batches
// TODO: migrar para fila (Bull+Redis ou SQS) quando lista > 500 e precisar
//       de envio confiável com retry, similar ao padrão da NR1.
// ─────────────────────────────────────────────

const BATCH_SIZE = 10;
const BATCH_DELAY_MS = 1200;

function sleep(ms: number) {
  return new Promise((r) => setTimeout(r, ms));
}

interface SendResult {
  sent: number;
  failed: number;
}

export async function sendNewsletterCampaign(
  subject: string,
  previewText: string | null,
  contents: ContentBlock[],
  subscribers: { name: string; email: string }[]
): Promise<SendResult> {
  if (!process.env.RESEND_API_KEY) {
    console.warn("[resend] RESEND_API_KEY not set — skipping send");
    return { sent: 0, failed: subscribers.length };
  }

  let sent = 0;
  let failed = 0;

  for (let i = 0; i < subscribers.length; i += BATCH_SIZE) {
    const batch = subscribers.slice(i, i + BATCH_SIZE);

    const emails = batch.map((sub) => ({
      from: FROM_EMAIL,
      to: sub.email,
      subject,
      html: buildEmailHtml(subject, previewText, contents, sub.email),
    }));

    try {
      const result = await getResend().batch.send(emails);
      // resend.batch.send returns { data, error }
      const data = (result as unknown as { data?: unknown[] }).data;
      sent += Array.isArray(data) ? data.length : batch.length;
    } catch (err) {
      console.error("[resend] batch failed:", err);
      failed += batch.length;
    }

    // Rate-limit guard: wait between batches (except last)
    if (i + BATCH_SIZE < subscribers.length) {
      await sleep(BATCH_DELAY_MS);
    }
  }

  return { sent, failed };
}

// ─────────────────────────────────────────────
// Transactional emails → moved to mail.ts (all via Resend now)
// ─────────────────────────────────────────────
