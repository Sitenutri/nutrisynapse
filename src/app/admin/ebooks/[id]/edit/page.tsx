"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter, useParams } from "next/navigation";
import { FiSave, FiArrowLeft } from "react-icons/fi";
import Link from "next/link";
import ImageUpload from "@/components/ImageUpload";

const CATEGORIES = [
  { value: "neurociencia", label: "Neurociência" },
  { value: "diabetes", label: "Diabetes" },
  { value: "nutricao", label: "Nutrição" },
  { value: "sabedoria", label: "Sabedoria" },
  { value: "mudanca-habitos", label: "Mudança de Hábitos" },
  { value: "microbiota", label: "Microbiota" },
];

export default function EditEbookPage() {
  const { status } = useSession();
  const router = useRouter();
  const { id } = useParams<{ id: string }>();
  const [saving, setSaving] = useState(false);
  const [loading, setLoading] = useState(true);

  const [title, setTitle] = useState("");
  const [slug, setSlug] = useState("");
  const [description, setDescription] = useState("");
  const [coverImage, setCoverImage] = useState("");
  const [price, setPrice] = useState("");
  const [originalPrice, setOriginalPrice] = useState("");
  const [category, setCategory] = useState(CATEGORIES[0].value);
  const [targetAudience, setTargetAudience] = useState("");
  const [buyLink, setBuyLink] = useState("");
  const [published, setPublished] = useState(false);
  const [featured, setFeatured] = useState(false);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/admin/login");
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated" || !id) return;
    fetch(`/api/ebooks/${id}`)
      .then((r) => r.json())
      .then((ebook) => {
        setTitle(ebook.title || "");
        setSlug(ebook.slug || "");
        setDescription(ebook.description || "");
        setCoverImage(ebook.coverImage || "");
        setPrice(ebook.price?.toString() || "");
        setOriginalPrice(ebook.originalPrice?.toString() || "");
        setCategory(ebook.category || CATEGORIES[0].value);
        setTargetAudience(ebook.targetAudience || "");
        setBuyLink(ebook.buyLink || "");
        setPublished(ebook.published || false);
        setFeatured(ebook.featured || false);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [status, id]);

  const handleSave = async () => {
    if (!title || !slug || !price) return alert("Título e preço são obrigatórios");
    setSaving(true);
    try {
      const res = await fetch(`/api/ebooks/${id}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          slug,
          description,
          coverImage: coverImage || null,
          price: parseFloat(price),
          originalPrice: originalPrice ? parseFloat(originalPrice) : null,
          category,
          targetAudience: targetAudience || null,
          buyLink: buyLink || null,
          published,
          featured,
        }),
      });
      if (res.ok) {
        router.push("/admin/ebooks");
      } else {
        alert("Erro ao salvar e-book");
      }
    } catch {
      alert("Erro ao salvar e-book");
    } finally {
      setSaving(false);
    }
  };

  if (status === "loading" || status === "unauthenticated" || loading) {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin w-8 h-8 border-4 border-agua border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      <div className="flex items-center gap-4 mb-6">
        <Link href="/admin/ebooks" className="p-2 rounded-lg hover:bg-beige transition-colors">
          <FiArrowLeft className="w-5 h-5 text-text-light" />
        </Link>
        <div>
          <h1 className="text-2xl font-bold text-text">Editar E-book</h1>
          <p className="text-text-light text-sm mt-0.5">Atualize as informações do e-book</p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
          <h2 className="font-bold text-text">Informações básicas</h2>

          <div>
            <label className="block text-sm font-medium text-text-light mb-1">Título</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
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
            <label className="block text-sm font-medium text-text-light mb-1">Descrição</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full px-4 py-3 rounded-xl border border-beige-dark bg-beige/30 text-sm focus:outline-none focus:ring-2 focus:ring-agua resize-none"
            />
          </div>

          <ImageUpload
            label="Imagem de capa"
            value={coverImage}
            onChange={setCoverImage}
          />

          <div>
            <label className="block text-sm font-medium text-text-light mb-1">Categoria</label>
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-beige-dark bg-beige/30 text-sm focus:outline-none focus:ring-2 focus:ring-agua"
            >
              {CATEGORIES.map((cat) => (
                <option key={cat.value} value={cat.value}>{cat.label}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-text-light mb-1">Preço (R$)</label>
              <input
                type="number"
                step="0.01"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-beige-dark bg-beige/30 text-sm focus:outline-none focus:ring-2 focus:ring-agua"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-text-light mb-1">Preço original (R$)</label>
              <input
                type="number"
                step="0.01"
                value={originalPrice}
                onChange={(e) => setOriginalPrice(e.target.value)}
                placeholder="Opcional"
                className="w-full px-4 py-3 rounded-xl border border-beige-dark bg-beige/30 text-sm focus:outline-none focus:ring-2 focus:ring-agua"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-text-light mb-1">Público-alvo</label>
            <input
              type="text"
              value={targetAudience}
              onChange={(e) => setTargetAudience(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-beige-dark bg-beige/30 text-sm focus:outline-none focus:ring-2 focus:ring-agua"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-text-light mb-1">Link de compra (Kiwify)</label>
            <input
              type="text"
              value={buyLink}
              onChange={(e) => setBuyLink(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-beige-dark bg-beige/30 text-sm focus:outline-none focus:ring-2 focus:ring-agua"
            />
          </div>

          <div className="flex flex-wrap gap-4">
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={published}
                onChange={(e) => setPublished(e.target.checked)}
                className="w-4 h-4 rounded border-beige-dark text-verde-dark focus:ring-verde"
              />
              <span className="text-sm text-text">Publicado</span>
            </label>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={featured}
                onChange={(e) => setFeatured(e.target.checked)}
                className="w-4 h-4 rounded border-beige-dark text-verde-dark focus:ring-verde"
              />
              <span className="text-sm text-text">Destaque</span>
            </label>
          </div>
        </div>

        <div className="flex justify-end gap-3">
          <Link
            href="/admin/ebooks"
            className="px-6 py-3 text-sm text-text-light hover:text-text transition-colors"
          >
            Cancelar
          </Link>
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-3 bg-verde-dark text-white text-sm font-medium rounded-xl hover:bg-verde transition-colors disabled:opacity-50"
          >
            <FiSave className="w-4 h-4" />
            {saving ? "Salvando..." : "Salvar Alterações"}
          </button>
        </div>
      </div>
    </div>
  );
}
