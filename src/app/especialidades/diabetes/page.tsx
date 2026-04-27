"use client";

import { useState } from "react";
import ScrollReveal from "@/components/ScrollReveal";
import { FiBook, FiCreditCard, FiSmartphone, FiFileText, FiGift, FiShield } from "react-icons/fi";

const diabetesEbooks = [
  {
    title: "DoceEquilíbrio",
    subtitle: "Guia para famílias com diabetes infantil",
    description:
      "Um guia acolhedor e cientificamente embasado para famílias que convivem com a diabetes tipo 1 em crianças. Da rotina escolar à cozinha, cada capítulo foi pensado para transformar medo em confiança e insegurança em preparo. Inclui planos alimentares, dicas de emergência e histórias reais de famílias que encontraram o equilíbrio.",
    targetAudience: "Famílias com crianças diagnosticadas com diabetes tipo 1 ou tipo 2",
    price: 47.9,
    originalPrice: 59.9,
  },
  {
    title: "NeuroDoces",
    subtitle: "150 receitas sem açúcar que nutrem o cérebro",
    description:
      "Receitas deliciosas, seguras e cientificamente formuladas para quem precisa controlar a glicemia sem abrir mão do prazer à mesa. Cada receita foi desenvolvida para nutrir não apenas o corpo, mas também o cérebro, com ingredientes que favorecem a função cognitiva e o bem-estar emocional.",
    targetAudience: "Pessoas com diabetes, cuidadores e profissionais de nutrição",
    price: 39.9,
    originalPrice: 54.9,
  },
  {
    title: "Refeições Saudáveis Congeladas",
    subtitle: "Praticidade para rotinas corridas",
    description:
      "Para quem cuida de alguém com diabetes e não tem tempo a perder: um manual prático de meal prep com receitas que podem ser congeladas sem perder valor nutricional. Organização semanal, listas de compras e tabelas nutricionais completas.",
    targetAudience: "Cuidadores, mães e pais com rotinas intensas",
    price: 34.9,
  },
  {
    title: "Guia de Segurança Alimentar",
    subtitle: "Prevenção de infecções e picos glicêmicos",
    description:
      "Um manual indispensável que cruza segurança alimentar com controle glicêmico. Aprenda a armazenar, preparar e servir alimentos de forma segura, prevenindo contaminações que podem desestabilizar o controle da diabetes.",
    targetAudience: "Cuidadores, profissionais de saúde e famílias",
    price: 29.9,
    originalPrice: 39.9,
  },
];

export default function DiabetesPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [leadStatus, setLeadStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

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
            <h1 className="text-3xl sm:text-4xl font-bold text-text mb-4">
              Diabetes
            </h1>
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

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-2">
            {diabetesEbooks.map((ebook, i) => (
              <ScrollReveal key={ebook.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full">
                  {/* Cover placeholder */}
                  <div className="h-48 bg-gradient-to-br from-agua-light/40 via-azul-light/30 to-verde/20 flex items-center justify-center relative">
                    <div className="w-16 h-16 rounded-2xl bg-white/70 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <FiBook className="w-7 h-7 text-agua-dark" />
                    </div>
                    {ebook.originalPrice && (
                      <div className="absolute top-3 right-3 bg-verde text-white text-xs font-bold px-3 py-1 rounded-full">
                        {Math.round((1 - ebook.price / ebook.originalPrice) * 100)}% OFF
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-text text-xl">{ebook.title}</h3>
                    {ebook.subtitle && (
                      <p className="text-agua-dark text-sm font-medium mt-1">{ebook.subtitle}</p>
                    )}
                    <p className="text-sm text-text-light mt-3 flex-1 leading-relaxed">
                      {ebook.description}
                    </p>

                    <p className="text-xs text-agua-dark mt-4 bg-agua/10 px-3 py-2 rounded-lg">
                      Público-alvo: {ebook.targetAudience}
                    </p>

                    <div className="mt-4 flex items-center gap-3">
                      {ebook.originalPrice && (
                        <span className="text-sm text-text-light line-through">
                          {ebook.originalPrice.toLocaleString("pt-BR", {
                            style: "currency",
                            currency: "BRL",
                          })}
                        </span>
                      )}
                      <span className="text-xl font-bold text-agua-dark">
                        {ebook.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>
                    </div>

                    <a
                      href="#"
                      className="mt-4 block text-center px-6 py-3 bg-agua-dark text-white text-sm font-medium rounded-xl hover:bg-agua transition-colors"
                    >
                      Comprar agora
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Payment Info */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm text-center">
              <h3 className="text-xl font-bold text-text mb-3">Formas de Pagamento</h3>
              <p className="text-text-light text-sm mb-6">
                Todas as compras são processadas de forma segura via Kiwify.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-beige px-4 py-2.5 rounded-xl">
                  <FiCreditCard className="w-5 h-5 text-agua-dark" />
                  <span className="text-sm font-medium text-text">Cartão de Crédito</span>
                </div>
                <div className="flex items-center gap-2 bg-beige px-4 py-2.5 rounded-xl">
                  <FiSmartphone className="w-5 h-5 text-agua-dark" />
                  <span className="text-sm font-medium text-text">Pix</span>
                </div>
                <div className="flex items-center gap-2 bg-beige px-4 py-2.5 rounded-xl">
                  <FiFileText className="w-5 h-5 text-agua-dark" />
                  <span className="text-sm font-medium text-text">Boleto Bancário</span>
                </div>
              </div>
              <p className="text-xs text-text-light mt-4 flex items-center justify-center gap-1">
                <FiShield className="w-3.5 h-3.5" />
                Pagamento 100% seguro. Acesso imediato após confirmação.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Lead Magnet / Newsletter */}
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
                <p className="font-medium">
                  Obrigado! Verifique seu e-mail para baixar o checklist.
                </p>
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
