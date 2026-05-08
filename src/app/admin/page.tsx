"use client";

import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FiFileText, FiBook, FiUsers, FiPlus, FiArrowRight } from "react-icons/fi";

interface Stats {
  posts: number;
  ebooks: number;
  subscribers: number;
}

export default function AdminDashboard() {
  const { status } = useSession();
  const router = useRouter();
  const [stats, setStats] = useState<Stats>({ posts: 0, ebooks: 0, subscribers: 0 });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/admin/login");
    }
  }, [status, router]);

  useEffect(() => {
    if (status !== "authenticated") return;

    async function fetchStats() {
      try {
        const [postsRes, ebooksRes, subsRes] = await Promise.all([
          fetch("/api/admin/stats?type=posts"),
          fetch("/api/admin/stats?type=ebooks"),
          fetch("/api/admin/stats?type=subscribers"),
        ]);
        const postsData = await postsRes.json();
        const ebooksData = await ebooksRes.json();
        const subsData = await subsRes.json();
        setStats({
          posts: postsData.count ?? 0,
          ebooks: ebooksData.count ?? 0,
          subscribers: subsData.count ?? 0,
        });
      } catch {
        // stats will stay at 0
      } finally {
        setLoading(false);
      }
    }
    fetchStats();
  }, [status]);

  if (status === "loading" || status === "unauthenticated") {
    return (
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="animate-spin w-8 h-8 border-4 border-agua border-t-transparent rounded-full" />
      </div>
    );
  }

  const cards = [
    {
      label: "Posts",
      value: stats.posts,
      icon: FiFileText,
      color: "bg-agua/10 text-agua-dark",
      href: "/admin/posts",
    },
    {
      label: "E-books",
      value: stats.ebooks,
      icon: FiBook,
      color: "bg-verde/10 text-verde-dark",
      href: "/admin/ebooks",
    },
    {
      label: "Inscritos Newsletter",
      value: stats.subscribers,
      icon: FiUsers,
      color: "bg-azul/10 text-azul",
      href: "/admin/newsletter",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-text">Dashboard</h1>
        <p className="text-text-light mt-1">Visão geral do NutriSynapse</p>
      </div>

      {/* Stats Cards */}
      <div className="grid sm:grid-cols-3 gap-4 mb-8">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="bg-white rounded-2xl shadow-sm p-6 hover:shadow-md transition-shadow"
          >
            <div className="flex items-center justify-between mb-3">
              <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${card.color}`}>
                <card.icon className="w-5 h-5" />
              </div>
              {loading ? (
                <div className="w-8 h-8 bg-beige rounded animate-pulse" />
              ) : (
                <span className="text-3xl font-bold text-text">{card.value}</span>
              )}
            </div>
            <p className="text-sm text-text-light">{card.label}</p>
          </Link>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-2xl shadow-sm p-6">
        <h2 className="text-lg font-bold text-text mb-4">Ações rápidas</h2>
        <div className="grid sm:grid-cols-2 gap-3">
          <Link
            href="/admin/posts/new"
            className="flex items-center gap-3 px-4 py-3 rounded-xl border border-beige-dark/30 hover:border-agua hover:bg-agua/5 transition-all group"
          >
            <div className="w-9 h-9 rounded-lg bg-agua/10 flex items-center justify-center">
              <FiPlus className="w-4 h-4 text-agua-dark" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-text">Novo post</p>
              <p className="text-xs text-text-light">Criar um novo artigo</p>
            </div>
            <FiArrowRight className="w-4 h-4 text-text-light group-hover:text-agua-dark transition-colors" />
          </Link>

          <Link
            href="/admin/ebooks/new"
            className="flex items-center gap-3 px-4 py-3 rounded-xl border border-beige-dark/30 hover:border-verde hover:bg-verde/5 transition-all group"
          >
            <div className="w-9 h-9 rounded-lg bg-verde/10 flex items-center justify-center">
              <FiPlus className="w-4 h-4 text-verde-dark" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-text">Novo e-book</p>
              <p className="text-xs text-text-light">Adicionar um novo e-book</p>
            </div>
            <FiArrowRight className="w-4 h-4 text-text-light group-hover:text-verde-dark transition-colors" />
          </Link>

          <Link
            href="/admin/posts"
            className="flex items-center gap-3 px-4 py-3 rounded-xl border border-beige-dark/30 hover:border-agua hover:bg-agua/5 transition-all group"
          >
            <div className="w-9 h-9 rounded-lg bg-agua/10 flex items-center justify-center">
              <FiFileText className="w-4 h-4 text-agua-dark" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-text">Gerenciar posts</p>
              <p className="text-xs text-text-light">Ver e editar artigos</p>
            </div>
            <FiArrowRight className="w-4 h-4 text-text-light group-hover:text-agua-dark transition-colors" />
          </Link>

          <Link
            href="/admin/ebooks"
            className="flex items-center gap-3 px-4 py-3 rounded-xl border border-beige-dark/30 hover:border-verde hover:bg-verde/5 transition-all group"
          >
            <div className="w-9 h-9 rounded-lg bg-verde/10 flex items-center justify-center">
              <FiBook className="w-4 h-4 text-verde-dark" />
            </div>
            <div className="flex-1">
              <p className="text-sm font-medium text-text">Gerenciar e-books</p>
              <p className="text-xs text-text-light">Ver e editar e-books</p>
            </div>
            <FiArrowRight className="w-4 h-4 text-text-light group-hover:text-verde-dark transition-colors" />
          </Link>
        </div>
      </div>
    </div>
  );
}
