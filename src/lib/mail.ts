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
