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
      <img
        src="https://images.unsplash.com/photo-1592945403407-9caf930a8d6d?w=1400"
        alt="Frascos de perfumes premium"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/65 to-black/40"
        aria-hidden="true"
      />

      {particles.map((p) => (
        <span
          key={p.id}
          className="sparkle-particle animate-float"
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

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-24 text-center md:px-6 md:text-left">
        <span className="fade-up inline-flex rounded-full border border-gold/50 px-5 py-2 font-body text-xs font-medium uppercase tracking-[0.25em] text-gold [animation-delay:0.1s]">
          ✦ Coleção 2025 ✦
        </span>
        <div className="fade-up mt-7 h-px w-20 bg-gradient-to-r from-gold/20 via-gold to-gold/20 md:mx-0 mx-auto [animation-delay:0.2s]" />
        <h1 className="fade-up mt-5 font-logo text-[44px] leading-tight text-cream md:text-[80px] [animation-delay:0.4s]">
          A Arte de Sentir
        </h1>
        <p className="fade-up mx-auto mt-6 max-w-xl font-body text-lg font-light text-cream/80 md:mx-0 md:text-2xl [animation-delay:0.6s]">
          Fragrâncias que contam a sua história
        </p>

        <div className="fade-up mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start [animation-delay:0.8s]">
          <Link
            to="/catalogo"
            className="inline-flex min-w-[210px] items-center justify-center rounded bg-gold px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-dark transition-all hover:scale-[1.04] hover:bg-gold-light hover:shadow-[0_0_30px_rgba(201,162,86,0.45)]"
          >
            Explorar Coleção
          </Link>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[210px] items-center justify-center gap-2 rounded border border-gold/60 px-8 py-3.5 font-body text-sm font-medium uppercase tracking-wider text-gold transition-all hover:bg-gold hover:text-dark"
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
