"use client";

import { useEffect, useState, useCallback } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import { FiAlertCircle, FiAlertTriangle, FiInfo, FiRefreshCw, FiTrash2 } from "react-icons/fi";

interface AppLog {
  id: string;
  level: "info" | "warn" | "error";
  event: string;
  message: string;
  meta: string | null;
  createdAt: string;
}

const LEVEL_STYLES = {
  info:  { bg: "bg-blue-50",   border: "border-blue-200",   text: "text-blue-700",   icon: FiInfo,          label: "INFO"  },
  warn:  { bg: "bg-yellow-50", border: "border-yellow-200", text: "text-yellow-700", icon: FiAlertTriangle, label: "AVISO" },
  error: { bg: "bg-red-50",    border: "border-red-200",    text: "text-red-700",    icon: FiAlertCircle,   label: "ERRO"  },
};

export default function LogsPage() {
  const { status } = useSession();
  const router = useRouter();
  const [logs, setLogs] = useState<AppLog[]>([]);
  const [loading, setLoading] = useState(true);
  const [filterLevel, setFilterLevel] = useState<string>("");
  const [filterEvent, setFilterEvent] = useState<string>("");
  const [expanded, setExpanded] = useState<string | null>(null);

  useEffect(() => {
    if (status === "unauthenticated") router.push("/admin/login");
  }, [status, router]);

  const fetchLogs = useCallback(async () => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      if (filterLevel) params.set("level", filterLevel);
      if (filterEvent) params.set("event", filterEvent);
      params.set("limit", "200");
      const res = await fetch(`/api/admin/logs?${params}`);
      const data = await res.json();
      setLogs(Array.isArray(data) ? data : []);
    } catch {
      setLogs([]);
    } finally {
      setLoading(false);
    }
  }, [filterLevel, filterEvent]);

  useEffect(() => {
    if (status === "authenticated") fetchLogs();
  }, [status, fetchLogs]);

  async function handleClear() {
    if (!confirm("Apagar logs com mais de 30 dias?")) return;
    await fetch("/api/admin/logs", { method: "DELETE" });
    fetchLogs();
  }

  const errorCount = logs.filter(l => l.level === "error").length;
  const warnCount  = logs.filter(l => l.level === "warn").length;

  return (
    <div className="max-w-5xl mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-800">Logs do Sistema</h1>
          <p className="text-sm text-gray-500 mt-1">
            {errorCount > 0 && <span className="text-red-600 font-semibold">{errorCount} erro{errorCount > 1 ? "s" : ""} · </span>}
            {warnCount  > 0 && <span className="text-yellow-600 font-semibold">{warnCount} aviso{warnCount > 1 ? "s" : ""} · </span>}
            {logs.length} registros
          </p>
        </div>
        <div className="flex gap-2">
          <button
            onClick={fetchLogs}
            className="flex items-center gap-2 px-3 py-2 text-sm bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition"
          >
            <FiRefreshCw size={14} /> Atualizar
          </button>
          <button
            onClick={handleClear}
            className="flex items-center gap-2 px-3 py-2 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg hover:bg-red-100 transition"
          >
            <FiTrash2 size={14} /> Limpar antigos
          </button>
        </div>
      </div>

      {/* Filtros */}
      <div className="flex gap-3 mb-4 flex-wrap">
        <select
          value={filterLevel}
          onChange={e => setFilterLevel(e.target.value)}
          className="px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white focus:outline-none focus:ring-2 focus:ring-blue-300"
        >
          <option value="">Todos os níveis</option>
          <option value="error">Apenas erros</option>
          <option value="warn">Apenas avisos</option>
          <option value="info">Apenas info</option>
        </select>
        <input
          type="text"
          placeholder="Filtrar por evento (ex: lead_magnet)"
          value={filterEvent}
          onChange={e => setFilterEvent(e.target.value)}
          className="px-3 py-2 text-sm border border-gray-200 rounded-lg bg-white flex-1 min-w-48 focus:outline-none focus:ring-2 focus:ring-blue-300"
        />
      </div>

      {loading ? (
        <div className="text-center py-12 text-gray-400">Carregando logs...</div>
      ) : logs.length === 0 ? (
        <div className="text-center py-12 text-gray-400">Nenhum log encontrado.</div>
      ) : (
        <div className="space-y-2">
          {logs.map(log => {
            const style = LEVEL_STYLES[log.level] ?? LEVEL_STYLES.info;
            const Icon = style.icon;
            const isOpen = expanded === log.id;
            const meta = log.meta ? (() => { try { return JSON.parse(log.meta); } catch { return log.meta; } })() : null;

            return (
              <div
                key={log.id}
                className={`border rounded-lg ${style.bg} ${style.border} overflow-hidden`}
              >
                <button
                  className="w-full flex items-start gap-3 px-4 py-3 text-left"
                  onClick={() => setExpanded(isOpen ? null : log.id)}
                >
                  <Icon className={`${style.text} mt-0.5 flex-shrink-0`} size={16} />
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className={`text-xs font-bold ${style.text} uppercase tracking-wide`}>{style.label}</span>
                      <span className="text-xs text-gray-500 font-mono bg-white/60 px-1.5 py-0.5 rounded">{log.event}</span>
                      <span className="text-xs text-gray-400 ml-auto">
                        {new Date(log.createdAt).toLocaleString("pt-BR", { timeZone: "America/Sao_Paulo" })}
                      </span>
                    </div>
                    <p className="text-sm text-gray-700 mt-0.5 truncate">{log.message}</p>
                  </div>
                </button>

                {isOpen && meta && (
                  <div className="px-4 pb-3 border-t border-current/10">
                    <pre className="text-xs text-gray-600 bg-white/70 rounded p-3 overflow-x-auto mt-2">
                      {typeof meta === "object" ? JSON.stringify(meta, null, 2) : meta}
                    </pre>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
