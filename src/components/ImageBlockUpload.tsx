"use client";

import { useState, useRef } from "react";
import { FiPlus, FiX, FiImage } from "react-icons/fi";

interface Props {
  value: string; // JSON array of URLs
  onChange: (value: string) => void;
}

export default function ImageBlockUpload({ value, onChange }: Props) {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

  const images: string[] = (() => {
    try {
      return value ? JSON.parse(value) : [];
    } catch {
      return [];
    }
  })();

  const handleFile = async (file: File) => {
    setUploading(true);
    try {
      const res = await fetch("/api/upload", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ filename: file.name, contentType: file.type }),
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.error ?? "Upload failed");
      }

      const { uploadUrl, publicUrl } = await res.json();

      const s3Res = await fetch(uploadUrl, {
        method: "PUT",
        body: file,
        headers: { "Content-Type": file.type },
      });

      if (!s3Res.ok) throw new Error("S3 upload failed");

      const updated = [...images, publicUrl];
      onChange(JSON.stringify(updated));
    } catch (e) {
      alert(`Erro ao fazer upload: ${e instanceof Error ? e.message : "tente novamente"}`);
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (index: number) => {
    const updated = images.filter((_, i) => i !== index);
    onChange(updated.length > 0 ? JSON.stringify(updated) : "");
  };

  return (
    <div className="space-y-3">
      {images.length > 0 && (
        <div className="grid grid-cols-3 gap-2">
          {images.map((src, i) => (
            <div key={i} className="relative group">
              <img
                src={src}
                alt={`Imagem ${i + 1}`}
                className="w-full h-24 rounded-lg object-cover border border-beige-dark"
              />
              <button
                type="button"
                onClick={() => removeImage(i)}
                className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-red-500 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow"
              >
                <FiX className="w-3 h-3" />
              </button>
            </div>
          ))}
        </div>
      )}

      <button
        type="button"
        onClick={() => !uploading && inputRef.current?.click()}
        disabled={uploading}
        className="flex items-center gap-2 text-xs px-3 py-2 rounded-lg border border-dashed border-beige-dark text-text-light hover:border-agua hover:text-agua-dark transition-colors disabled:opacity-50 w-full justify-center"
      >
        {uploading ? (
          <>
            <div className="animate-spin w-3 h-3 border border-agua border-t-transparent rounded-full" />
            Enviando...
          </>
        ) : (
          <>
            <FiPlus className="w-3 h-3" />
            {images.length === 0 ? (
              <>
                <FiImage className="w-3 h-3" />
                Adicionar imagem
              </>
            ) : (
              "Adicionar outra imagem"
            )}
          </>
        )}
      </button>

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif"
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
