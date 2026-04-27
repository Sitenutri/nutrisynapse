"use client";

import { useState } from "react";
import Link from "next/link";
import ScrollReveal from "@/components/ScrollReveal";
import {
  FiBook,
  FiCreditCard,
  FiSmartphone,
  FiFileText,
  FiGift,
  FiShield,
  FiArrowRight,
  FiCheckCircle,
} from "react-icons/fi";
import { FaBrain, FaLeaf, FaHeartbeat } from "react-icons/fa";
import { GiMicroscope, GiStomach } from "react-icons/gi";

/* ------------------------------------------------------------------ */
/*  Data                                                               */
/* ------------------------------------------------------------------ */

const sections = [
  {
    icon: GiStomach,
    title: "O que é a Microbiota Intestinal?",
    content:
      "A microbiota intestinal é o conjunto de trilhões de microrganismos — bactérias, fungos, vírus e archaea — que habitam o trato gastrointestinal. Esse ecossistema complexo pesa cerca de 1,5 kg e contém mais genes do que o próprio genoma humano. Longe de ser apenas um \"passageiro\", a microbiota é um órgão funcional que participa ativamente da digestão, produção de vitaminas, regulação do sistema imunológico e até da comunicação com o cérebro.",
    color: "verde",
  },
  {
    icon: FaBrain,
    title: "O Eixo Intestino-Cérebro",
    content:
      "O intestino e o cérebro conversam constantemente através do nervo vago, de neurotransmissores e de moléculas sinalizadoras produzidas pelas bactérias intestinais. Cerca de 90% da serotonina — o neurotransmissor do bem-estar — é produzida no intestino. Isso significa que desequilíbrios na microbiota podem impactar diretamente o humor, a ansiedade, a qualidade do sono e até a capacidade cognitiva. Entender essa conexão é fundamental para uma abordagem verdadeiramente integrativa da saúde.",
    color: "agua",
  },
  {
    icon: FaLeaf,
    title: "Como a Nutrição Transforma sua Microbiota",
    content:
      "A alimentação é o fator mais poderoso na modulação da microbiota intestinal. Fibras prebióticas (presentes em alho, cebola, banana verde e aveia) alimentam as bactérias benéficas. Alimentos fermentados (como kefir, kimchi e chucrute) introduzem probióticos naturais. Polifenóis de frutas vermelhas, chá verde e cacau também favorecem a diversidade microbiana. Por outro lado, dietas ricas em ultraprocessados, açúcar refinado e gorduras trans empobrecem a microbiota e aumentam a permeabilidade intestinal.",
    color: "verde",
  },
  {
    icon: FaHeartbeat,
    title: "A Abordagem da Bibi",
    content:
      "Na NutriSynapse, a Bibi integra neurociência, nutrição funcional e psicanálise para cuidar da sua microbiota de forma profunda e personalizada. Não se trata apenas de tomar probióticos — é sobre entender como suas emoções, hábitos e história de vida moldaram seu ecossistema intestinal. Com mais de 10 especializações e experiência internacional, a Bibi traduz a ciência mais atual em orientações práticas, respeitando sua individualidade biológica e emocional.",
    color: "agua",
  },
];

const benefits = [
  "Melhora do humor e redução da ansiedade",
  "Fortalecimento do sistema imunológico",
  "Melhor absorção de nutrientes essenciais",
  "Redução de inflamação crônica",
  "Melhora da qualidade do sono",
  "Regulação do peso corporal",
  "Produção adequada de neurotransmissores",
  "Prevenção de doenças crônicas",
];

