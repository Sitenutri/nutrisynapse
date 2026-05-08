"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiPlus, FiMail, FiArrowLeft, FiTrash2, FiSend, FiClock, FiCheckCircle, FiAlertCircle, FiLoader } from "react-icons/fi";

interface Campaign {
  id: string;
  subject: string;
  previewText: string | null;
  status: "draft" | "sending" | "sent" | "failed";
  sentAt: string | null;
  sentCount: number;
  createdAt: string;
}

const statusConfig = {
  draft: { label: "Rascunho", icon: FiClock, color: "text-text-light bg-beige" },
  sending: { label: "Enviando...", icon: FiLoader, color: "text-blue-600 bg-blue-50" },
  sent: { label: "Enviado", icon: FiCheckCircle, color: "text-verde-dark bg-verde/10" },
  failed: { label: "Falhou", icon: FiAlertCircle, color: "text-red-600 bg-red-50" },
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString("pt-BR", {
    day: "2-digit", month: "2-digit", year: "numeric",
    hour: "2-digit", minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  });
}

export default function CampaignsPage() {
  const { status } = useSession();
  const router = useRouter();
  const [campaigns, setCampaigns] = useState<Campaign[]>([]);
  const [subscriberCount, setSubscriberCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [sending, setSending] = useState<string | null>(null);
  const [deleting, setDeleting] = useState<string | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/admin/login");
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") return;
    fetch("/api/admin/newsletter/emails")
      .then((r) => r.json())
      .then((d) => {
        setCampaigns(d.emails ?? []);
        setSubscriberCount(d.subscriberCount ?? 0);
      })
      .finally(() => setLoading(false));
  }, [status]);

  async function handleSend(id: string, subject: string) {
    if (!confirm(`Disparar "${subject}" para ${subscriberCount} inscritos?`)) return;
    setSending(id);
    try {
      const res = await fetch(`/api/admin/newsletter/emails/${id}/send`, { method: "POST" });
      const data = await res.json();
      if (res.ok) {
        alert(`Enviado: ${data.sent} / ${data.total}${data.failed > 0 ? ` (${data.failed} falhas)` : ""}`);
        setCampaigns((prev) =>
          prev.map((c) => c.id === id ? { ...c, status: "sent", sentCount: data.sent, sentAt: new Date().toISOString() } : c)
        );
      } else {
        alert(`Erro: ${data.error}`);
        setCampaigns((prev) => prev.map((c) => c.id === id ? { ...c, status: "failed" } : c));
      }
    } catch {
      alert("Erro ao enviar");
    } finally {
      setSending(null);
    }
  }

  async function handleDelete(id: string) {
    if (!confirm("Deletar rascunho?")) return;
    setDeleting(id);
    try {
      await fetch(`/api/admin/newsletter/emails/${id}`, { method: "DELETE" });
      setCampaigns((prev) => prev.filter((c) => c.id !== id));
    } finally {
      setDeleting(null);
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
    <div>
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div className="flex items-center gap-3">
          <Link href="/admin/newsletter" className="p-2 rounded-lg hover:bg-beige transition-colors">
            <FiArrowLeft className="w-5 h-5 text-text-light" />
          </Link>
          <div>
            <h1 className="text-2xl font-bold text-text">Campanhas</h1>
            <p className="text-text-light text-sm mt-0.5">
              {loading ? "Carregando..." : `${subscriberCount} inscritos na lista`}
            </p>
          </div>
        </div>
        <Link
          href="/admin/newsletter/emails/new"
          className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-agua-dark text-white text-sm font-medium hover:bg-agua transition-colors"
        >
          <FiPlus className="w-4 h-4" />
          Nova Campanha
        </Link>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-16">
          <div className="animate-spin w-8 h-8 border-4 border-agua border-t-transparent rounded-full" />
        </div>
      ) : campaigns.length === 0 ? (
        <div className="bg-white rounded-2xl shadow-sm flex flex-col items-center justify-center py-16 text-text-light gap-3">
          <FiMail className="w-10 h-10 opacity-30" />
          <p className="text-sm">Nenhuma campanha ainda.</p>
          <Link
            href="/admin/newsletter/emails/new"
            className="mt-2 flex items-center gap-2 px-4 py-2 rounded-xl bg-agua-dark text-white text-sm font-medium hover:bg-agua transition-colors"
          >
            <FiPlus className="w-4 h-4" />
            Criar primeira campanha
          </Link>
        </div>
      ) : (
        <div className="space-y-3">
          {campaigns.map((c) => {
            const cfg = statusConfig[c.status] ?? statusConfig.draft;
            const Icon = cfg.icon;
            return (
              <div key={c.id} className="bg-white rounded-2xl shadow-sm p-5 flex items-center gap-4 flex-wrap">
                <div className="flex-1 min-w-0">
                  <p className="font-semibold text-text truncate">{c.subject}</p>
                  {c.previewText && (
                    <p className="text-sm text-text-light truncate mt-0.5">{c.previewText}</p>
                  )}
                  <div className="flex items-center gap-3 mt-2 flex-wrap">
                    <span className={`inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-full ${cfg.color}`}>
                      <Icon className="w-3 h-3" />
                      {cfg.label}
                    </span>
                    {c.status === "sent" && (
                      <span className="text-xs text-text-light">
                        {c.sentCount} enviados · {c.sentAt ? formatDate(c.sentAt) : ""}
                      </span>
                    )}
                    {c.status === "draft" && (
                      <span className="text-xs text-text-light">Criado em {formatDate(c.createdAt)}</span>
                    )}
                  </div>
                </div>

                <div className="flex items-center gap-2 flex-shrink-0">
                  {(c.status === "draft" || c.status === "failed") && (
                    <button
                      onClick={() => handleSend(c.id, c.subject)}
                      disabled={sending === c.id}
                      className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-agua-dark text-white text-sm font-medium hover:bg-agua transition-colors disabled:opacity-50"
                    >
                      {sending === c.id ? (
                        <FiLoader className="w-4 h-4 animate-spin" />
                      ) : (
                        <FiSend className="w-4 h-4" />
                      )}
                      Disparar
                    </button>
                  )}
                  {c.status === "draft" && (
                    <button
                      onClick={() => handleDelete(c.id)}
                      disabled={deleting === c.id}
                      className="p-2 rounded-xl text-text-light hover:bg-red-50 hover:text-red-500 transition-colors disabled:opacity-50"
                    >
                      <FiTrash2 className="w-4 h-4" />
                    </button>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
