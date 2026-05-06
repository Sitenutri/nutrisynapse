"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FiSave, FiGift } from "react-icons/fi";

interface Ebook {
  id: string;
  title: string;
  isLeadMagnet: boolean;
  coverImage: string | null;
}

export default function LeadMagnetSettingsPage() {
  const { status } = useSession();
  const router = useRouter();
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);

  const [leadMagnetEnabled, setLeadMagnetEnabled] = useState(false);
  const [ebooks, setEbooks] = useState<Ebook[]>([]);
  const [selectedEbookId, setSelectedEbookId] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") router.push("/admin/login");
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") return;

    Promise.all([
      fetch("/api/settings").then((r) => r.json()),
      fetch("/api/ebooks?all=1").then((r) => r.json()),
    ])
      .then(([settings, ebooksData]) => {
        setLeadMagnetEnabled(settings.leadMagnetEnabled || false);
        setEbooks(ebooksData);
        const currentLeadMagnet = ebooksData.find((e: Ebook) => e.isLeadMagnet);
        if (currentLeadMagnet) setSelectedEbookId(currentLeadMagnet.id);
      })
      .catch(() => {})
      .finally(() => setLoading(false));
  }, [status]);

  const handleSave = async () => {
    setSaving(true);
    try {
      // Save settings
      await fetch("/api/settings", {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ leadMagnetEnabled }),
      });

      // Update lead magnet selection: unset all, then set the selected one
      for (const ebook of ebooks) {
        if (ebook.isLeadMagnet && ebook.id !== selectedEbookId) {
          await fetch(`/api/ebooks/${ebook.id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ isLeadMagnet: false }),
          });
        }
      }

      if (selectedEbookId) {
        await fetch(`/api/ebooks/${selectedEbookId}`, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ isLeadMagnet: true }),
        });
      }

      alert("Configuracoes salvas com sucesso!");
    } catch {
      alert("Erro ao salvar configuracoes");
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
    <div className="max-w-3xl">
      <div className="flex items-center gap-4 mb-6">
        <div className="p-2 rounded-lg bg-verde/10">
          <FiGift className="w-5 h-5 text-verde-dark" />
        </div>
        <div>
          <h1 className="text-2xl font-bold text-text">Lead Magnet</h1>
          <p className="text-text-light text-sm mt-0.5">
            Configure o banner de captura de emails com e-book gratuito
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <div className="bg-white rounded-2xl p-6 shadow-sm space-y-4">
          <h2 className="font-bold text-text">Configuracoes</h2>

          <label className="flex items-center gap-3 cursor-pointer p-3 rounded-xl border border-beige-dark hover:bg-beige/30 transition-colors">
            <input
              type="checkbox"
              checked={leadMagnetEnabled}
              onChange={(e) => setLeadMagnetEnabled(e.target.checked)}
              className="w-5 h-5 rounded border-beige-dark text-verde-dark focus:ring-verde"
            />
            <div>
              <span className="text-sm font-medium text-text">Ativar Lead Magnet</span>
              <p className="text-xs text-text-light">
                Exibe o banner na homepage com o e-book gratuito
              </p>
            </div>
          </label>

          <div>
            <label className="block text-sm font-medium text-text-light mb-2">
              E-book gratuito (lead magnet)
            </label>
            <select
              value={selectedEbookId}
              onChange={(e) => setSelectedEbookId(e.target.value)}
              className="w-full px-4 py-3 rounded-xl border border-beige-dark bg-beige/30 text-sm focus:outline-none focus:ring-2 focus:ring-agua"
            >
              <option value="">Nenhum selecionado</option>
              {ebooks.map((ebook) => (
                <option key={ebook.id} value={ebook.id}>
                  {ebook.title}
                </option>
              ))}
            </select>
            <p className="text-xs text-text-light mt-1">
              Apenas um e-book pode ser o lead magnet por vez. Certifique-se de configurar a URL de download no e-book.
            </p>
          </div>
        </div>

        <div className="flex justify-end">
          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-6 py-3 bg-verde-dark text-white text-sm font-medium rounded-xl hover:bg-verde transition-colors disabled:opacity-50"
          >
            <FiSave className="w-4 h-4" />
            {saving ? "Salvando..." : "Salvar Configuracoes"}
          </button>
        </div>
      </div>
    </div>
  );
}
