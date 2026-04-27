"use client";

import { useEffect, useState, useMemo } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiPlus, FiEdit2, FiTrash2, FiEye, FiEyeOff, FiSearch } from "react-icons/fi";

interface Post {
  id: string;
  slug: string;
  title: string;
  description: string;
  published: boolean;
  featured: boolean;
  createdAt: string;
  tags: { tag: { id: string; name: string } }[];
}

export default function AdminPostsPage() {
  const { status } = useSession();
  const router = useRouter();
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState<"all" | "published" | "draft">("all");

  useEffect(() => {
    if (status === "unauthenticated") router.push("/admin/login");
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") return;
    fetchPosts();
  }, [status]);

  const fetchPosts = async () => {
    try {
      const res = await fetch("/api/posts?all=1");
      const data = await res.json();
      setPosts(data);
    } catch {
      // ignore
    } finally {
      setLoading(false);
    }
  };

  const filteredPosts = useMemo(() => {
    return posts.filter((post) => {
      const matchesSearch =
        !search ||
        post.title.toLowerCase().includes(search.toLowerCase()) ||
        post.description?.toLowerCase().includes(search.toLowerCase()) ||
        post.tags?.some(({ tag }) => tag.name.toLowerCase().includes(search.toLowerCase()));

      const matchesStatus =
        statusFilter === "all" ||
        (statusFilter === "published" && post.published) ||
        (statusFilter === "draft" && !post.published);

      return matchesSearch && matchesStatus;
    });
  }, [posts, search, statusFilter]);

  const handleDelete = async (id: string) => {
    if (!confirm("Tem certeza que deseja excluir este post?")) return;
    await fetch(`/api/posts/${id}`, { method: "DELETE" });
    setPosts(posts.filter((p) => p.id !== id));
  };

  const togglePublish = async (post: Post) => {
    await fetch(`/api/posts/${post.id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...post, published: !post.published, tagIds: post.tags.map(t => t.tag.id) }),
    });
    setPosts(posts.map((p) => (p.id === post.id ? { ...p, published: !p.published } : p)));
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
          <h1 className="text-2xl font-bold text-text">Posts</h1>
          <p className="text-text-light text-sm mt-1">Gerencie os artigos do blog</p>
        </div>
        <Link
          href="/admin/posts/new"
          className="flex items-center gap-2 px-4 py-2.5 bg-agua-dark text-white text-sm font-medium rounded-xl hover:bg-agua transition-colors"
        >
          <FiPlus className="w-4 h-4" />
          Novo Post
        </Link>
      </div>

      {/* Search and Filter */}
      <div className="flex flex-col sm:flex-row gap-3 mb-6">
        <div className="relative flex-1">
          <FiSearch className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-text-light" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Buscar por título, descrição ou tag..."
            className="w-full pl-10 pr-4 py-2.5 rounded-xl border border-beige-dark bg-white text-sm focus:outline-none focus:ring-2 focus:ring-agua/50 focus:border-agua transition-all"
          />
        </div>
        <select
          value={statusFilter}
          onChange={(e) => setStatusFilter(e.target.value as "all" | "published" | "draft")}
          className="px-4 py-2.5 rounded-xl border border-beige-dark bg-white text-sm focus:outline-none focus:ring-2 focus:ring-agua/50 focus:border-agua transition-all"
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
      ) : posts.length === 0 ? (
        <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
          <p className="text-text-light mb-4">Nenhum post criado ainda.</p>
          <Link href="/admin/posts/new" className="text-agua-dark hover:underline text-sm">
            Criar primeiro post
          </Link>
        </div>
      ) : filteredPosts.length === 0 ? (
        <div className="bg-white rounded-2xl p-10 text-center shadow-sm">
          <p className="text-text-light">Nenhum post encontrado com os filtros atuais.</p>
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-beige-dark/30">
                  <th className="text-left px-5 py-3 text-text-light font-medium">Título</th>
                  <th className="text-left px-5 py-3 text-text-light font-medium hidden sm:table-cell">Tags</th>
                  <th className="text-center px-5 py-3 text-text-light font-medium">Status</th>
                  <th className="text-right px-5 py-3 text-text-light font-medium">Ações</th>
                </tr>
              </thead>
              <tbody>
                {filteredPosts.map((post) => (
                  <tr key={post.id} className="border-b border-beige-dark/20 hover:bg-beige/30 transition-colors">
                    <td className="px-5 py-4">
                      <p className="font-medium text-text">{post.title}</p>
                      <p className="text-xs text-text-light mt-0.5">
                        {new Date(post.createdAt).toLocaleDateString("pt-BR")}
                      </p>
                    </td>
                    <td className="px-5 py-4 hidden sm:table-cell">
                      <div className="flex flex-wrap gap-1">
                        {post.tags?.map(({ tag }) => (
                          <span key={tag.id} className="text-xs bg-agua/10 text-agua-dark px-2 py-0.5 rounded-full">
                            {tag.name}
                          </span>
                        ))}
                      </div>
                    </td>
                    <td className="px-5 py-4 text-center">
                      <button
                        onClick={() => togglePublish(post)}
                        className={`inline-flex items-center gap-1 text-xs px-3 py-1 rounded-full ${
                          post.published
                            ? "bg-verde/20 text-verde-dark"
                            : "bg-beige-dark/30 text-text-light"
                        }`}
                      >
                        {post.published ? <FiEye className="w-3 h-3" /> : <FiEyeOff className="w-3 h-3" />}
                        {post.published ? "Publicado" : "Rascunho"}
                      </button>
                    </td>
                    <td className="px-5 py-4">
                      <div className="flex items-center justify-end gap-2">
                        <Link
                          href={`/admin/posts/${post.id}/edit`}
                          className="p-2 rounded-lg hover:bg-agua/10 text-text-light hover:text-agua-dark transition-colors"
                        >
                          <FiEdit2 className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(post.id)}
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
