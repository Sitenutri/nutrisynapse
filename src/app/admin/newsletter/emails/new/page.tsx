"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiArrowLeft, FiPlus, FiTrash2, FiSave, FiSend, FiEye, FiEdit3 } from "react-icons/fi";
import ImageBlockUpload from "@/components/ImageBlockUpload";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

interface ContentBlock {
  type: "text" | "image";
  content: string;
  images: string;
  order: number;
}

export default function NewCampaignPage() {
  const { status } = useSession();
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [preview, setPreview] = useState(false);

  const [subject, setSubject] = useState("");
  const [previewText, setPreviewText] = useState("");
  const [contents, setContents] = useState<ContentBlock[]>([
    { type: "text", content: "", images: "", order: 0 },
  ]);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/admin/login");
  }, [status, router]);

  const addBlock = (type: "text" | "image") => {
    setContents([...contents, { type, content: "", images: "", order: contents.length }]);
  };

  const removeBlock = (index: number) => {
    setContents(contents.filter((_, i) => i !== index).map((c, i) => ({ ...c, order: i })));
  };

  const updateBlock = (index: number, field: string, value: string) => {
    setContents(contents.map((c, i) => (i === index ? { ...c, [field]: value } : c)));
  };

  async function saveCampaign(andSend = false) {
    if (!subject.trim()) return alert("Assunto é obrigatório");
    setSaving(true);
    try {
      const res = await fetch("/api/admin/newsletter/emails", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          subject: subject.trim(),
          previewText: previewText.trim() || undefined,
          contents: contents.map((c) => ({
            type: c.type,
            content: c.type === "text" ? c.content : undefined,
            images: c.type === "image" ? c.images : undefined,
            order: c.order,
          })),
        }),
      });

      if (!res.ok) {
        alert("Erro ao salvar campanha");
        return;
      }

      const { email } = await res.json();

      if (andSend) {
        const sendRes = await fetch(`/api/admin/newsletter/emails/${email.id}/send`, { method: "POST" });
        const sendData = await sendRes.json();
        if (sendRes.ok) {
          alert(`Disparado! ${sendData.sent}/${sendData.total} enviados.`);
        } else {
          alert(`Salvo, mas falha no envio: ${sendData.error}`);
        }
      }

      router.push("/admin/newsletter/emails");
    } catch {
      alert("Erro ao salvar");
    } finally {
      setSaving(false);
    }
  }

  if (status === "loading" || status === "unauthenticated") {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin w-8 h-8 border-4 border-agua border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div className="max-w-4xl">
      <div className="flex items-center justify-between gap-3 mb-6">
        <div className="flex items-center gap-3 min-w-0">
          <Link href="/admin/newsletter/emails" className="p-2 rounded-lg hover:bg-beige transition-colors flex-shrink-0">
            <FiArrowLeft className="w-5 h-5 text-text-light" />
          </Link>
          <div className="min-w-0">
            <h1 className="text-xl sm:text-2xl font-bold text-text truncate">
              {preview ? "Preview do email" : "Nova Campanha"}
            </h1>
            <p className="text-text-light text-xs sm:text-sm mt-0.5">
              {preview ? "Como vai aparecer na caixa de entrada" : "Criar campanha de newsletter"}
            </p>
          </div>
        </div>
        <button
          type="button"
          onClick={() => setPreview((p) => !p)}
          className="flex-shrink-0 inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-xl border border-agua/40 text-sm font-medium text-agua-dark bg-white hover:bg-agua/5 transition-colors"
        >
          {preview ? <FiEdit3 className="w-4 h-4" /> : <FiEye className="w-4 h-4" />}
          <span className="hidden sm:inline">{preview ? "Editar" : "Preview"}</span>
        </button>
      </div>

      {preview ? (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          {/* Simulated email header */}
          <div className="bg-beige/60 border-b border-beige-dark/20 px-6 py-4">
            <p className="text-xs text-text-light mb-0.5">Assunto</p>
            <p className="font-semibold text-text">{subject || "(sem assunto)"}</p>
            {previewText && (
              <>
                <p className="text-xs text-text-light mt-2 mb-0.5">Pré-visualização</p>
                <p className="text-sm text-text-light">{previewText}</p>
              </>
            )}
          </div>
          {/* Email body simulation */}
          <div className="p-8 max-w-lg mx-auto">
            <div className="text-center mb-8">
              <span className="text-xl font-bold text-agua-dark">Nutri</span>
              <span className="text-xl font-bold text-text">Synapse</span>
            </div>
            <div className="space-y-4">
              {contents.map((block, i) => (
                <div key={i}>
                  {block.type === "text" && block.content ? (
                    <div className="prose prose-sm max-w-none text-text">
                      <ReactMarkdown remarkPlugins={[remarkGfm]}>{block.content}</ReactMarkdown>
                    </div>
                  ) : block.type === "image" && block.images ? (
                    <div className="space-y-2">
                      {(JSON.parse(block.images) as string[]).map((src, j) => (
                        // eslint-disable-next-line @next/next/no-img-element
                        <img key={j} src={src} alt="" className="w-full rounded-xl" />
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
            <div className="mt-8 pt-6 border-t border-beige-dark/20 text-center">
              <p className="text-xs text-text-light">Nutrisynapse — Neurociência, Nutrição e Psicanálise</p>
              <p className="text-xs text-text-light mt-1">
                <span className="text-agua-dark underline cursor-pointer">Cancelar inscrição</span>
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6">
          {/* Basic info */}
          <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
            <h2 className="font-bold text-text">Informações do email</h2>

            <div>
              <label className="block text-sm font-medium text-text-light mb-1">
                Assunto <span className="text-red-400">*</span>
              </label>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Ex: Novidades sobre nutrição e neurociência 🧠"
                className="w-full px-4 py-3 rounded-xl border border-beige-dark bg-beige/30 text-sm focus:outline-none focus:ring-2 focus:ring-agua"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-text-light mb-1">
                Texto de pré-visualização
                <span className="ml-1 text-xs font-normal text-text-light/70">(aparece na caixa de entrada após o assunto)</span>
              </label>
              <input
                type="text"
                value={previewText}
                onChange={(e) => setPreviewText(e.target.value)}
                placeholder="Ex: Descubra como o intestino influencia seu humor..."
                className="w-full px-4 py-3 rounded-xl border border-beige-dark bg-beige/30 text-sm focus:outline-none focus:ring-2 focus:ring-agua"
              />
            </div>
          </div>

          {/* Content blocks */}
          <div className="bg-white rounded-2xl p-6 shadow-sm">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-bold text-text">Conteúdo do email</h2>
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
                <div key={i} className="border border-beige-dark/50 rounded-xl p-4">
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-xs font-medium text-text-light uppercase">
                      {block.type === "text" ? "Bloco de texto (Markdown)" : "Bloco de imagens"}
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
                      placeholder="Escreva aqui. Suporta Markdown: **negrito**, # título, - lista..."
                      className="w-full px-3 py-2 rounded-lg border border-beige-dark bg-beige/20 text-sm focus:outline-none focus:ring-2 focus:ring-agua resize-y font-mono"
                    />
                  ) : (
                    <ImageBlockUpload
                      value={block.images}
                      onChange={(v) => updateBlock(i, "images", v)}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Actions */}
          <div className="flex justify-end gap-3">
            <Link href="/admin/newsletter/emails" className="px-6 py-3 text-sm text-text-light hover:text-text transition-colors">
              Cancelar
            </Link>
            <button
              onClick={() => saveCampaign(false)}
              disabled={saving}
              className="flex items-center gap-2 px-5 py-3 rounded-xl border border-agua text-agua-dark text-sm font-medium hover:bg-agua/5 transition-colors disabled:opacity-50"
            >
              <FiSave className="w-4 h-4" />
              {saving ? "Salvando..." : "Salvar rascunho"}
            </button>
            <button
              onClick={() => saveCampaign(true)}
              disabled={saving}
              className="flex items-center gap-2 px-5 py-3 bg-agua-dark text-white text-sm font-medium rounded-xl hover:bg-agua transition-colors disabled:opacity-50"
            >
              <FiSend className="w-4 h-4" />
              {saving ? "Enviando..." : "Salvar e disparar"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
