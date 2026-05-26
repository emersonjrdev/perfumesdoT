import { Link } from 'react-router-dom'
import InstagramIcon from './InstagramIcon'

const particles = Array.from({ length: 24 }, (_, i) => ({
  id: i,
  left: `${(i * 17 + 5) % 95}%`,
  top: `${(i * 23 + 10) % 85}%`,
  delay: `${(i % 8) * 0.4}s`,
  size: i % 3 === 0 ? '6px' : '4px',
}))

export default function HeroSection() {
  return (
    <section className="relative flex min-h-[85vh] items-center overflow-hidden">
      <div
        className="absolute inset-0 bg-gradient-to-br from-dark via-[#0f0d0a] to-dark"
        aria-hidden="true"
      />
      <div
        className="absolute inset-0 bg-gradient-to-tr from-gold/10 via-transparent to-gold/5"
        aria-hidden="true"
      />

      {particles.map((p) => (
        <span
          key={p.id}
          className="sparkle-particle animate-sparkle"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
          }}
          aria-hidden="true"
        />
      ))}

      <div className="relative z-10 mx-auto max-w-7xl px-4 py-20 text-center md:px-6 md:text-left">
        <p className="font-body text-sm font-light uppercase tracking-[0.3em] text-gold">
          Perfumes do T
        </p>
        <h1 className="mt-4 font-display text-4xl font-bold leading-tight text-cream sm:text-5xl md:text-6xl lg:text-7xl">
          A Arte de Sentir
        </h1>
        <p className="mx-auto mt-6 max-w-xl font-body text-lg font-light text-cream/70 md:mx-0 md:text-xl">
          Descubra fragrâncias que contam a sua história
        </p>

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
          <Link
            to="/catalogo"
            className="inline-flex min-w-[200px] items-center justify-center rounded bg-gold px-8 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-dark transition-all hover:bg-gold-light"
          >
            Ver Catálogo
          </Link>
          <a
            href="https://www.instagram.com/perfumes_do_t/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded border border-gold/60 px-8 py-3.5 font-body text-sm font-medium uppercase tracking-wider text-gold transition-all hover:border-gold hover:bg-gold/10"
          >
            <InstagramIcon className="h-4 w-4" />
            Fale Conosco
          </a>
        </div>
      </div>
    </section>
  )
}
