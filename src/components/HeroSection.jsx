import { Link } from 'react-router-dom'
import { ChevronDown, MessageCircle } from 'lucide-react'

const particles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${(i * 14 + 7) % 96}%`,
  top: `${(i * 19 + 10) % 85}%`,
  delay: `${(i % 6) * 0.35}s`,
  duration: `${3 + (i % 4)}s`,
  size: i % 3 === 0 ? '5px' : '3px',
}))

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Fundo garantido via background-image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1541643600914-78b084683702?q=80&w=1400&auto=format&fit=crop')",
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black"
        aria-hidden="true"
      />

      {/* Img explícita (pré-carrega e cobre casos extremos) */}
      <img
        src="https://images.unsplash.com/photo-1541643600914-78b084683702?q=80&w=1400&auto=format&fit=crop"
        alt="Imagem de fundo: perfume premium"
        loading="eager"
        width="1400"
        height="900"
        className="absolute inset-0 h-full w-full object-cover opacity-0"
        onError={(e) => {
          e.currentTarget.style.display = 'none'
        }}
      />

      {particles.map((p, idx) => (
        <span
          key={p.id}
          className={`sparkle-particle animate-float ${idx >= 8 ? 'hidden sm:block' : ''}`}
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
            animationDuration: p.duration,
          }}
          aria-hidden="true"
        />
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center sm:px-8 lg:px-16 md:text-left">
        <span className="fade-up inline-flex rounded-full border border-gold/50 px-5 py-2 font-body text-xs font-medium uppercase tracking-[0.25em] text-gold [animation-delay:0.1s]">
          ✦ Coleção 2025 ✦
        </span>
        <div className="fade-up mt-7 h-px w-20 bg-gradient-to-r from-gold/20 via-gold to-gold/20 md:mx-0 mx-auto [animation-delay:0.2s]" />
        <h1 className="fade-up mt-5 font-logo text-4xl leading-tight text-cream sm:text-6xl lg:text-8xl [animation-delay:0.4s]">
          A Arte de Sentir
        </h1>
        <p className="fade-up mx-auto mt-6 max-w-xl font-body text-base font-light text-cream/80 sm:text-xl md:mx-0 [animation-delay:0.6s]">
          Fragrâncias que contam a sua história
        </p>

        <div className="fade-up mt-10 flex w-full flex-col items-center gap-4 sm:w-auto sm:flex-row md:justify-start [animation-delay:0.8s]">
          <Link
            to="/catalogo"
            className="inline-flex w-full items-center justify-center rounded bg-gold px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-dark transition-all hover:scale-[1.04] hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,162,86,0.45)] sm:w-auto"
          >
            Explorar Coleção
          </Link>
          <a
            href="https://wa.me/message/XRY3ZML54HGNE1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full items-center justify-center gap-2 rounded border border-gold/60 px-8 py-3.5 font-body text-sm font-medium uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-dark sm:w-auto"
          >
            <MessageCircle className="h-4 w-4" />
            Fale no WhatsApp
          </a>
        </div>
      </div>

      <a
        href="#destaques"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 text-gold"
        aria-label="Rolar para destaques"
      >
        <ChevronDown className="h-7 w-7 animate-bounce" />
      </a>
    </section>
  )
}
