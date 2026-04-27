"use client";

import { useState, useMemo, useEffect } from "react";
import BlogCard from "@/components/BlogCard";
import NewsletterForm from "@/components/NewsletterForm";
import ScrollReveal from "@/components/ScrollReveal";

/* ───────────────── types ───────────────── */

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
  featured?: boolean;
}

const ALL_TAGS = [
  "Neurociência",
  "Nutrição",
  "Sabedoria",
  "Mudança de Hábitos",
  "Microbiota",
  "Diabetes",
  "Psicanálise",
];

type SortOrder = "newest" | "oldest";

/* ───────────────── component ───────────────── */

export default function BlogPage() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const [sortOrder, setSortOrder] = useState<SortOrder>("newest");

  useEffect(() => {
    fetch("/api/posts")
      .then((res) => res.json())
      .then((data: Post[]) => setPosts(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  /* filtered + sorted posts */
  const filtered = useMemo(() => {
    let result = [...posts];

    // search filter
    if (search.trim()) {
      const q = search.toLowerCase();
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q) ||
          p.tags.some((t) => t.tag.name.toLowerCase().includes(q)),
      );
    }

    // tag filter
    if (activeTag) {
      result = result.filter((p) =>
        p.tags.some((t) => t.tag.name === activeTag)
      );
    }

    // sort
    result.sort((a, b) => {
      const da = new Date(a.createdAt).getTime();
      const db = new Date(b.createdAt).getTime();
      return sortOrder === "newest" ? db - da : da - db;
    });

    return result;
  }, [posts, search, activeTag, sortOrder]);

  const featured = filtered[0] ?? null;
  const rest = filtered.slice(1);

  return (
    <div className="min-h-screen">
      {/* ─── Hero / Header ─── */}
      <section className="bg-gradient-to-b from-agua/10 to-beige pt-16 pb-10 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <ScrollReveal>
            <h1 className="text-3xl md:text-4xl font-bold text-text mb-3">
              Blog NutriSynapse
            </h1>
            <p className="text-text-light max-w-2xl mx-auto">
              Artigos sobre neurociência, nutrição, microbiota e mudança de
              hábitos — baseados em ciência, escritos com clareza.
            </p>
          </ScrollReveal>
        </div>
      </section>

      {/* ─── Search + Filters ─── */}
      <section className="max-w-5xl mx-auto px-4 -mt-6 relative z-10">
        <ScrollReveal delay={0.1}>
          <div className="bg-white rounded-2xl shadow-sm p-5 space-y-4">
            {/* Search bar */}
            <div className="relative">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-text-light/50"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Buscar por título ou palavra-chave..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-10 pr-4 py-3 rounded-xl border border-beige-dark bg-beige/30 text-sm focus:outline-none focus:ring-2 focus:ring-agua transition-shadow"
              />
            </div>

            {/* Tags + sort */}
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
              {/* Tag pills */}
              <div className="flex flex-wrap gap-2">
                <button
                  onClick={() => setActiveTag(null)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                    activeTag === null
                      ? "bg-agua-dark text-white border-agua-dark"
                      : "border-beige-dark text-text-light hover:border-agua"
                  }`}
                >
                  Todos
                </button>
                {ALL_TAGS.map((tag) => (
                  <button
                    key={tag}
                    onClick={() =>
                      setActiveTag(activeTag === tag ? null : tag)
                    }
                    className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                      activeTag === tag
                        ? "bg-agua-dark text-white border-agua-dark"
                        : "border-beige-dark text-text-light hover:border-agua"
                    }`}
                  >
                    {tag}
                  </button>
                ))}
              </div>

              {/* Sort dropdown */}
              <select
                value={sortOrder}
                onChange={(e) => setSortOrder(e.target.value as SortOrder)}
                className="text-sm px-3 py-2 rounded-xl border border-beige-dark bg-beige/30 focus:outline-none focus:ring-2 focus:ring-agua cursor-pointer"
              >
                <option value="newest">Mais recentes</option>
                <option value="oldest">Mais antigos</option>
              </select>
            </div>
          </div>
        </ScrollReveal>
      </section>

      {/* ─── Posts ─── */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        {loading ? (
          <div className="flex justify-center py-20">
            <div className="animate-spin w-10 h-10 border-4 border-agua border-t-transparent rounded-full" />
          </div>
        ) : filtered.length === 0 ? (
          <ScrollReveal>
            <div className="text-center py-20">
              <div className="w-16 h-16 rounded-full bg-agua/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-agua-dark" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                </svg>
              </div>
              <p className="text-text-light text-lg">
                Nenhum artigo encontrado.
              </p>
              <button
                onClick={() => {
                  setSearch("");
                  setActiveTag(null);
                }}
                className="mt-4 text-sm text-agua-dark hover:underline"
              >
                Limpar filtros
              </button>
            </div>
          </ScrollReveal>
        ) : (
          <>
            {/* Featured post */}
            {featured && (
              <ScrollReveal>
                <div className="mb-10">
                  <BlogCard
                    slug={featured.slug}
                    title={featured.title}
                    description={featured.description}
                    coverImage={featured.coverImage}
                    createdAt={featured.createdAt}
                    tags={featured.tags.map((t) => t.tag.name)}
                    featured
                  />
                </div>
              </ScrollReveal>
            )}

            {/* Grid */}
            {rest.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rest.map((post, i) => (
                  <ScrollReveal key={post.slug} delay={i * 0.05}>
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
            )}
          </>
        )}
      </section>

      {/* ─── Newsletter ─── */}
      <ScrollReveal>
        <NewsletterForm />
      </ScrollReveal>
    </div>
  );
}
