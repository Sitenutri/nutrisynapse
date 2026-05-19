import { prisma } from "@/lib/prisma";

type LogLevel = "info" | "warn" | "error";

async function log(level: LogLevel, event: string, message: string, meta?: Record<string, unknown>) {
  // Always console.log too (aparece nos Vercel function logs)
  const logFn = level === "error" ? console.error : level === "warn" ? console.warn : console.log;
  logFn(`[${level.toUpperCase()}] [${event}] ${message}`, meta ?? "");

  try {
    await prisma.appLog.create({
      data: {
        level,
        event,
        message,
        meta: meta ? JSON.stringify(meta) : null,
      },
    });
  } catch (err) {
    // Não deixa o logger derrubar a request
    console.error("[logger] Failed to persist log:", err);
  }
}

export const logger = {
  info:  (event: string, message: string, meta?: Record<string, unknown>) => log("info",  event, message, meta),
  warn:  (event: string, message: string, meta?: Record<string, unknown>) => log("warn",  event, message, meta),
  error: (event: string, message: string, meta?: Record<string, unknown>) => log("error", event, message, meta),
};
