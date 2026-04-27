"use client";

import { useEffect, useState, useMemo } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiPlus, FiEdit2, FiTrash2, FiEye, FiEyeOff, FiSearch } from "react-icons/fi";

interface Ebook {
  id: string;
  slug: string;
  title: string;
  description: string;
  price: number;
  category: string;
  published: boolean;
  featured: boolean;
  createdAt: string;
}

const CATEGORY_LABELS: Record<string, string> = {
  neurociencia: "Neurociência",
  diabetes: "Diabetes",
  nutricao: "Nutrição",
  sabedoria: "Sabedoria",
  "mudanca-habitos": "Mudança de Hábitos",
  microbiota: "Microbiota",
};

export default function AdminEbooksPage() {
  const { status } = useSession();
  const router = useRouter();
  const [ebooks, setEbooks] = useState<Ebook[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft">("all");
  const [categoryFilter, setCategoryFilter] = useState<string>("all");

  useEffect(() => {
    if (status === "unauthenticated") router.push("/admin/login");
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") return;
    fetchEbooks();
  }, [status]);

  const fetchEbooks = async () => {
    try {
      const res = await fetch("/api/ebooks?all=1");
      const data = await res.json();
      setEbooks(data);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  const filteredEbooks = useMemo(() => {
    return ebooks.filter((ebook) => {
      const matchesSearch =
        !search ||
        ebook.title.toLowerCase().includes(search.toLowerCase()) ||
        ebook.description?.toLowerCase().includes(search.toLowerCase());

      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "published" && ebook.published) ||
        (statusFilter === "draft" && !ebook.published);

      const matchesCategory =
        categoryFilter === "all" || ebook.category === categoryFilter;

      return matchesSearch && matchesStatus && matchesCategory;
    });
  }, [ebooks, search, statusFilter, categoryFilter]);

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este e-book?")) return;
    await fetch(`/api/ebooks/${id}`, { method: "DELETE" });
    setEbooks(ebooks.filter((e) => e.id !== id));
  };

  const togglePublish = async (ebook: Ebook) => {
    await fetch(`/api/ebooks/${ebook.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...ebook, published: !ebook.published }),
    });
    setEbooks(ebooks.map((e) => (e.id === ebook.id ? { ...e, published: !e.published } : e)));
  };

  if (status === "loading" || status === "unauthenticated") {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin w-8 h-8 border-4 border-agua border-t-transparent rounded-full" />
      </div>
    );
  }

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div>
          <h1 className="text-2xl font-bold text-text">E-books</h1>
          <p className="text-text-light text-sm mt-1">Gerencie os e-books da loja</p>
        </div>
        <Link
          href="/admin/ebooks/new"
          className="flex items-center gap-2 px-4 py-2.5 bg-verde-dark text-white text-sm font-medium rounded-xl hover:bg-verde transition-colors"
        >
          <FiPlus className="w-4 h-4" />
          Novo E-book
        </Link>
      </div>

      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por título ou descrição..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-beige-dark bg-white text-sm focus:outline-none focus:ring-2 focus:ring-verde/50 focus:border-verde transition-all"
          />
        </div>
        <select
          value={categoryFilter}
          onChange={(e) => setCategoryFilter(e.target.value)}
          className="px-4 py-2.5 rounded-xl border border-beige-dark bg-white text-sm focus:outline-none focus:ring-2 focus:ring-verde/50 focus:border-verde transition-all"
        >
          <option value="all">Todas as categorias</option>
          {Object.entries(CATEGORY_LABELS).map(([value, label]) => (
            <option key={value} value={value}>{label}</option>
          ))}
        </select>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as "all" | "published" | "draft")}
          className="px-4 py-2.5 rounded-xl border border-beige-dark bg-white text-sm focus:outline-none focus:ring-2 focus:ring-verde/50 focus:border-verde transition-all"
        >
          <option value="all">Todos os status</option>
          <option value="published">Publicados</option>
          <option value="draft">Rascunhos</option>
        </select>
      </div>

      {loading ? (
        <div className="flex items-center justify-center py-20">
          <div className="animate-spin w-8 h-8 border-4 border-agua border-t-transparent rounded-full" />
        </div>
      ) : ebooks.length === 0 ? (
        <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
          <p className="text-text-light mb-4">Nenhum e-book criado ainda.</p>
          <Link href="/admin/ebooks/new" className="text-verde-dark hover:underline text-sm">
            Criar primeiro e-book
          </Link>
        </div>
      ) : filteredEbooks.length === 0 ? (
        <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
          <p className="text-text-light">Nenhum e-book encontrado com os filtros atuais.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-beige-dark/30">
                  <th className="text-left px-5 py-3 text-text-light font-medium">Título</th>
                  <th className="text-left px-5 py-3 text-text-light font-medium hidden sm:table-cell">Categoria</th>
                  <th className="text-left px-5 py-3 text-text-light font-medium hidden sm:table-cell">Preço</th>
                  <th className="text-center px-5 py-3 text-text-light font-medium">Status</th>
                  <th className="text-right px-5 py-3 text-text-light font-medium">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredEbooks.map((ebook) => (
                  <tr key={ebook.id} className="border-b border-beige-dark/20 hover:bg-beige/30 transition-colors">
                    <td className="px-5 py-4">
                      <p className="font-medium text-text">{ebook.title}</p>
                      <p className="text-xs text-text-light mt-0.5">
                        {new Date(ebook.createdAt).toLocaleDateString("pt-BR")}
                      </p>
                    </td>
                    <td className="px-5 py-4 hidden sm:table-cell">
                      <span className="text-xs bg-verde/10 text-verde-dark px-2 py-0.5 rounded-full">
                        {CATEGORY_LABELS[ebook.category] || ebook.category}
                      </span>
                    </td>
                    <td className="px-5 py-4 hidden sm:table-cell">
                      <span className="text-sm font-medium text-text">
                        {ebook.price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <button
                        onClick={() => togglePublish(ebook)}
                        className={`inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full ${
                          ebook.published
                            ? "bg-verde/20 text-verde-dark"
                            : "bg-beige-dark/30 text-text-light"
                        }`}
                      >
                        {ebook.published ? <FiEye className="w-3 h-3" /> : <FiEyeOff className="w-3 h-3" />}
                        {ebook.published ? "Publicado" : "Rascunho"}
                      </button>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/ebooks/${ebook.id}/edit`}
                          className="p-2 rounded-lg hover:bg-verde/10 text-text-light hover:text-verde-dark transition-colors"
                        >
                          <FiEdit2 className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(ebook.id)}
                          className="p-2 rounded-lg hover:bg-red-50 text-text-light hover:text-red-500 transition-colors"
                        >
                          <FiTrash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}
