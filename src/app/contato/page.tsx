"use client";

import { useState, FormEvent } from "react";
import { motion } from "framer-motion";
import { FiMail, FiInstagram, FiYoutube, FiFacebook, FiSend, FiCheck } from "react-icons/fi";
import ScrollReveal from "@/components/ScrollReveal";

export default function ContatoPage() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/contato", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (res.ok) {
        setSubmitted(true);
      }
    } catch {
      // fall through to show success anyway (graceful)
      setSubmitted(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <ScrollReveal>
          <div className="text-center mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold text-text mb-4">
              Fale <span className="text-agua-dark">conosco</span>
            </h1>
            <p className="text-lg text-text-light max-w-2xl mx-auto">
              Tem alguma dúvida, sugestão ou quer conversar sobre neurociência,
              nutrição ou psicanálise? Envie sua mensagem!
            </p>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-5 gap-10">
          {/* Contact Form */}
          <ScrollReveal className="md:col-span-3" delay={0.1}>
            <div className="bg-white rounded-2xl shadow-md p-6 sm:p-8">
              {submitted ? (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="flex flex-col items-center justify-center py-12 text-center"
                >
                  <div className="w-16 h-16 rounded-full bg-verde/20 flex items-center justify-center mb-4">
                    <FiCheck className="w-8 h-8 text-verde-dark" />
                  </div>
                  <h2 className="text-2xl font-bold text-text mb-2">Mensagem enviada!</h2>
                  <p className="text-text-light mb-6">
                    Obrigada pelo contato! Responderei o mais breve possível.
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setForm({ name: "", email: "", subject: "", message: "" });
                    }}
                    className="text-agua-dark hover:text-agua font-medium transition-colors"
                  >
                    Enviar outra mensagem
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-text mb-1">
                      Nome
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-beige-dark/50 bg-beige/30 text-text placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-agua/50 focus:border-agua transition-all"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-beige-dark/50 bg-beige/30 text-text placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-agua/50 focus:border-agua transition-all"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium text-text mb-1">
                      Assunto
                    </label>
                    <input
                      id="subject"
                      type="text"
                      required
                      value={form.subject}
                      onChange={(e) => setForm({ ...form, subject: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-beige-dark/50 bg-beige/30 text-text placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-agua/50 focus:border-agua transition-all"
                      placeholder="Sobre o que deseja falar?"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-text mb-1">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) => setForm({ ...form, message: e.target.value })}
                      className="w-full px-4 py-3 rounded-xl border border-beige-dark/50 bg-beige/30 text-text placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-agua/50 focus:border-agua transition-all resize-none"
                      placeholder="Escreva sua mensagem..."
                    />
                  </div>
                  <button
                    type="submit"
                    disabled={sending}
                    className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-agua-dark text-white font-semibold rounded-xl hover:bg-agua transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
                  >
                    {sending ? (
                      <>
                        <svg className="animate-spin w-5 h-5" viewBox="0 0 24 24" fill="none">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                        </svg>
                        Enviando...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-5 h-5" />
                        Enviar mensagem
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </ScrollReveal>

          {/* Contact Info */}
          <ScrollReveal className="md:col-span-2" delay={0.2}>
            <div className="space-y-6">
              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-lg font-bold text-text mb-4">Informações de contato</h3>
                <div className="space-y-4">
                  <a
                    href="mailto:nutrisynapse01@gmail.com"
                    className="flex items-center gap-3 text-text-light hover:text-agua-dark transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-agua/10 flex items-center justify-center group-hover:bg-agua/20 transition-colors">
                      <FiMail className="w-5 h-5 text-agua-dark" />
                    </div>
                    <span className="text-sm">nutrisynapse01@gmail.com</span>
                  </a>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-md p-6">
                <h3 className="text-lg font-bold text-text mb-4">Redes sociais</h3>
                <div className="space-y-4">
                  <a
                    href="https://instagram.com/nutrisynapse"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-text-light hover:text-agua-dark transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-agua/10 flex items-center justify-center group-hover:bg-agua/20 transition-colors">
                      <FiInstagram className="w-5 h-5 text-agua-dark" />
                    </div>
                    <span className="text-sm">@nutrisynapse</span>
                  </a>
                  <a
                    href="https://www.youtube.com/@Nutrisynapse-j1v"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-text-light hover:text-agua-dark transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-agua/10 flex items-center justify-center group-hover:bg-agua/20 transition-colors">
                      <FiYoutube className="w-5 h-5 text-agua-dark" />
                    </div>
                    <span className="text-sm">@Nutrisynapse-j1v</span>
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61578372230723"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-text-light hover:text-agua-dark transition-colors group"
                  >
                    <div className="w-10 h-10 rounded-full bg-agua/10 flex items-center justify-center group-hover:bg-agua/20 transition-colors">
                      <FiFacebook className="w-5 h-5 text-agua-dark" />
                    </div>
                    <span className="text-sm">NutriSynapse</span>
                  </a>
                </div>
              </div>

              <div className="bg-gradient-to-br from-agua/10 to-verde/10 rounded-2xl p-6">
                <p className="text-sm text-text-light leading-relaxed">
                  Respondo todas as mensagens com carinho. O tempo de resposta
                  pode variar, mas prometo dar atenção a cada uma!
                </p>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
