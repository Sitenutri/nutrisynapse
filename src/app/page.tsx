"use client";

import Link from "next/link";
import { useRef, useEffect, useState } from "react";
import { FaBrain, FaHeartbeat, FaLeaf, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { GiMicroscope } from "react-icons/gi";
import { FiAward, FiGlobe, FiBookOpen, FiHeart } from "react-icons/fi";
import ScrollReveal from "@/components/ScrollReveal";
import BlogCard from "@/components/BlogCard";
import EbookCard from "@/components/EbookCard";
import NewsletterForm from "@/components/NewsletterForm";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface PostTag {
  tag: { id: string; name: string; slug: string };
}

interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string | null;
  createdAt: string;
  tags: PostTag[];
}

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

const specializations = [
  "Comportamento Alimentar (2024)",
  "Nutrição Clínica, Metabolismo, Prática e Terapia (2024)",
  "Nutrição Funcional (2024)",
  "Nutrição Aplicada à Estética (2024)",
  "Nutrição Estética e Funcional (2024)",
  "Neurociência e Física da Consciência (2024)",
  "MBA Executivo em Coaching (2024)",
  "Fitoterapia e Prescrição de Fitoterápicos (2025)",
  "Gastronomia Funcional e Natural (2025)",
  "Desenvolvimento de Cosméticos e Aplicações Estéticas (2025)",
  "Psicanálise Clínica Avançada (2025)",
  "Neuropsicanálise (2025)",
  "Neuromarketing (2025)",
  "Diabetes e Doenças Crônicas (2026)",
  "Nutrição e Atividade Física (em andamento)",
  "Gestão de Qualidade e Segurança dos Alimentos Premium (2026)",
];

const benefits = [
  {
    icon: FaBrain,
    title: "Neurociência Aplicada",
    description:
      "Entenda como o cérebro regula fome, saciedade e emoções ligadas à alimentação. Protocolos baseados em evidências neurocientíficas.",
    gradient: "from-agua/20 via-agua-light/30 to-azul-light/20",
    accent: "bg-agua-dark",
    iconColor: "text-agua-dark",
    stat: "90%",
    statLabel: "da serotonina nasce no intestino",
  },
  {
    icon: FaLeaf,
    title: "Nutrição Integrativa",
    description:
      "Mais de 16 especializações em nutrição — funcional, clínica, estética e fitoterapia — reunidas em uma abordagem completa e personalizada.",
    gradient: "from-verde/15 via-verde/10 to-agua-light/20",
    accent: "bg-verde-dark",
    iconColor: "text-verde-dark",
    stat: "16+",
    statLabel: "especializações concluídas",
  },
  {
    icon: FaHeartbeat,
    title: "Psicanálise e Comportamento",
    description:
      "Os padrões alimentares têm raízes profundas. A psicanálise ilumina o que dietas sozinhas não conseguem mudar.",
    gradient: "from-azul/15 via-azul-light/20 to-agua/15",
    accent: "bg-azul",
    iconColor: "text-azul",
    stat: "3",
    statLabel: "áreas integradas em uma só abordagem",
  },
  {
    icon: GiMicroscope,
    title: "Ciência de Ponta",
    description:
      "Publicações internacionais, congressos na Irlanda, EUA, França e Argentina. Conhecimento atualizado direto da fonte.",
    gradient: "from-agua-light/25 via-azul/10 to-verde/15",
    accent: "bg-agua-dark",
    iconColor: "text-agua-dark",
    stat: "4",
    statLabel: "países com participação em congressos",
  },
];

/* ------------------------------------------------------------------ */
/*  Page Component                                                     */
/* ------------------------------------------------------------------ */

