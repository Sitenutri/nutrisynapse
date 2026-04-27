"use client";

import { useState, FormEvent } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function AdminLoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    setLoading(false);

    if (res?.error) {
      setError("Email ou senha incorretos.");
    } else {
      router.push("/admin");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-beige px-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <h1 className="text-2xl font-bold text-text">
            <span className="text-agua-dark">Nutri</span>Synapse
          </h1>
          <p className="text-sm text-text-light mt-1">Painel Administrativo</p>
        </div>

        <div className="bg-white rounded-2xl shadow-md p-8">
          <h2 className="text-xl font-bold text-text mb-6">Entrar</h2>

          {error && (
            <div className="mb-4 p-3 rounded-lg bg-red-50 border border-red-200 text-red-700 text-sm">
              {error}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-text mb-1">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-beige-dark/50 bg-beige/30 text-text placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-agua/50 focus:border-agua transition-all"
                placeholder="admin@nutrisynapse.com"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-text mb-1">
                Senha
              </label>
              <input
                id="password"
                type="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full px-4 py-3 rounded-xl border border-beige-dark/50 bg-beige/30 text-text placeholder:text-text-light/50 focus:outline-none focus:ring-2 focus:ring-agua/50 focus:border-agua transition-all"
                placeholder="Sua senha"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-agua-dark text-white font-semibold rounded-xl hover:bg-agua transition-colors disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {loading ? "Entrando..." : "Entrar"}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
