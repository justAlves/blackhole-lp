import Image from "next/image";

export default function Home() {
  return (
    <main className="relative min-h-screen text-white flex flex-col overflow-hidden">
      {/* Grid animado de fundo */}
      <div
        aria-hidden
        className="pointer-events-none fixed -z-10 w-screen h-screen"
      >
        <svg
          className="w-full h-full"
          style={{ opacity: 0.15 }}
          width="100%"
          height="100%"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            <pattern
              id="grid"
              width="24"
              height="24"
              patternUnits="userSpaceOnUse"
            >
              <path
                d="M 24 0 L 0 0 0 24"
                fill="none"
                stroke="#a78bfa"
                strokeWidth="1.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center flex-1 px-6 py-24">
        <h1 className="text-5xl md:text-7xl font-bold text-center mb-6 bg-gradient-to-r from-violet-300 via-white to-violet-500 bg-clip-text text-transparent animate-gradient-x drop-shadow-[0_2px_8px_rgba(124,58,237,0.3)]">
          Compartilhe arquivos <span className="text-white drop-shadow-lg">com segurança</span> e rapidez
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 text-center max-w-2xl mb-8 animate-fade-in-up delay-100">
          Blackhole é o jeito mais simples de enviar arquivos grandes. Faça upload, gere um link temporário e compartilhe com quem quiser.
        </p>
        <a
          href="#download"
          className="bg-violet-500 hover:bg-violet-600 transition px-8 py-4 rounded-full text-lg font-semibold shadow-lg animate-fade-in-up delay-200"
        >
          Baixar agora
        </a>
        <div className="mt-16 animate-fade-in-up delay-300">
          <Image
            src="/mockup.png"
            alt="Mockup do Blackhole"
            width={700}
            height={400}
            className="rounded-xl shadow-2xl border border-gray-800"
            priority
          />
        </div>
      </section>

      {/* Benefícios */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto grid md:grid-cols-3 gap-12 px-6">
          <div className="animate-fade-in-up delay-100">
            <h2 className="text-2xl font-bold mb-3">Privacidade total</h2>
            <p className="text-gray-300">
              Seus arquivos são criptografados e os links expiram automaticamente. Só quem tem o link pode acessar.
            </p>
          </div>
          <div className="animate-fade-in-up delay-200">
            <h2 className="text-2xl font-bold mb-3">Arquivos pesados</h2>
            <p className="text-gray-300">
              Envie arquivos de até 200mb. Sem cadastros.
            </p>
          </div>
          <div className="animate-fade-in-up delay-300">
            <h2 className="text-2xl font-bold mb-3">Open Source</h2>
            <p className="text-gray-300">
              Transparência e confiança. O código do Blackhole é aberto e auditável por todos.
            </p>
          </div>
        </div>
      </section>

      {/* Como funciona */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in-up">
            Como funciona?
          </h2>
          <ol className="space-y-8 text-lg text-gray-200">
            <li className="animate-fade-in-up delay-100">
              <span className="font-semibold text-violet-400">1.</span> Faça upload do seu arquivo no app Blackhole.
            </li>
            <li className="animate-fade-in-up delay-200">
              <span className="font-semibold text-violet-400">2.</span> Receba um link temporário e seguro.
            </li>
            <li className="animate-fade-in-up delay-300">
              <span className="font-semibold text-violet-400">3.</span> Compartilhe o link com quem quiser. O arquivo será deletado após o 7 dias.
            </li>
          </ol>
        </div>
      </section>

      {/* CTA Final */}
      <section id="download" className="py-20 flex flex-col items-center">
        <h2 className="text-4xl font-bold mb-6 animate-fade-in-up">
          Pronto para compartilhar?
        </h2>
        <a
          href="https://github.com/justAlves/blackhole"
          className="relative inline-block px-12 py-5 rounded-full text-lg font-bold shadow-xl transition-all duration-200
            bg-gradient-to-r from-violet-500 via-fuchsia-500 to-violet-700
            hover:from-violet-600 hover:via-fuchsia-600 hover:to-violet-800
            text-white animate-gradient-x focus:outline-none focus:ring-4 focus:ring-violet-400/50"
          style={{
            boxShadow: "0 8px 32px 0 rgba(124,58,237,0.25), 0 1.5px 8px 0 rgba(124,58,237,0.15)"
          }}
        >
          <span className="drop-shadow">Baixar Blackhole agora</span>
        </a>
        <p className="text-gray-300 mt-4 animate-fade-in-up delay-200">
          Disponível para Windows 10 e 11
        </p>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm">
        © {new Date().getFullYear()} Blackhole. Feito com ♥ por Guilherme Alves Profirio.
      </footer>
    </main>
  );
}