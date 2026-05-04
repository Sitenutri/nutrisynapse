"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import ScrollReveal from "@/components/ScrollReveal";
import BlogCard from "@/components/BlogCard";
import NewsletterForm from "@/components/NewsletterForm";
import { FiArrowLeft, FiCalendar, FiTag, FiClock } from "react-icons/fi";
import { FaBrain } from "react-icons/fa";

/* ------------------------------------------------------------------ */
/*  Types                                                              */
/* ------------------------------------------------------------------ */

interface ContentBlock {
  id: string;
  type: string;
  content: string | null;
  images: string | null;
  order: number;
}

interface PostTag {
  tag: { id: string; name: string; slug: string };
}

interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string | null;
  published: boolean;
  createdAt: string;
  contents: ContentBlock[];
  tags: PostTag[];
}

interface RelatedPost {
  id: string;
  slug: string;
  title: string;
  description: string;
  coverImage: string | null;
  createdAt: string;
  tags: PostTag[];
}

/* ------------------------------------------------------------------ */
/*  Helpers                                                            */
/* ------------------------------------------------------------------ */

function estimateReadingTime(contents: ContentBlock[]): number {
  const totalChars = contents
    .filter((b) => b.type === "text" && b.content)
    .reduce((sum, b) => sum + (b.content?.length || 0), 0);
  const wordsApprox = totalChars / 5;
  return Math.max(1, Math.round(wordsApprox / 200));
}

/* ------------------------------------------------------------------ */
/*  Component                                                          */
/* ------------------------------------------------------------------ */

