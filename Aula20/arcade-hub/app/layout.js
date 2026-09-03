import "./globals.css";
import Link from "next/link";

export const metadata = {
  title: "ArcadeHub 🕹️",
  description: "A melhor plataforma de mini-games rápidos!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body className="flex min-h-screen">

        {/* MENU LATERAL */}
        <aside className="w-64 bg-slate-900 border-r border-slate-800 p-6 flex flex-col justify-between shrink-0">

          <div>

            <h2 className="text-2xl font-extrabold text-indigo-400 mb-8 tracking-wider">
              ArcadeHub ✨
            </h2>

            <nav className="flex flex-col gap-3">

              <Link
                href="/"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 font-medium transition"
              >
                🏠 Painel Inicial
              </Link>

              <Link
                href="/games"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 font-medium transition"
              >
                🎮 Jogar Games
              </Link>

              <Link
                href="/profile"
                className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 font-medium transition"
              >
                👤 Meu Perfil
              </Link>

              <Link href="/ranking"
                              className="flex items-center gap-3 px-4 py-3 rounded-lg text-slate-300 hover:text-white hover:bg-slate-800/50 font-medium transition"
              >
                🏆 Ranking
              </Link>

            </nav>

          </div>

          <footer className="text-xs text-slate-500 border-t border-slate-800 pt-4">

            <p>Player: ProDev-01</p>

            <p className="mt-1">
              Versão 2.6.0
            </p>

          </footer>

        </aside>

        {/* CONTEÚDO DA PÁGINA */}
        <main className="flex-1 p-8 overflow-y-auto">

          {children}

        </main>

      </body>
    </html>
  );
}