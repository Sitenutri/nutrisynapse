"use client";

import { useEffect, useState, useCallback } from "react";
import Image from "next/image";
import { FiDownload, FiX } from "react-icons/fi";

interface LeadMagnetEbook {
  id: string;
  title: string;
  description: string;
  coverImage: string | null;
}

export default function LeadMagnetBanner() {
  const [ebook, setEbook] = useState<LeadMagnetEbook | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [open, setOpen] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    // Don't auto-open if user already dismissed this session
    const dismissed = sessionStorage.getItem("lead-magnet-dismissed");
    fetch("/api/lead-magnet")
      .then((r) => r.json())
      .then((data) => {
        if (data.enabled && data.ebook) {
          setEnabled(true);
          setEbook(data.ebook);
          // Auto-open after 2s if not dismissed this session
          if (!dismissed) {
            setTimeout(() => setOpen(true), 2000);
          }
        }
      })
      .catch(() => {});
  }, []);

  // Close on Escape key
  useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [open]);

  // Prevent body scroll when dialog is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSubmit = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault();
      if (!name || !email) return;
      setStatus("loading");
      try {
        const res = await fetch("/api/lead-magnet", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email }),
        });
        if (res.ok) {
          setStatus("success");
          setName("");
          setEmail("");
        } else {
          setStatus("error");
        }
      } catch {
        setStatus("error");
      }
    },
    [name, email]
  );

  if (!enabled || !ebook) return null;

  return (
    <>
      {/* Floating trigger button */}
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-5 py-3 bg-verde-dark text-white font-semibold rounded-2xl shadow-lg hover:bg-verde hover:shadow-xl transition-all duration-300 animate-bounce-slow"
        aria-label="E-book gratuito"
      >
        <FiDownload className="w-5 h-5" />
        <span className="hidden sm:inline">E-book Gratis!</span>
        <span className="sm:hidden">Gratis!</span>
      </button>

      {/* Dialog overlay */}
      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          role="dialog"
          aria-modal="true"
        >
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 backdrop-blur-sm"
            onClick={() => { setOpen(false); sessionStorage.setItem("lead-magnet-dismissed", "1"); }}
          />

          {/* Dialog content */}
          <div className="relative bg-white rounded-3xl shadow-2xl max-w-lg w-full p-6 sm:p-8 animate-in fade-in zoom-in-95 duration-200">
            {/* Close button */}
            <button
              onClick={() => { setOpen(false); sessionStorage.setItem("lead-magnet-dismissed", "1"); }}
              className="absolute top-4 right-4 p-2 text-text-light hover:text-text rounded-xl hover:bg-beige/50 transition-colors"
              aria-label="Fechar"
            >
              <FiX className="w-5 h-5" />
            </button>

            <div className="flex flex-col items-center text-center">
              {/* Cover image */}
              {ebook.coverImage && (
                <div className="relative w-36 sm:w-44 aspect-[3/4] rounded-2xl overflow-hidden shadow-md mb-5">
                  <Image
                    src={ebook.coverImage}
                    alt={ebook.title}
                    fill
                    className="object-contain"
                    sizes="176px"
                  />
                </div>
              )}

              {/* Badge */}
              <div className="inline-flex items-center gap-2 bg-verde/15 text-verde-dark text-xs font-bold px-3 py-1.5 rounded-full mb-3">
                <FiDownload className="w-3.5 h-3.5" />
                GRATIS
              </div>

              <h3 className="text-xl sm:text-2xl font-bold text-text">
                Baixe gratis!
              </h3>
              <p className="mt-1 text-sm text-text-light max-w-sm">
                {ebook.title}
              </p>
              {ebook.description && (
                <p className="mt-2 text-xs text-text-light/80 max-w-sm leading-relaxed">
                  {ebook.description}
                </p>
              )}

              {status === "success" ? (
                <div className="mt-5 w-full bg-verde/20 text-verde-dark px-4 py-4 rounded-xl text-sm font-medium">
                  Pronto! Verifique seu e-mail para baixar o e-book.
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-5 w-full space-y-3">
                  <input
                    type="text"
                    placeholder="Seu nome"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-beige-dark bg-beige/30 text-sm focus:outline-none focus:ring-2 focus:ring-agua"
                  />
                  <input
                    type="email"
                    placeholder="Seu e-mail"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-beige-dark bg-beige/30 text-sm focus:outline-none focus:ring-2 focus:ring-agua"
                  />
                  <button
                    type="submit"
                    disabled={status === "loading"}
                    className="w-full px-6 py-3.5 bg-verde-dark text-white text-sm font-semibold rounded-xl hover:bg-verde transition-colors disabled:opacity-50"
                  >
                    {status === "loading" ? "Enviando..." : "Quero o E-book"}
                  </button>
                </form>
              )}

              {status === "error" && (
                <p className="text-red-500 text-xs mt-2">Erro ao enviar. Tente novamente.</p>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
