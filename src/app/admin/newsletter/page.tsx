"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiUsers, FiMail, FiDownload, FiSearch, FiSend } from "react-icons/fi";

interface Subscriber {
  id: string;
  name: string;
  email: string;
  createdAt: string;
}

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("pt-BR", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    timeZone: "America/Sao_Paulo",
  });
}

export default function NewsletterAdmin() {
  const { status } = useSession();
  const router = useRouter();
  const [subscribers, setSubscribers] = useState<Subscriber[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") return;

    async function fetchSubscribers() {
      try {
        const res = await fetch("/api/admin/newsletter");
        const data = await res.json();
        setSubscribers(data.subscribers ?? []);
      } catch {
        setSubscribers([]);
      } finally {
        setLoading(false);
      }
    }

    fetchSubscribers();
  }, [status]);

  const filtered = subscribers.filter(
    (s) =>
      s.name.toLowerCase().includes(search.toLowerCase()) ||
      s.email.toLowerCase().includes(search.toLowerCase())
  );

  function exportCSV() {
    const header = "Nome,Email,Data de inscrição\n";
    const rows = subscribers
      .map((s) => `"${s.name}","${s.email}","${formatDate(s.createdAt)}"`)
      .join("\n");
    const blob = new Blob([header + rows], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `inscritos-newsletter-${new Date().toISOString().slice(0, 10)}.csv`;
    a.click();
    URL.revokeObjectURL(url);
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
      {/* Header */}
      <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
        <div>
          <h1 className="text-2xl font-bold text-text">Newsletter</h1>
          <p className="text-text-light mt-1">
            {loading ? "Carregando..." : `${subscribers.length} inscritos no total`}
          </p>
        </div>
        <div className="flex gap-2">
          <Link
            href="/admin/newsletter/emails"
            className="flex items-center gap-2 px-4 py-2 rounded-xl border border-agua text-agua-dark text-sm font-medium hover:bg-agua/5 transition-colors"
          >
            <FiSend className="w-4 h-4" />
            Campanhas
          </Link>
          <button
            onClick={exportCSV}
            disabled={loading || subscribers.length === 0}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-agua text-white text-sm font-medium hover:bg-agua-dark transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
          >
            <FiDownload className="w-4 h-4" />
            Exportar CSV
          </button>
        </div>
      </div>

      {/* Search */}
      <div className="relative mb-6">
        <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" />
        <input
          type="text"
          placeholder="Buscar por nome ou email..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-beige-dark/30 bg-white text-sm text-text focus:outline-none focus:border-agua transition-colors"
        />
      </div>

      {/* Table */}
      <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
        {loading ? (
          <div className="flex items-center justify-center py-16">
            <div className="animate-spin w-8 h-8 border-4 border-agua border-t-transparent rounded-full" />
          </div>
        ) : filtered.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 text-text-light">
            <FiUsers className="w-10 h-10 mb-3 opacity-30" />
            <p className="text-sm">
              {search ? "Nenhum resultado encontrado." : "Nenhum inscrito ainda."}
            </p>
          </div>
        ) : (
          <>
            {/* Desktop table */}
            <div className="hidden sm:block overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-beige-dark/20">
                    <th className="text-left px-6 py-3 text-text-light font-medium">#</th>
                    <th className="text-left px-6 py-3 text-text-light font-medium">Nome</th>
                    <th className="text-left px-6 py-3 text-text-light font-medium">Email</th>
                    <th className="text-left px-6 py-3 text-text-light font-medium">Inscrito em</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((sub, i) => (
                    <tr
                      key={sub.id}
                      className="border-b border-beige-dark/10 last:border-0 hover:bg-beige/40 transition-colors"
                    >
                      <td className="px-6 py-4 text-text-light">{i + 1}</td>
                      <td className="px-6 py-4 text-text font-medium">{sub.name}</td>
                      <td className="px-6 py-4">
                        <a
                          href={`mailto:${sub.email}`}
                          className="flex items-center gap-1.5 text-agua-dark hover:underline"
                        >
                          <FiMail className="w-3.5 h-3.5" />
                          {sub.email}
                        </a>
                      </td>
                      <td className="px-6 py-4 text-text-light">{formatDate(sub.createdAt)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile cards */}
            <div className="sm:hidden divide-y divide-beige-dark/10">
              {filtered.map((sub, i) => (
                <div key={sub.id} className="px-4 py-4">
                  <div className="flex items-start justify-between mb-1">
                    <p className="font-medium text-text">{sub.name}</p>
                    <span className="text-xs text-text-light">#{i + 1}</span>
                  </div>
                  <a
                    href={`mailto:${sub.email}`}
                    className="flex items-center gap-1 text-sm text-agua-dark hover:underline mb-1"
                  >
                    <FiMail className="w-3 h-3" />
                    {sub.email}
                  </a>
                  <p className="text-xs text-text-light">{formatDate(sub.createdAt)}</p>
                </div>
              ))}
            </div>

            {search && filtered.length !== subscribers.length && (
              <div className="px-6 py-3 bg-beige/50 border-t border-beige-dark/10 text-xs text-text-light">
                Mostrando {filtered.length} de {subscribers.length} inscritos
              </div>
            )}
          </>
        )}
      </div>
    </div>
  );
}