const microbiotaEbooks = [
  {
    title: "Microbiota Intestinal: O Segundo Cérebro",
    subtitle: "Guia completo para cuidar do seu ecossistema interior",
    description:
      "Como cuidar da sua microbiota para melhorar imunidade, humor, peso e saúde mental. Inclui plano alimentar de 30 dias, lista de alimentos prebióticos e probióticos, e receitas funcionais para nutrir suas bactérias benéficas.",
    targetAudience: "Público geral interessado em saúde intestinal",
    price: 29.9,
    originalPrice: 44.9,
  },
  {
    title: "Fermentados Caseiros: Da Ciência à Cozinha",
    subtitle: "Receitas e técnicas para produção artesanal",
    description:
      "Aprenda a preparar kefir, kombucha, chucrute, kimchi e outros fermentados em casa com segurança. Cada receita vem acompanhada da explicação científica sobre os microrganismos envolvidos e seus benefícios específicos para a saúde.",
    targetAudience: "Entusiastas de alimentação saudável e fermentação",
    price: 34.9,
    originalPrice: 49.9,
  },
  {
    title: "Eixo Intestino-Cérebro na Prática",
    subtitle: "Protocolos nutricionais para saúde mental",
    description:
      "Um guia baseado em evidências que conecta saúde intestinal e saúde mental. Protocolos nutricionais para ansiedade, depressão, insônia e fadiga crônica, todos ancorados na modulação da microbiota via alimentação funcional.",
    targetAudience: "Profissionais de saúde e pessoas com queixas emocionais",
    price: 39.9,
    originalPrice: 54.9,
  },
];

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function MicrobiotaPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [leadStatus, setLeadStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleLeadSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLeadStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name,
          email,
          leadMagnet: "guia-probioticos-microbiota",
        }),
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
      {/* ============================================================ */}
      {/*  HERO                                                         */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-verde/10 via-white to-agua-light/20 py-16 sm:py-20 px-4 sm:px-6 lg:px-8">
        {/* Decorative circles */}
        <div className="absolute -top-20 -right-20 h-60 w-60 rounded-full bg-verde/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-48 w-48 rounded-full bg-agua/10 blur-3xl" />

        <div className="relative max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <div className="inline-block bg-verde-dark/10 text-verde-dark text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Especialidade
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4">
              Microbiota Intestinal
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-lg sm:text-xl text-verde-dark font-medium mb-6">
              Seu intestino é seu segundo cérebro. Cuidar dele é cuidar de tudo.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="text-text-light leading-relaxed space-y-4 text-base sm:text-lg max-w-2xl mx-auto">
              <p>
                A microbiota intestinal é um universo de trilhões de
                microrganismos que influenciam diretamente sua saúde mental,
                emocional e física. Na NutriSynapse, exploramos o eixo
                intestino-cérebro com rigor científico e olhar integrador,
                unindo nutrição funcional, neurociência aplicada e psicanálise.
              </p>
              <p>
                Entender sua microbiota é o primeiro passo para prevenir
                doenças, melhorar o humor, fortalecer a imunidade e construir
                uma relação mais saudável com a alimentação. Cada material que
                produzimos traduz ciência complexa em ações práticas para o seu
                dia a dia.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  CONTENT SECTIONS                                             */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((section, i) => {
            const isGreen = section.color === "verde";
            return (
              <ScrollReveal key={section.title} delay={i * 0.1}>
                <div
                  className={`rounded-2xl p-6 sm:p-8 ${
                    isGreen ? "bg-verde/5" : "bg-agua/5"
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div
                      className={`flex-shrink-0 w-12 h-12 rounded-xl flex items-center justify-center ${
                        isGreen
                          ? "bg-verde/15 text-verde-dark"
                          : "bg-agua/15 text-agua-dark"
                      }`}
                    >
                      <section.icon className="w-6 h-6" />
                    </div>
                    <div>
                      <h2 className="text-xl sm:text-2xl font-bold text-text mb-3">
                        {section.title}
                      </h2>
                      <p className="text-text-light leading-relaxed text-base sm:text-lg">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BENEFITS                                                     */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 px-4 sm:px-6 lg:px-8 bg-beige">
        <div className="max-w-4xl mx-auto">
          <ScrollReveal>
            <div className="text-center mb-12">
              <h2 className="text-2xl sm:text-3xl font-bold text-text mb-3">
                Benefícios de uma Microbiota Saudável
              </h2>
              <p className="text-text-light max-w-2xl mx-auto">
                Quando suas bactérias intestinais estão em equilíbrio, todo o
                corpo se beneficia.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {benefits.map((benefit, i) => (
              <ScrollReveal key={benefit} delay={i * 0.05}>
                <div className="flex items-center gap-3 bg-white rounded-xl p-4 shadow-sm">
                  <FiCheckCircle className="w-5 h-5 text-verde-dark flex-shrink-0" />
                  <span className="text-text text-sm sm:text-base">
                    {benefit}
                  </span>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  E-BOOKS                                                      */}
      {/* ============================================================ */}
      <section className="py-14 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <ScrollReveal>
            <h2 className="text-2xl sm:text-3xl font-bold text-text text-center mb-3">
              E-books sobre Microbiota
            </h2>
            <p className="text-text-light text-center max-w-2xl mx-auto mb-10">
              Cada e-book foi cuidadosamente elaborado para transformar
              informação em ação, e ciência em cuidado.
            </p>
          </ScrollReveal>

          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {microbiotaEbooks.map((ebook, i) => (
              <ScrollReveal key={ebook.title} delay={i * 0.1}>
                <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col h-full border border-beige-dark/20">
                  {/* Cover placeholder */}
                  <div className="h-48 bg-gradient-to-br from-verde/20 via-agua-light/30 to-azul-light/20 flex items-center justify-center relative">
                    <div className="w-16 h-16 rounded-2xl bg-white/70 backdrop-blur-sm flex items-center justify-center shadow-sm">
                      <FiBook className="w-7 h-7 text-verde-dark" />
                    </div>
                    {ebook.originalPrice && (
                      <div className="absolute top-3 right-3 bg-verde text-white text-xs font-bold px-3 py-1 rounded-full">
                        {Math.round(
                          (1 - ebook.price / ebook.originalPrice) * 100
                        )}
                        % OFF
                      </div>
                    )}
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-text text-xl">
                      {ebook.title}
                    </h3>
                    {ebook.subtitle && (
                      <p className="text-verde-dark text-sm font-medium mt-1">
                        {ebook.subtitle}
                      </p>
                    )}
                    <p className="text-sm text-text-light mt-3 flex-1 leading-relaxed">
                      {ebook.description}
                    </p>

                    <p className="text-xs text-verde-dark mt-4 bg-verde/10 px-3 py-2 rounded-lg">
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
                      <span className="text-xl font-bold text-verde-dark">
                        {ebook.price.toLocaleString("pt-BR", {
                          style: "currency",
                          currency: "BRL",
                        })}
                      </span>
                    </div>

                    <a
                      href="#"
                      className="mt-4 block text-center px-6 py-3 bg-verde-dark text-white text-sm font-medium rounded-xl hover:bg-verde transition-colors"
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

      {/* ============================================================ */}
      {/*  PAYMENT INFO                                                 */}
      {/* ============================================================ */}
      <section className="py-10 px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <ScrollReveal>
            <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm text-center">
              <h3 className="text-xl font-bold text-text mb-3">
                Formas de Pagamento
              </h3>
              <p className="text-text-light text-sm mb-6">
                Todas as compras são processadas de forma segura via Kiwify.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <div className="flex items-center gap-2 bg-beige px-4 py-2.5 rounded-xl">
                  <FiCreditCard className="w-5 h-5 text-verde-dark" />
                  <span className="text-sm font-medium text-text">
                    Cartão de Crédito
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-beige px-4 py-2.5 rounded-xl">
                  <FiSmartphone className="w-5 h-5 text-verde-dark" />
                  <span className="text-sm font-medium text-text">Pix</span>
                </div>
                <div className="flex items-center gap-2 bg-beige px-4 py-2.5 rounded-xl">
                  <FiFileText className="w-5 h-5 text-verde-dark" />
                  <span className="text-sm font-medium text-text">
                    Boleto Bancário
                  </span>
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

      {/* ============================================================ */}
      {/*  CTA — Explore more specialties                               */}
      {/* ============================================================ */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 bg-beige">
        <div className="max-w-3xl mx-auto text-center">
          <ScrollReveal>
            <GiMicroscope className="w-10 h-10 text-verde-dark mx-auto mb-4" />
            <h3 className="text-2xl font-bold text-text mb-3">
              Explore Outras Especialidades
            </h3>
            <p className="text-text-light mb-6 max-w-xl mx-auto">
              A saúde é um sistema integrado. Descubra como a NutriSynapse
              conecta microbiota, neurociência e nutrição em todas as áreas.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/especialidades/diabetes"
                className="inline-flex items-center gap-2 px-6 py-3 bg-agua-dark text-white text-sm font-medium rounded-xl hover:bg-agua transition-colors"
              >
                Diabetes
                <FiArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/blog"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-text text-sm font-medium rounded-xl border border-beige-dark hover:border-agua transition-colors"
              >
                Blog
                <FiArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  LEAD MAGNET                                                  */}
      {/* ============================================================ */}
      <section className="bg-verde/10 py-14 px-4 sm:px-6 lg:px-8">
        <div className="max-w-xl mx-auto text-center">
          <ScrollReveal>
            <div className="w-14 h-14 rounded-2xl bg-verde/20 flex items-center justify-center mx-auto mb-4">
              <FiGift className="w-7 h-7 text-verde-dark" />
            </div>
            <h3 className="text-2xl font-bold text-text mb-2">
              Material Gratuito
            </h3>
            <h4 className="text-lg font-medium text-verde-dark mb-3">
              Guia de Probióticos: Como Nutrir sua Microbiota no Dia a Dia
            </h4>
            <p className="text-text-light mb-6 text-sm leading-relaxed">
              Baixe gratuitamente nosso guia completo com orientações práticas
              sobre probióticos, prebióticos e alimentos fermentados para
              fortalecer sua microbiota intestinal. Inclui tabela de alimentos,
              dicas de preparo e um plano semanal para começar hoje mesmo.
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            {leadStatus === "success" ? (
              <div className="bg-verde/20 text-verde-dark px-6 py-4 rounded-xl">
                <p className="font-medium">
                  Obrigado! Verifique seu e-mail para baixar o guia.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleLeadSubmit}
                className="flex flex-col sm:flex-row gap-3"
              >
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
                  {leadStatus === "loading" ? "Enviando..." : "Baixar Guia"}
                </button>
              </form>
            )}

            {leadStatus === "error" && (
              <p className="text-red-500 text-sm mt-3">
                Erro ao enviar. Tente novamente.
              </p>
            )}
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