export default function HomePage() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [blogPosts, setBlogPosts] = useState<Post[]>([]);
  const [ebooks, setEbooks] = useState<Ebook[]>([]);

  useEffect(() => {
    fetch("/api/posts?sort=desc")
      .then((r) => r.json())
      .then((data: Post[]) => setBlogPosts(data.slice(0, 3)))
      .catch(() => {});

    fetch("/api/ebooks")
      .then((r) => r.json())
      .then((data: Ebook[]) => setEbooks(data.slice(0, 4)))
      .catch(() => {});
  }, []);

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;
    const scrollAmount = 320;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      {/* ============================================================ */}
      {/*  HERO SECTION                                                 */}
      {/* ============================================================ */}
      <section className="relative overflow-hidden bg-gradient-to-br from-beige via-white to-agua-light/40 py-24 sm:py-32 lg:py-40">
        {/* Decorative circles */}
        <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-agua/10 blur-3xl" />
        <div className="absolute -bottom-16 -left-16 h-56 w-56 rounded-full bg-azul/10 blur-3xl" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-text">
              NUTRI<span className="text-agua-dark">SYNAPSE</span>
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="mt-6 max-w-2xl mx-auto text-lg sm:text-xl text-text-light leading-relaxed">
              Onde Neurociência, Nutrição e Psicanálise se Conectam para Transformar Sua Saúde
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <Link
              href="/especialidades/diabetes"
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-agua-dark text-white font-semibold rounded-2xl shadow-lg hover:bg-agua hover:shadow-xl transition-all duration-300"
            >
              Explore nossas especialidades
              <FaArrowRight className="text-sm" />
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BENEFITS SECTION                                             */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-text">
                Ciência que cuida da mente e do corpo
              </h2>
              <p className="mt-4 text-text-light text-lg leading-relaxed">
                Uma abordagem integrativa que une neurociência, nutrição e psicanálise para
                compreender e transformar sua relação com a saúde de forma profunda e duradoura.
              </p>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <ScrollReveal key={benefit.title} delay={index * 0.1}>
                <div className={`relative bg-gradient-to-br ${benefit.gradient} rounded-2xl p-6 hover:shadow-lg transition-all duration-300 h-full overflow-hidden group`}>
                  {/* Decorative background circle */}
                  <div className="absolute -top-6 -right-6 w-24 h-24 rounded-full bg-white/20 blur-xl group-hover:scale-150 transition-transform duration-500" />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 rounded-full bg-white/10 blur-lg" />

                  {/* Icon */}
                  <div className={`relative inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-white/80 backdrop-blur-sm shadow-sm mb-4 group-hover:scale-105 transition-transform duration-300`}>
                    <benefit.icon className={`text-2xl ${benefit.iconColor}`} />
                  </div>

                  {/* Stat highlight */}
                  <div className="relative mb-3">
                    <span className={`text-3xl font-extrabold ${benefit.iconColor}`}>{benefit.stat}</span>
                    <p className="text-xs text-text-light/80 mt-0.5 leading-tight">{benefit.statLabel}</p>
                  </div>

                  <h3 className="relative text-base font-bold text-text mb-2">{benefit.title}</h3>
                  <p className="relative text-sm text-text-light leading-relaxed">{benefit.description}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  BLOG HIGHLIGHTS                                              */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 bg-beige">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-text">Últimos Artigos</h2>
                <p className="mt-2 text-text-light">
                  Conteúdos aprofundados sobre neurociência, nutrição e psicanálise.
                </p>
              </div>
              <Link
                href="/blog"
                className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-agua-dark font-medium hover:text-agua transition-colors"
              >
                Ver todos os artigos
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </ScrollReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {blogPosts.map((post, index) => (
              <ScrollReveal key={post.slug} delay={index * 0.1}>
                <BlogCard
                  slug={post.slug}
                  title={post.title}
                  description={post.description}
                  coverImage={post.coverImage}
                  createdAt={post.createdAt}
                  tags={post.tags.map((t) => t.tag.name)}
                />
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  E-BOOKS SECTION                                              */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-10">
              <div>
                <h2 className="text-3xl sm:text-4xl font-bold text-text">E-books em Destaque</h2>
                <p className="mt-2 text-text-light">
                  Materiais autorais para aprofundar seu conhecimento.
                </p>
              </div>
              <Link
                href="/ebooks"
                className="mt-4 sm:mt-0 inline-flex items-center gap-2 text-agua-dark font-medium hover:text-agua transition-colors"
              >
                Ver todos os e-books
                <FaArrowRight className="text-xs" />
              </Link>
            </div>
          </ScrollReveal>

          {/* Carousel controls */}
          <div className="relative">
            <button
              onClick={() => scrollCarousel("left")}
              className="hidden sm:flex absolute -left-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white shadow-md text-text-light hover:text-agua-dark hover:shadow-lg transition-all"
              aria-label="Anterior"
            >
              <FaChevronLeft />
            </button>
            <button
              onClick={() => scrollCarousel("right")}
              className="hidden sm:flex absolute -right-4 top-1/2 -translate-y-1/2 z-10 w-10 h-10 items-center justify-center rounded-full bg-white shadow-md text-text-light hover:text-agua-dark hover:shadow-lg transition-all"
              aria-label="Próximo"
            >
              <FaChevronRight />
            </button>

            <div
              ref={carouselRef}
              className="flex gap-5 overflow-x-auto scroll-smooth pb-4 snap-x snap-mandatory scrollbar-hide"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              {ebooks.map((ebook, index) => (
                <ScrollReveal
                  key={ebook.id || ebook.title}
                  delay={index * 0.1}
                  className="min-w-[280px] sm:min-w-[300px] snap-start flex-shrink-0"
                >
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
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  NEWSLETTER                                                   */}
      {/* ============================================================ */}
      <ScrollReveal>
        <NewsletterForm />
      </ScrollReveal>

      {/* ============================================================ */}
      {/*  ABOUT BIBI                                                   */}
      {/* ============================================================ */}
      <section className="py-16 sm:py-24 bg-beige overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollReveal>
            <div className="text-center mb-12">
              <span className="inline-block bg-agua-dark/10 text-agua-dark text-sm font-medium px-4 py-1.5 rounded-full mb-4">
                Quem é a Bibi
              </span>
              <h2 className="text-3xl sm:text-4xl font-bold text-text">
                Sobre a Bibi
              </h2>
              <p className="text-center text-text-light mt-2">
                Roselis N. Mazzuchetti — a mente por trás do NutriSynapse
              </p>
            </div>
          </ScrollReveal>

          <div className="max-w-5xl mx-auto space-y-6">
            {/* Top: bio + stats */}
            <div className="grid md:grid-cols-3 gap-6">
              {/* Bio card */}
              <ScrollReveal>
                <div className="md:col-span-2 bg-white rounded-3xl p-6 sm:p-8 shadow-sm h-full">
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-agua/30 to-azul-light/40 flex items-center justify-center">
                      <FaBrain className="w-6 h-6 text-agua-dark" />
                    </div>
                    <div>
                      <p className="font-bold text-text">Roselis N. Mazzuchetti</p>
                      <p className="text-xs text-text-light">Nutricionista · Psicanalista · Pesquisadora</p>
                    </div>
                  </div>

                  <div className="text-text-light leading-relaxed space-y-4 text-sm sm:text-base">
                    <p>
                      A trajetória da Bibi é singular: antes de se tornar nutricionista, ela construiu uma
                      carreira acadêmica robusta — <strong className="text-text">Mestrado, Doutorado e Pós-Doutorado em Gestão</strong> —
                      além de formação completa em Psicanálise. Foi esse percurso multidisciplinar que
                      plantou as sementes de uma visão verdadeiramente integrativa da saúde.
                    </p>
                    <p>
                      Ao mergulhar na Nutrição, acumulou <strong className="text-text">mais de 16 especializações</strong> em
                      áreas que poucos nutricionistas combinam: neurociência, fitoterapia, gastronomia
                      funcional, neuropsicanálise e neuromarketing. Essa amplitude não é acidental —
                      é a expressão de sua crença de que saúde é um sistema, não um conjunto de sintomas isolados.
                    </p>
                    <p>
                      Hoje, a Bibi é especialista em <strong className="text-text">neurociência do comportamento alimentar</strong>,
                      com foco clínico em <strong className="text-text">diabetes</strong> e{" "}
                      <strong className="text-text">microbiota intestinal</strong>. Ela entende que a relação com a
                      comida envolve circuitos cerebrais de recompensa, padrões emocionais inconscientes
                      e o ecossistema vivo que habita o intestino — e trabalha em todos esses níveis.
                    </p>
                    <p>
                      Participou de congressos internacionais na <strong className="text-text">Irlanda, Estados Unidos, França e
                      Argentina</strong>, publicou pesquisas e mantém-se na fronteira do conhecimento para
                      traduzir ciência de ponta em cuidado prático e humano.
                    </p>
                  </div>
                </div>
              </ScrollReveal>

              {/* Stats column */}
              <div className="space-y-4">
                <ScrollReveal delay={0.1}>
                  <div className="bg-gradient-to-br from-agua/20 to-agua-light/30 rounded-2xl p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-white/70 flex items-center justify-center">
                        <FiAward className="w-5 h-5 text-agua-dark" />
                      </div>
                      <span className="text-3xl font-extrabold text-agua-dark">16+</span>
                    </div>
                    <p className="text-sm font-medium text-text">Especializações</p>
                    <p className="text-xs text-text-light mt-1">Concluídas e em andamento desde 2024</p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.15}>
                  <div className="bg-gradient-to-br from-verde/20 to-verde/10 rounded-2xl p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-white/70 flex items-center justify-center">
                        <FiGlobe className="w-5 h-5 text-verde-dark" />
                      </div>
                      <span className="text-3xl font-extrabold text-verde-dark">4</span>
                    </div>
                    <p className="text-sm font-medium text-text">Países</p>
                    <p className="text-xs text-text-light mt-1">Irlanda, EUA, França e Argentina</p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.2}>
                  <div className="bg-gradient-to-br from-azul/20 to-azul-light/30 rounded-2xl p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-white/70 flex items-center justify-center">
                        <FiHeart className="w-5 h-5 text-azul" />
                      </div>
                      <span className="text-3xl font-extrabold text-azul">3</span>
                    </div>
                    <p className="text-sm font-medium text-text">Pilares integrados</p>
                    <p className="text-xs text-text-light mt-1">Neurociência, Nutrição e Psicanálise</p>
                  </div>
                </ScrollReveal>

                <ScrollReveal delay={0.25}>
                  <div className="bg-gradient-to-br from-agua-dark/15 to-azul/15 rounded-2xl p-5 shadow-sm">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-xl bg-white/70 flex items-center justify-center">
                        <FiBookOpen className="w-5 h-5 text-agua-dark" />
                      </div>
                      <span className="text-3xl font-extrabold text-agua-dark">PhD</span>
                    </div>
                    <p className="text-sm font-medium text-text">Formação acadêmica</p>
                    <p className="text-xs text-text-light mt-1">Mestrado, Doutorado e Pós-Doutorado</p>
                  </div>
                </ScrollReveal>
              </div>
            </div>

            {/* Core focus areas */}
            <ScrollReveal delay={0.1}>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="relative bg-gradient-to-br from-agua/15 to-agua-light/25 rounded-2xl p-6 overflow-hidden group hover:shadow-md transition-shadow duration-300">
                  <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-agua/10 blur-xl group-hover:scale-150 transition-transform duration-500" />
                  <div className="w-12 h-12 rounded-2xl bg-white/80 flex items-center justify-center mb-4">
                    <FaBrain className="w-6 h-6 text-agua-dark" />
                  </div>
                  <h4 className="font-bold text-text text-sm mb-2">Neurociência do Comportamento Alimentar</h4>
                  <p className="text-xs text-text-light leading-relaxed">
                    Circuitos de recompensa, neuroplasticidade e como o cérebro regula fome, saciedade e emoções ligadas à comida.
                  </p>
                  <div className="mt-3 h-1 w-8 rounded-full bg-agua-dark/40" />
                </div>
                <div className="relative bg-gradient-to-br from-azul/10 to-azul-light/25 rounded-2xl p-6 overflow-hidden group hover:shadow-md transition-shadow duration-300">
                  <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-azul/10 blur-xl group-hover:scale-150 transition-transform duration-500" />
                  <div className="w-12 h-12 rounded-2xl bg-white/80 flex items-center justify-center mb-4">
                    <FaHeartbeat className="w-6 h-6 text-azul" />
                  </div>
                  <h4 className="font-bold text-text text-sm mb-2">Diabetes e Saúde Metabólica</h4>
                  <p className="text-xs text-text-light leading-relaxed">
                    Manejo nutricional integrativo do diabetes com olhar neuroendócrino, emocional e funcional para além dos protocolos convencionais.
                  </p>
                  <div className="mt-3 h-1 w-8 rounded-full bg-azul/40" />
                </div>
                <div className="relative bg-gradient-to-br from-verde/10 to-verde/20 rounded-2xl p-6 overflow-hidden group hover:shadow-md transition-shadow duration-300">
                  <div className="absolute -top-4 -right-4 w-20 h-20 rounded-full bg-verde/10 blur-xl group-hover:scale-150 transition-transform duration-500" />
                  <div className="w-12 h-12 rounded-2xl bg-white/80 flex items-center justify-center mb-4">
                    <GiMicroscope className="w-6 h-6 text-verde-dark" />
                  </div>
                  <h4 className="font-bold text-text text-sm mb-2">Microbiota Intestinal</h4>
                  <p className="text-xs text-text-light leading-relaxed">
                    O eixo intestino-cérebro: como trilhões de microrganismos moldam humor, imunidade, metabolismo e saúde mental.
                  </p>
                  <div className="mt-3 h-1 w-8 rounded-full bg-verde-dark/40" />
                </div>
              </div>
            </ScrollReveal>

            {/* Academic trajectory timeline */}
            <ScrollReveal delay={0.15}>
              <div className="bg-white rounded-3xl p-6 sm:p-8 shadow-sm">
                <h3 className="text-lg font-bold text-text mb-6 flex items-center gap-2">
                  <FiBookOpen className="text-agua-dark" />
                  Trajetória Acadêmica e Especializações
                </h3>

                {/* Timeline mini */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-6 pb-6 border-b border-beige-dark/40">
                  <div className="flex flex-col items-center text-center p-4 bg-beige/40 rounded-xl">
                    <span className="text-xs font-bold text-agua-dark uppercase tracking-wider mb-1">Fundação</span>
                    <p className="text-sm font-semibold text-text">Contabilidade, Administração</p>
                    <p className="text-xs text-text-light mt-1">Mestrado · Doutorado · Pós-Doc em Gestão</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-beige/40 rounded-xl">
                    <span className="text-xs font-bold text-azul uppercase tracking-wider mb-1">Expansão</span>
                    <p className="text-sm font-semibold text-text">Psicanálise Clínica</p>
                    <p className="text-xs text-text-light mt-1">Formação completa + Neuropsicanálise</p>
                  </div>
                  <div className="flex flex-col items-center text-center p-4 bg-beige/40 rounded-xl">
                    <span className="text-xs font-bold text-verde-dark uppercase tracking-wider mb-1">Presente</span>
                    <p className="text-sm font-semibold text-text">Nutrição (16+ especializações)</p>
                    <p className="text-xs text-text-light mt-1">Foco em neurociência, diabetes e microbiota</p>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2">
                  {specializations.map((spec) => (
                    <div
                      key={spec}
                      className="flex items-start gap-2 text-sm text-text-light py-1"
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-agua-dark flex-shrink-0" />
                      <span>{spec}</span>
                    </div>
                  ))}
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  FINAL CTA                                                    */}
      {/* ============================================================ */}
      <section className="py-20 sm:py-28 bg-gradient-to-br from-agua-dark to-azul">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl font-bold text-white">
              Quer saber mais ou tirar dúvidas?
            </h2>
            <p className="mt-4 text-white/80 text-lg max-w-xl mx-auto">
              Fale com a Bibi. Ela adora conversar sobre neurociência, nutrição e tudo que conecta
              mente e corpo.
            </p>
            <Link
              href="/contato"
              className="mt-10 inline-flex items-center gap-2 px-8 py-4 bg-white text-agua-dark font-semibold rounded-2xl shadow-lg hover:bg-beige hover:shadow-xl transition-all duration-300"
            >
              Fale com a Bibi
              <FaArrowRight className="text-sm" />
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </>
  );
}
