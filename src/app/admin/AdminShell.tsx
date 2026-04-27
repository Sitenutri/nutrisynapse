"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { signOut } from "next-auth/react";
import { FiHome, FiFileText, FiBook, FiLogOut, FiMenu, FiX } from "react-icons/fi";
import { useState } from "react";

const sidebarLinks = [
  { href: "/admin", label: "Dashboard", icon: FiHome },
  { href: "/admin/posts", label: "Posts", icon: FiFileText },
  { href: "/admin/ebooks", label: "E-books", icon: FiBook },
];

export default function AdminShell({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const router = useRouter();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Login page gets its own layout — skip the admin shell
  if (pathname === "/admin/login") {
    return <>{children}</>;
  }

  const handleLogout = async () => {
    await signOut({ redirect: false });
    router.push("/admin/login");
  };

  return (
    <div className="min-h-screen flex bg-beige">
      {/* Mobile overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/30 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={`fixed z-40 inset-y-0 left-0 w-64 bg-white shadow-lg transform transition-transform duration-200 ease-in-out lg:translate-x-0 lg:static lg:z-auto ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Brand */}
          <div className="flex items-center justify-between px-6 py-5 border-b border-beige-dark/30">
            <Link href="/admin" className="flex items-center gap-1">
              <span className="text-lg font-bold text-agua-dark">Nutri</span>
              <span className="text-lg font-bold text-text">Synapse</span>
            </Link>
            <button
              onClick={() => setSidebarOpen(false)}
              className="lg:hidden p-1 rounded hover:bg-beige transition-colors"
            >
              <FiX className="w-5 h-5" />
            </button>
          </div>
          <p className="px-6 py-2 text-xs text-text-light uppercase tracking-wider">Admin</p>

          {/* Nav Links */}
          <nav className="flex-1 px-3 space-y-1">
            {sidebarLinks.map((link) => {
              const isActive =
                link.href === "/admin"
                  ? pathname === "/admin"
                  : pathname.startsWith(link.href);
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setSidebarOpen(false)}
                  className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                    isActive
                      ? "bg-agua/10 text-agua-dark"
                      : "text-text-light hover:bg-beige hover:text-text"
                  }`}
                >
                  <link.icon className="w-5 h-5" />
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Logout */}
          <div className="px-3 py-4 border-t border-beige-dark/30">
            <button
              onClick={handleLogout}
              className="flex items-center gap-3 w-full px-3 py-2.5 rounded-xl text-sm font-medium text-text-light hover:bg-red-50 hover:text-red-600 transition-colors"
            >
              <FiLogOut className="w-5 h-5" />
              Sair
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col min-w-0">
        {/* Top bar (mobile) */}
        <header className="lg:hidden flex items-center justify-between px-4 py-3 bg-white shadow-sm">
          <button
            onClick={() => setSidebarOpen(true)}
            className="p-2 rounded-lg hover:bg-beige transition-colors"
          >
            <FiMenu className="w-5 h-5" />
          </button>
          <div className="flex items-center gap-1">
            <span className="text-lg font-bold text-agua-dark">Nutri</span>
            <span className="text-lg font-bold text-text">Synapse</span>
          </div>
          <div className="w-9" /> {/* Spacer for centering */}
        </header>

        <main className="flex-1 p-4 sm:p-6 lg:p-8 overflow-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
