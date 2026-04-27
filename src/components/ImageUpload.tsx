"use client";

import { useState, useRef } from "react";
import { FiUpload, FiX, FiImage } from "react-icons/fi";

interface Props {
  value: string;
  onChange: (url: string) => void;
  label?: string;
}

export default function ImageUpload({ value, onChange, label = "Imagem" }: Props) {
  const [uploading, setUploading] = useState(false);
  const inputRef = useRef<HTMLInputElement>(null);

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

      onChange(publicUrl);
    } catch (e) {
      alert(`Erro ao fazer upload: ${e instanceof Error ? e.message : "tente novamente"}`);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div>
      <label className="block text-sm font-medium text-text-light mb-1">{label}</label>

      {value ? (
        <div className="flex items-start gap-3">
          <div className="relative">
            <img
              src={value}
              alt="Preview"
              className="h-32 w-48 rounded-xl object-cover border border-beige-dark"
            />
            <button
              type="button"
              onClick={() => onChange("")}
              className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 text-white rounded-full flex items-center justify-center hover:bg-red-600 transition-colors shadow"
            >
              <FiX className="w-3 h-3" />
            </button>
          </div>
          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            disabled={uploading}
            className="flex items-center gap-1 text-xs px-3 py-1.5 rounded-lg border border-beige-dark text-text-light hover:border-agua hover:text-agua-dark transition-colors disabled:opacity-50"
          >
            <FiUpload className="w-3 h-3" />
            Trocar imagem
          </button>
        </div>
      ) : (
        <div
          onClick={() => !uploading && inputRef.current?.click()}
          className="flex flex-col items-center justify-center w-full h-32 border-2 border-dashed border-beige-dark rounded-xl cursor-pointer hover:border-agua hover:bg-agua/5 transition-colors"
        >
          {uploading ? (
            <div className="flex flex-col items-center gap-2">
              <div className="animate-spin w-6 h-6 border-2 border-agua border-t-transparent rounded-full" />
              <span className="text-xs text-text-light">Enviando...</span>
            </div>
          ) : (
            <div className="flex flex-col items-center gap-2 pointer-events-none">
              <FiImage className="w-6 h-6 text-text-light" />
              <span className="text-xs text-text-light">Clique para selecionar</span>
              <span className="text-xs text-text-light/60">JPG, PNG, WebP, GIF</span>
            </div>
          )}
        </div>
      )}

      <input
        ref={inputRef}
        type="file"
        accept="image/jpeg,image/png,image/webp,image/gif,image/svg+xml"
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
