"use client";

import { useRef, useState } from "react";
import { FiFileText, FiLoader } from "react-icons/fi";

interface ContentBlock {
  type: "text" | "image";
  content: string;
  images: string;
  order: number;
}

interface ImportResult {
  title: string;
  slug: string;
  description: string;
  contents: ContentBlock[];
  extractedImageCount: number;
}

interface Props {
  onImported: (result: ImportResult) => void;
  disabled?: boolean;
}

type Phase = "idle" | "uploading" | "processing";

export default function PdfImport({ onImported, disabled }: Props) {
  const inputRef = useRef<HTMLInputElement>(null);
  const [phase, setPhase] = useState<Phase>("idle");
  const [error, setError] = useState<string | null>(null);

  const busy = phase !== "idle";

  const handleFile = async (file: File) => {
    setError(null);

    if (file.type !== "application/pdf") {
      setError("Selecione um arquivo PDF.");
      return;
    }

    try {
      setPhase("uploading");
      const signRes = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: file.name, contentType: file.type }),
      });
      if (!signRes.ok) {
        const err = await signRes.json().catch(() => ({}));
        throw new Error(err.error ?? "Falha ao gerar URL de upload");
      }
      const { uploadUrl, publicUrl } = await signRes.json();

      const s3Res = await fetch(uploadUrl, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": file.type },
      });
      if (!s3Res.ok) throw new Error("Falha no upload para S3");

      setPhase("processing");
      const importRes = await fetch("/api/articles/import", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ pdfUrl: publicUrl }),
      });
      if (!importRes.ok) {
        const err = await importRes.json().catch(() => ({}));
        throw new Error(err.error ?? "Falha ao processar o PDF");
      }
      const data = (await importRes.json()) as ImportResult;
      onImported(data);
    } catch (e) {
      setError(e instanceof Error ? e.message : "Erro inesperado");
    } finally {
      setPhase("idle");
    }
  };

  const label =
    phase === "uploading"
      ? "Enviando PDF..."
      : phase === "processing"
        ? "Extraindo conteúdo (até 1 min)..."
        : "Importar de PDF";

  return (
    <div className="space-y-2">
      <button
        type="button"
        onClick={() => !busy && inputRef.current?.click()}
        disabled={busy || disabled}
        className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl border-2 border-dashed border-agua/40 bg-agua/5 text-sm font-medium text-agua-dark hover:bg-agua/10 hover:border-agua transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
      >
        {busy ? (
          <FiLoader className="w-4 h-4 animate-spin" />
        ) : (
          <FiFileText className="w-4 h-4" />
        )}
        {label}
      </button>

      <p className="text-xs text-text-light/80">
        Faça upload de um PDF (ex: gerado pelo Manus) e o conteúdo do artigo será preenchido
        automaticamente abaixo. Você ainda poderá revisar e ajustar antes de publicar.
      </p>

      {error && (
        <p className="text-xs text-red-600 bg-red-50 px-3 py-2 rounded-lg border border-red-100">
          {error}
        </p>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="application/pdf"
        className="hidden"
        onChange={(e) => {
          const file = e.target.files?.[0];
          if (file) handleFile(file);
          e.target.value = "";
        }}
      />
    </div>
  );
}
