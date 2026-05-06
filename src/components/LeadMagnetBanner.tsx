"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { FiDownload } from "react-icons/fi";

interface LeadMagnetEbook {
  id: string;
  title: string;
  description: string;
  coverImage: string | null;
}

export default function LeadMagnetBanner() {
  const [ebook, setEbook] = useState<LeadMagnetEbook | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  useEffect(() => {
    fetch("/api/lead-magnet")
      .then((r) => r.json())
      .then((data) => {
        if (data.enabled && data.ebook) {
          setEnabled(true);
          setEbook(data.ebook);
        }
      })
      .catch(() => {});
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
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
  };

  if (!enabled || !ebook) return null;

  return (
    <section className="bg-gradient-to-r from-verde/10 via-agua/10 to-azul-light/10 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white rounded-3xl shadow-sm p-6 sm:p-8 flex flex-col sm:flex-row items-center gap-6 sm:gap-8">
          {/* Cover image */}
          {ebook.coverImage && (
            <div className="relative w-32 sm:w-40 aspect-[3/4] rounded-2xl overflow-hidden shadow-md flex-shrink-0">
              <Image
                src={ebook.coverImage}
                alt={ebook.title}
                fill
                className="object-cover"
                sizes="160px"
              />
            </div>
          )}

          {/* Content */}
          <div className="flex-1 text-center sm:text-left">
            <div className="inline-flex items-center gap-2 bg-verde/15 text-verde-dark text-xs font-bold px-3 py-1.5 rounded-full mb-3">
              <FiDownload className="w-3.5 h-3.5" />
              GRATIS
            </div>

            <h3 className="text-xl sm:text-2xl font-bold text-text">
              Baixe gratis!
            </h3>
            <p className="mt-1 text-sm text-text-light">
              {ebook.title}
            </p>

            {status === "success" ? (
              <div className="mt-4 bg-verde/20 text-verde-dark px-4 py-3 rounded-xl text-sm font-medium">
                Pronto! Verifique seu e-mail para baixar o e-book.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="mt-4 flex flex-col sm:flex-row gap-2">
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-xl border border-beige-dark bg-beige/30 text-sm focus:outline-none focus:ring-2 focus:ring-agua"
                />
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-xl border border-beige-dark bg-beige/30 text-sm focus:outline-none focus:ring-2 focus:ring-agua"
                />
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className="px-6 py-3 bg-verde-dark text-white text-sm font-medium rounded-xl hover:bg-verde transition-colors disabled:opacity-50 whitespace-nowrap"
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
    </section>
  );
}
