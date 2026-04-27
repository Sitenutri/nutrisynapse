import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-agua-dark text-white mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-3">NutriSynapse</h3>
            <p className="text-sm text-white/80 leading-relaxed">
              Onde Neurociência, Nutrição e Psicanálise se conectam para transformar sua saúde.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold mb-3">Navegação</h4>
            <ul className="space-y-2 text-sm text-white/80">
              <li><Link href="/" className="hover:text-white transition-colors">Início</Link></li>
              <li><Link href="/blog" className="hover:text-white transition-colors">Blog</Link></li>
              <li><Link href="/ebooks" className="hover:text-white transition-colors">E-books</Link></li>
              <li><Link href="/especialidades/diabetes" className="hover:text-white transition-colors">Diabetes</Link></li>
              <li><Link href="/especialidades/microbiota" className="hover:text-white transition-colors">Microbiota</Link></li>
              <li><Link href="/contato" className="hover:text-white transition-colors">Contato</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold mb-3">Contato</h4>
            <p className="text-sm text-white/80">
              Fale com a Bibi para saber mais sobre nossos conteúdos e serviços.
            </p>
            <Link
              href="/contato"
              className="inline-block mt-3 px-4 py-2 bg-white/20 rounded-lg text-sm hover:bg-white/30 transition-colors"
            >
              Entre em contato
            </Link>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-6 text-center text-xs text-white/60">
          © {new Date().getFullYear()} NutriSynapse — Todos os direitos reservados.
        </div>
      </div>
    </footer>
  );
}
