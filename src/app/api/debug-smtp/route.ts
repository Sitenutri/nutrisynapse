import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function GET() {
  const diagnostics: Record<string, unknown> = {
    timestamp: new Date().toISOString(),
    smtp_user_set: !!process.env.SMTP_USER,
    smtp_pass_set: !!process.env.SMTP_PASS,
    smtp_user_value: process.env.SMTP_USER
      ? `${process.env.SMTP_USER.slice(0, 3)}***${process.env.SMTP_USER.slice(-4)}`
      : "NOT SET",
    smtp_pass_length: process.env.SMTP_PASS?.length ?? 0,
  };

  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    return NextResponse.json({
      ...diagnostics,
      status: "FAIL",
      error: "SMTP_USER or SMTP_PASS not configured in environment",
    });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Just verify the connection — doesn't send an email
    await transporter.verify();

    diagnostics.smtp_verify = "SUCCESS";
    diagnostics.status = "OK";

    // Optionally send a real test email
    const url = new URL("https://nutrisynapse.com/api/debug-smtp");
    // We won't send by default — add ?send=true to actually send
    return NextResponse.json(diagnostics);
  } catch (err: unknown) {
    const error = err as Error & { code?: string; responseCode?: number; response?: string };
    return NextResponse.json({
      ...diagnostics,
      status: "FAIL",
      error_message: error.message,
      error_code: error.code,
      error_response_code: error.responseCode,
      error_response: error.response,
    });
  }
}
