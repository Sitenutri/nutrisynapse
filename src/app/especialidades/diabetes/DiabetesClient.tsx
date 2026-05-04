"use client";

import { useState, useEffect } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import EbookCard from "@/components/EbookCard";
import { FiGift, FiBookOpen } from "react-icons/fi";
import { trackLeadMagnet } from "@/lib/analytics";

interface Ebook {
  id: string;
  title: string;
  description: string;
  coverImage: string | null;
  price: number;
  originalPrice: number | null;
  targetAudience: string | null;
  buyLink: string | null;
}

export default function DiabetesClient() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [leadStatus, setLeadStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [ebooks, setEbooks] = useState<Ebook[]>([]);

  useEffect(() => {
    fetch("/api/ebooks?category=diabetes")
      .then((r) => r.json())
      .then((data: Ebook[]) => setEbooks(data))
      .catch(() => {});
  }, []);

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, leadMagnet: "checklist-seguranca-diabetes" }),
      });
      if (res.ok) {
        setLeadStatus("success");
        setName("");
        setEmail("");
        trackLeadMagnet("checklist-seguranca-diabetes");
      } else {
        setLeadStatus("error");
      }
    } catch {
      setLeadStatus("error");
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="bg-agua/10 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-block bg-agua-dark/10 text-agua-dark text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Especialidade
            </div>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-4">Diabetes</h1>
          </ScrollReveal>
          <ScrollReveal delay={0.15}>
            <p className="text-lg sm:text-xl text-agua-dark font-medium mb-6">
              Cuidar de quem tem diabetes é um ato de amor, ciência e coragem.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <div className="text-text-light leading-relaxed space-y-4 text-base sm:text-lg">
              <p>
                Na NutriSynapse, acreditamos que o cuidado com a diabetes vai muito além de contar
                carboidratos. Ele passa pelo acolhimento da família, pela compreensão dos
                mecanismos cerebrais que influenciam escolhas alimentares e pela construção de uma
                rotina que respeite o ritmo de cada pessoa.
              </p>
              <p>
                Nossos materiais foram desenvolvidos com rigor científico e sensibilidade humana,
                unindo neurociência, nutrição e psicanálise para oferecer um cuidado verdadeiramente
                integral. Porque cada pessoa com diabetes merece mais do que protocolos — merece
                compreensão.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* E-books */}
      <section className="py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-text text-center mb-3">
              Nossos E-books sobre Diabetes
            </h2>
            <p className="text-text-light text-center max-w-2xl mx-auto mb-10">
              Cada e-book foi cuidadosamente elaborado para transformar informação em ação,
              e ciência em cuidado.
            </p>
          </ScrollReveal>

          {ebooks.length > 0 ? (
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
              {ebooks.map((ebook, i) => (
                <ScrollReveal key={ebook.id} delay={i * 0.1}>
                  <EbookCard
                    title={ebook.title}
                    description={ebook.description}
                    coverImage={ebook.coverImage}
                    price={ebook.price}
                    originalPrice={ebook.originalPrice}
                    targetAudience={ebook.targetAudience}
                    buyLink={ebook.buyLink}
                  />
                </ScrollReveal>
              ))}
            </div>
          ) : (
            <ScrollReveal>
              <div className="flex flex-col items-center justify-center py-16 text-center">
                <div className="w-14 h-14 rounded-full bg-agua/10 flex items-center justify-center mb-4">
                  <FiBookOpen className="w-6 h-6 text-agua-dark" />
                </div>
                <p className="text-text font-medium mb-1">Em breve</p>
                <p className="text-text-light text-sm max-w-xs">
                  Novos e-books sobre diabetes chegando em breve!
                </p>
              </div>
            </ScrollReveal>
          )}
        </div>
      </section>

      {/* Lead Magnet */}
      <section className="bg-verde/10 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <ScrollReveal>
            <div className="w-14 h-14 rounded-2xl bg-verde/20 flex items-center justify-center mx-auto mb-4">
              <FiGift className="w-7 h-7 text-verde-dark" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-2">Material Gratuito</h3>
            <h4 className="text-lg font-medium text-verde-dark mb-3">
              Checklist de Segurança Alimentar para Famílias com Diabetes
            </h4>
            <p className="text-text-light mb-6 text-sm leading-relaxed">
              Baixe gratuitamente nosso checklist completo com orientações práticas para manter a
              segurança alimentar em casa. Um recurso essencial para famílias que convivem com a
              diabetes no dia a dia.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            {leadStatus === "success" ? (
              <div className="bg-verde/20 text-verde-dark px-6 py-4 rounded-xl">
                <p className="font-medium">Obrigado! Verifique seu e-mail para baixar o checklist.</p>
              </div>
            ) : (
              <form onSubmit={handleLeadSubmit} className="flex flex-col sm:flex-row gap-3">
                <input
                  type="text"
                  placeholder="Seu nome"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-xl border border-beige-dark bg-white text-sm focus:outline-none focus:ring-2 focus:ring-verde"
                />
                <input
                  type="email"
                  placeholder="Seu e-mail"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="flex-1 px-4 py-3 rounded-xl border border-beige-dark bg-white text-sm focus:outline-none focus:ring-2 focus:ring-verde"
                />
                <button
                  type="submit"
                  disabled={leadStatus === "loading"}
                  className="px-6 py-3 bg-verde-dark text-white text-sm font-medium rounded-xl hover:bg-verde transition-colors disabled:opacity-50"
                >
                  {leadStatus === "loading" ? "Enviando..." : "Baixar Checklist"}
                </button>
              </form>
            )}
            {leadStatus === "error" && (
              <p className="text-red-500 text-sm mt-3">Erro ao enviar. Tente novamente.</p>
            )}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
