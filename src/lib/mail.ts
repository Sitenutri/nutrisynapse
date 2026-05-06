import nodemailer from "nodemailer";

const NOTIFY_EMAIL = "nutrisynapse01@gmail.com";

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

export async function notifyNewsletter(name: string, email: string) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("[mail] SMTP_USER/SMTP_PASS not set — skipping email notification");
    return;
  }

  await transporter.sendMail({
    from: `"Nutrisynapse" <${process.env.SMTP_USER}>`,
    to: NOTIFY_EMAIL,
    subject: `📬 Nova inscrição na newsletter: ${name}`,
    html: `
      <h2>Nova inscrição na newsletter</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Data:</strong> ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</p>
    `,
  });
}

export async function sendLeadMagnetEmail(name: string, email: string, ebookTitle: string, downloadUrl: string) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("[mail] SMTP_USER/SMTP_PASS not set — skipping lead magnet email");
    return;
  }

  await transporter.sendMail({
    from: `"Nutrisynapse" <${process.env.SMTP_USER}>`,
    to: email,
    subject: `Seu e-book gratuito: ${ebookTitle}`,
    html: `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #2d3748;">Ola, ${name}!</h2>
        <p style="color: #4a5568; font-size: 16px; line-height: 1.6;">
          Obrigada por se inscrever! Aqui esta o seu e-book gratuito:
        </p>
        <h3 style="color: #2d3748;">${ebookTitle}</h3>
        <a href="${downloadUrl}" style="display: inline-block; background-color: #0e9aa7; color: white; padding: 14px 28px; border-radius: 12px; text-decoration: none; font-weight: bold; margin: 20px 0;">
          Baixar E-book
        </a>
        <p style="color: #718096; font-size: 14px; margin-top: 30px;">
          Voce tambem foi inscrito(a) na nossa newsletter para receber conteudos exclusivos sobre neurociencia, nutricao e bem-estar.
        </p>
        <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
        <p style="color: #a0aec0; font-size: 12px;">
          Nutrisynapse — Neurociencia, Nutricao e Psicanalise
        </p>
      </div>
    `,
  });
}

export async function notifyContact(name: string, email: string, subject: string, message: string) {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.warn("[mail] SMTP_USER/SMTP_PASS not set — skipping email notification");
    return;
  }

  await transporter.sendMail({
    from: `"Nutrisynapse" <${process.env.SMTP_USER}>`,
    to: NOTIFY_EMAIL,
    replyTo: email,
    subject: `💬 Contato: ${subject}`,
    html: `
      <h2>Nova mensagem de contato</h2>
      <p><strong>Nome:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Assunto:</strong> ${subject}</p>
      <hr/>
      <p>${message.replace(/\n/g, "<br/>")}</p>
      <hr/>
      <p><small>Enviado em ${new Date().toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}</small></p>
    `,
  });
}
