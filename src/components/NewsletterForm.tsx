"use client";

import { useState } from "react";

export default function NewsletterForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
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

  return (
    <section className="bg-agua/10 py-12 px-4">
      <div className="max-w-xl mx-auto text-center">
        <h3 className="text-2xl font-bold text-text mb-2">Fique por dentro</h3>
        <p className="text-text-light mb-6">
          Receba conteúdos exclusivos sobre nutrição, neurociência e bem-estar.
        </p>

        {status === "success" ? (
          <div className="bg-verde/20 text-verde-dark px-6 py-4 rounded-xl">
            <p className="font-medium">Obrigado por se inscrever! 💛</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-xl border border-beige-dark bg-white text-sm focus:outline-none focus:ring-2 focus:ring-agua"
            />
            <input
              type="email"
              placeholder="Seu e-mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="flex-1 px-4 py-3 rounded-xl border border-beige-dark bg-white text-sm focus:outline-none focus:ring-2 focus:ring-agua"
            />
            <button
              type="submit"
              disabled={status === "loading"}
              className="px-6 py-3 bg-agua-dark text-white text-sm font-medium rounded-xl hover:bg-agua transition-colors disabled:opacity-50"
            >
              {status === "loading" ? "Enviando..." : "Inscrever"}
            </button>
          </form>
        )}

        {status === "error" && (
          <p className="text-red-500 text-sm mt-3">Erro ao inscrever. Tente novamente.</p>
        )}
      </div>
    </section>
  );
}