export default function BlogPostClient() {
  const { slug } = useParams<{ slug: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [relatedPosts, setRelatedPosts] = useState<RelatedPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  /* Fetch main post */
  useEffect(() => {
    if (!slug) return;
    fetch(`/api/posts/${slug}`)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.json();
      })
      .then((data: Post) => {
        setPost(data);
        return data;
      })
      .then((data) => {
        /* Fetch related posts by first tag, excluding current */
        const firstTagSlug = data.tags[0]?.tag.slug;
        const query = firstTagSlug ? `?tag=${firstTagSlug}` : "";
        return fetch(`/api/posts${query}`);
      })
      .then((res) => res.json())
      .then((allPosts: RelatedPost[]) => {
        const filtered = allPosts
          .filter((p) => p.slug !== slug)
          .slice(0, 3);
        setRelatedPosts(filtered);
      })
      .catch(() => setError(true))
      .finally(() => setLoading(false));
  }, [slug]);

  /* ─── Loading ─── */
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-beige/30">
        <div className="flex flex-col items-center gap-4">
          <div className="animate-spin w-10 h-10 border-4 border-agua border-t-transparent rounded-full" />
          <p className="text-sm text-text-light">Carregando artigo...</p>
        </div>
      </div>
    );
  }

  /* ─── Error / Not found ─── */
  if (error || !post) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 bg-beige/30">
        <div className="w-20 h-20 rounded-full bg-agua/10 flex items-center justify-center mb-6">
          <FaBrain className="w-8 h-8 text-agua-dark" />
        </div>
        <h1 className="text-2xl font-bold text-text mb-2">Post não encontrado</h1>
        <p className="text-text-light mb-6 text-center max-w-md">
          O artigo que você procura não existe ou foi removido. Que tal explorar outros conteúdos?
        </p>
        <Link
          href="/blog"
          className="inline-flex items-center gap-2 px-6 py-3 bg-agua-dark text-white font-medium rounded-xl hover:bg-agua transition-colors"
        >
          <FiArrowLeft className="w-4 h-4" />
          Voltar ao blog
        </Link>
      </div>
    );
  }

  const date = new Date(post.createdAt).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "long",
    year: "numeric",
  });

  const readingTime = estimateReadingTime(post.contents);

  return (
    <div className="min-h-screen">
      {/* ============================================================ */}
      {/*  HERO / HEADER                                                */}
      {/* ============================================================ */}
      <section className="bg-gradient-to-b from-agua/10 to-beige pt-16 pb-10 px-4">
        <div className="max-w-3xl mx-auto">
          <ScrollReveal>
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm text-agua-dark hover:underline mb-6"
            >
              <FiArrowLeft className="w-4 h-4" />
              Voltar ao blog
            </Link>
          </ScrollReveal>

          <ScrollReveal delay={0.05}>
            <div className="flex flex-wrap gap-2 mb-4">
              {post.tags.map(({ tag }) => (
                <span
                  key={tag.id}
                  className="text-xs px-3 py-1 bg-agua/20 text-agua-dark rounded-full flex items-center gap-1"
                >
                  <FiTag className="w-3 h-3" />
                  {tag.name}
                </span>
              ))}
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.1}>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-text mb-4 leading-tight">
              {post.title}
            </h1>
          </ScrollReveal>

          <ScrollReveal delay={0.15}>
            <p className="text-lg text-text-light mb-4 leading-relaxed">
              {post.description}
            </p>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="flex items-center gap-4 text-sm text-text-light">
              <div className="flex items-center gap-2">
                <FiCalendar className="w-4 h-4" />
                <time>{date}</time>
              </div>
              <div className="flex items-center gap-2">
                <FiClock className="w-4 h-4" />
                <span>{readingTime} min de leitura</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* ============================================================ */}
      {/*  COVER IMAGE                                                  */}
      {/* ============================================================ */}
      {post.coverImage && (
        <div className="max-w-4xl mx-auto px-4 -mt-2 mb-8">
          <ScrollReveal>
            <img
              src={post.coverImage}
              alt={post.title}
              className="w-full rounded-2xl shadow-md object-cover max-h-[480px]"
            />
          </ScrollReveal>
        </div>
      )}

      {/* ============================================================ */}
      {/*  CONTENT BLOCKS                                               */}
      {/* ============================================================ */}
      <article className="max-w-3xl mx-auto px-4 py-10">
        <div className="max-w-none">
          {post.contents.map((block, i) => {
            if (block.type === "text" && block.content) {
              return (
                <ScrollReveal key={block.id} delay={i * 0.03}>
                  <div className="mb-8 prose prose-lg max-w-none
                    prose-headings:text-text prose-headings:font-bold prose-headings:mt-8 prose-headings:mb-4
                    prose-h2:text-2xl prose-h2:border-b prose-h2:border-agua/20 prose-h2:pb-2
                    prose-h3:text-xl prose-h3:text-agua-dark
                    prose-p:text-text-light prose-p:leading-relaxed prose-p:text-base sm:prose-p:text-lg
                    prose-strong:text-text prose-strong:font-semibold
                    prose-li:text-text-light prose-li:leading-relaxed
                    prose-ul:my-4 prose-ol:my-4
                    prose-a:text-agua-dark prose-a:underline hover:prose-a:text-agua
                  ">
                    <ReactMarkdown remarkPlugins={[remarkGfm]}>
                      {block.content}
                    </ReactMarkdown>
                  </div>
                </ScrollReveal>
              );
            }

            if (block.type === "image" && block.images) {
              const imgs: string[] = JSON.parse(block.images);

              if (imgs.length === 1) {
                return (
                  <ScrollReveal key={block.id} delay={i * 0.03}>
                    <figure className="mb-8 flex justify-center">
                      <img
                        src={imgs[0]}
                        alt={`Imagem do artigo`}
                        className="rounded-xl shadow-sm max-h-[640px] max-w-full w-auto h-auto"
                      />
                    </figure>
                  </ScrollReveal>
                );
              }

              return (
                <ScrollReveal key={block.id} delay={i * 0.03}>
                  <div
                    className={`grid gap-4 mb-8 ${
                      imgs.length === 2 ? "grid-cols-2" : "grid-cols-2 sm:grid-cols-3"
                    }`}
                  >
                    {imgs.map((src, ii) => (
                      <img
                        key={ii}
                        src={src}
                        alt={`Imagem ${ii + 1} do artigo`}
                        className="w-full aspect-square rounded-xl shadow-sm object-cover"
                      />
                    ))}
                  </div>
                </ScrollReveal>
              );
            }

            return null;
          })}
        </div>
      </article>

      {/* ============================================================ */}
      {/*  AUTHOR SECTION                                               */}
      {/* ============================================================ */}
      <section className="max-w-3xl mx-auto px-4 pb-10">
        <ScrollReveal>
          <div className="bg-white rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center gap-6">
            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-agua/20 to-verde/20 flex items-center justify-center flex-shrink-0">
              <FaBrain className="w-8 h-8 text-agua-dark" />
            </div>
            <div>
              <p className="font-bold text-text text-lg">
                Bibi (Roselis N. Mazzuchetti)
              </p>
              <p className="text-sm text-text-light mt-1 leading-relaxed">
                Nutricionista, psicanalista e pesquisadora. Unindo neurociência,
                nutrição e psicanálise para transformar conhecimento científico em
                orientações práticas e acolhedoras.
              </p>
              <Link
                href="/contato"
                className="text-sm text-agua-dark hover:underline mt-2 inline-block font-medium"
              >
                Fale com a Bibi →
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ============================================================ */}
      {/*  RELATED POSTS                                                */}
      {/* ============================================================ */}
      {relatedPosts.length > 0 && (
        <section className="bg-beige py-14 px-4">
          <div className="max-w-5xl mx-auto">
            <ScrollReveal>
              <h2 className="text-2xl sm:text-3xl font-bold text-text text-center mb-2">
                Artigos Relacionados
              </h2>
              <p className="text-text-light text-center mb-10">
                Continue explorando conteúdos sobre neurociência, nutrição e saúde.
              </p>
            </ScrollReveal>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedPosts.map((rp, i) => (
                <ScrollReveal key={rp.id} delay={i * 0.1}>
                  <BlogCard
                    slug={rp.slug}
                    title={rp.title}
                    description={rp.description}
                    coverImage={rp.coverImage}
                    createdAt={rp.createdAt}
                    tags={rp.tags.map((t) => t.tag.name)}
                  />
                </ScrollReveal>
              ))}
            </div>

            <ScrollReveal delay={0.3}>
              <div className="text-center mt-10">
                <Link
                  href="/blog"
                  className="inline-flex items-center gap-2 px-6 py-3 bg-agua-dark text-white font-medium rounded-xl hover:bg-agua transition-colors"
                >
                  Ver todos os artigos
                </Link>
              </div>
            </ScrollReveal>
          </div>
        </section>
      )}

      {/* ============================================================ */}
      {/*  NEWSLETTER                                                   */}
      {/* ============================================================ */}
      <ScrollReveal>
        <NewsletterForm />
      </ScrollReveal>
    </div>
  );
}
