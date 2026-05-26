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
    <section className="relative w-full h-screen min-h-[620px] overflow-hidden flex items-center">
      {/* Imagem de fundo via classe + media query (full-bleed) */}
      <div className="absolute inset-0 w-full h-full hero-bg" aria-hidden="true" />

      {/* Escurece a esquerda para legibilidade do texto */}
      <div
        className="absolute inset-0 w-full h-full bg-gradient-to-r from-black/85 via-black/50 to-transparent md:from-black/70 md:via-black/40 md:to-transparent"
        aria-hidden="true"
      />

      {/* Escurece a base — cobre marca d'água */}
      <div
        className="absolute inset-0 w-full h-full bg-gradient-to-t from-black/95 via-black/20 to-transparent"
        aria-hidden="true"
      />

      {/* Escurece o canto direito — cobre marca d'água */}
      <div
        className="absolute inset-0 w-full h-full bg-gradient-to-l from-black/80 via-transparent to-transparent md:from-black/60"
        aria-hidden="true"
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

      <div className="relative z-10 px-6 md:px-16 lg:px-24 w-full md:max-w-[52%] pt-24 md:pt-0">
        <span className="fade-up inline-block border border-gold/60 text-gold text-[11px] md:text-xs px-4 py-1.5 rounded-full font-body tracking-[0.2em] uppercase mb-4 [animation-delay:0.1s]">
          ✦ Coleção 2025 ✦
        </span>

        <h1 className="fade-up [animation-delay:0.3s]">
          <span className="block font-display text-white text-2xl md:text-4xl lg:text-5xl font-normal leading-tight">
            A Arte de
          </span>
          <span className="block font-display text-white text-5xl md:text-7xl lg:text-8xl font-bold leading-none mb-3">
            SENTIR
          </span>
        </h1>

        <div className="fade-up w-14 h-px bg-gold mb-4 [animation-delay:0.45s]" />

        <p className="fade-up font-body text-cream/80 text-sm md:text-base lg:text-lg font-light leading-relaxed max-w-[280px] md:max-w-sm mb-8 [animation-delay:0.6s]">
          Fragrâncias que contam a sua história
        </p>

        <div className="fade-up flex flex-col sm:flex-row gap-3 w-full sm:w-auto [animation-delay:0.8s]">
          <Link
            to="/catalogo"
            className="bg-gold hover:bg-gold-light text-dark font-body font-medium text-xs tracking-[0.15em] uppercase px-8 py-3.5 transition-all duration-300 hover:scale-105 w-full sm:w-auto text-center"
          >
            Explorar Coleção
          </Link>
          <a
            href="https://wa.me/message/XRY3ZML54HGNE1"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-gold/70 hover:border-gold text-gold hover:bg-gold/10 font-body font-medium text-xs tracking-[0.15em] uppercase px-8 py-3.5 transition-all duration-300 w-full sm:w-auto text-center flex items-center justify-center gap-2"
          >
            <MessageCircle className="h-4 w-4" />
            Fale no WhatsApp
          </a>
        </div>
      </div>

      <a
        href="#destaques"
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2 animate-bounce text-gold"
        aria-label="Rolar para destaques"
      >
        <ChevronDown className="h-7 w-7" />
      </a>
    </section>
  )
}
