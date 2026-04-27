"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FiPlus, FiTrash2, FiSave, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import slugify from "slugify";

interface Tag {
  id: string;
  name: string;
  slug: string;
}

interface ContentBlock {
  type: "text" | "image";
  content: string;
  images: string;
  order: number;
}

export default function NewPostPage() {
  const { status } = useSession();
  const router = useRouter();
  const [tags, setTags] = useState<Tag[]>([]);
  const [saving, setSaving] = useState(false);

  // Form state
  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [published, setPublished] = useState(false);
  const [featured, setFeatured] = useState(false);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [contents, setContents] = useState<ContentBlock[]>([
    { type: "text", content: "", images: "", order: 0 },
  ]);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/admin/login");
  }, [status, router]);

  useEffect(() => {
    fetch("/api/tags").then((r) => r.json()).then(setTags).catch(() => {});
  }, []);

  // Auto-generate slug from title
  useEffect(() => {
    if (title) {
      setSlug(slugify(title, { lower: true, strict: true }));
    }
  }, [title]);

  const addBlock = (type: "text" | "image") => {
    setContents([...contents, { type, content: "", images: "", order: contents.length }]);
  };

  const removeBlock = (index: number) => {
    setContents(contents.filter((_, i) => i !== index).map((c, i) => ({ ...c, order: i })));
  };

  const updateBlock = (index: number, field: string, value: string) => {
    setContents(contents.map((c, i) => (i === index ? { ...c, [field]: value } : c)));
  };

  const toggleTag = (tagId: string) => {
    setSelectedTags((prev) =>
      prev.includes(tagId) ? prev.filter((t) => t !== tagId) : [...prev, tagId]
    );
  };

  const handleSave = async () => {
    if (!title || !slug) return alert("Título é obrigatório");
    setSaving(true);
    try {
      const res = await fetch("/api/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug,
          description,
          coverImage: coverImage || null,
          published,
          featured,
          contents: contents.map((c) => ({
            type: c.type,
            content: c.type === "text" ? c.content : null,
            images: c.type === "image" ? c.images : null,
            order: c.order,
          })),
          tagIds: selectedTags,
        }),
      });
      if (res.ok) {
        router.push("/admin/posts");
      } else {
        alert("Erro ao salvar post");
      }
    } catch {
      alert("Erro ao salvar post");
    } finally {
      setSaving(false);
    }
  };

  if (status === "loading" || status === "unauthenticated") {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin w-8 h-8 border-4 border-agua border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/posts" className="p-2 rounded-lg hover:bg-beige transition-colors">
          <FiArrowLeft className="w-5 h-5 text-text-light" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-text">Novo Post</h1>
          <p className="text-text-light text-sm mt-0.5">Crie um novo artigo para o blog</p>
        </div>
      </div>

      <div className="space-y-6">
        {/* Basic Info */}
        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
          <h2 className="font-bold text-text">Informações básicas</h2>

          <div>
            <label className="block text-sm font-medium text-text-light mb-1">Título</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Ex: Como a Neurociência Explica seus Hábitos Alimentares"
              className="w-full px-4 py-3 rounded-xl border border-beige-dark bg-beige/30 text-sm focus:outline-none focus:ring-2 focus:ring-agua"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-light mb-1">Slug (URL)</label>
            <input
              type="text"
              value={slug}
              onChange={(e) => setSlug(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-beige-dark bg-beige/30 text-sm focus:outline-none focus:ring-2 focus:ring-agua"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-light mb-1">Descrição curta</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={2}
              placeholder="Resumo que aparece nas listagens"
              className="w-full px-4 py-3 rounded-xl border border-beige-dark bg-beige/30 text-sm focus:outline-none focus:ring-2 focus:ring-agua resize-none"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-light mb-1">URL da imagem de capa</label>
            <input
              type="text"
              value={coverImage}
              onChange={(e) => setCoverImage(e.target.value)}
              placeholder="https://..."
              className="w-full px-4 py-3 rounded-xl border border-beige-dark bg-beige/30 text-sm focus:outline-none focus:ring-2 focus:ring-agua"
            />
          </div>

          {/* Tags */}
          <div>
            <label className="block text-sm font-medium text-text-light mb-2">Tags</label>
            <div className="flex flex-wrap gap-2">
              {tags.map((tag) => (
                <button
                  key={tag.id}
                  type="button"
                  onClick={() => toggleTag(tag.id)}
                  className={`text-xs px-3 py-1.5 rounded-full border transition-colors ${
                    selectedTags.includes(tag.id)
                      ? "bg-agua-dark text-white border-agua-dark"
                      : "border-beige-dark text-text-light hover:border-agua"
                  }`}
                >
                  {tag.name}
                </button>
              ))}
              {tags.length === 0 && (
                <p className="text-xs text-text-light">Nenhuma tag cadastrada</p>
              )}
            </div>
          </div>

          {/* Options */}
          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="w-4 h-4 rounded border-beige-dark text-agua-dark focus:ring-agua"
              />
              <span className="text-sm text-text">Publicado</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="w-4 h-4 rounded border-beige-dark text-agua-dark focus:ring-agua"
              />
              <span className="text-sm text-text">Destaque</span>
            </label>
          </div>
        </div>

        {/* Content Blocks */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <div className="flex items-center justify-between mb-4">
            <h2 className="font-bold text-text">Conteúdo</h2>
            <div className="flex gap-2">
              <button
                onClick={() => addBlock("text")}
                className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg border border-beige-dark text-text-light hover:border-agua hover:text-agua-dark transition-colors"
              >
                <FiPlus className="w-3 h-3" /> Texto
              </button>
              <button
                onClick={() => addBlock("image")}
                className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg border border-beige-dark text-text-light hover:border-agua hover:text-agua-dark transition-colors"
              >
                <FiPlus className="w-3 h-3" /> Imagem
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {contents.map((block, i) => (
              <div key={i} className="border border-beige-dark/50 rounded-xl p-4 relative">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-medium text-text-light uppercase">
                    {block.type === "text" ? "Bloco de texto" : "Bloco de imagem"}
                  </span>
                  {contents.length > 1 && (
                    <button
                      onClick={() => removeBlock(i)}
                      className="p-1 rounded hover:bg-red-50 text-text-light hover:text-red-500 transition-colors"
                    >
                      <FiTrash2 className="w-3.5 h-3.5" />
                    </button>
                  )}
                </div>

                {block.type === "text" ? (
                  <textarea
                    value={block.content}
                    onChange={(e) => updateBlock(i, "content", e.target.value)}
                    rows={6}
                    placeholder="Escreva o conteúdo do bloco aqui..."
                    className="w-full px-3 py-2 rounded-lg border border-beige-dark bg-beige/20 text-sm focus:outline-none focus:ring-2 focus:ring-agua resize-y"
                  />
                ) : (
                  <input
                    type="text"
                    value={block.images}
                    onChange={(e) => updateBlock(i, "images", e.target.value)}
                    placeholder='URLs das imagens separadas por vírgula (JSON array: ["/img1.jpg","/img2.jpg"])'
                    className="w-full px-3 py-2 rounded-lg border border-beige-dark bg-beige/20 text-sm focus:outline-none focus:ring-2 focus:ring-agua"
                  />
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Save button */}
        <div className="flex justify-end gap-3">
          <Link
            href="/admin/posts"
            className="px-6 py-3 text-sm text-text-light hover:text-text transition-colors"
          >
            Cancelar
          </Link>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-3 bg-agua-dark text-white text-sm font-medium rounded-xl hover:bg-agua transition-colors disabled:opacity-50"
          >
            <FiSave className="w-4 h-4" />
            {saving ? "Salvando..." : "Salvar Post"}
          </button>
        </div>
      </div>
    </div>
  );
}
