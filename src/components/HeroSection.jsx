import { useEffect, useState } from 'react'
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
  const [bannerSrc, setBannerSrc] = useState('/banner.jpg')
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const media = window.matchMedia('(max-width: 767px)')
    const update = () => setIsMobile(media.matches)
    update()
    media.addEventListener('change', update)
    return () => media.removeEventListener('change', update)
  }, [])

  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Fundo do banner local */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url('${bannerSrc}')`,
          backgroundSize: 'cover',
          backgroundPosition: isMobile ? '75% center' : '60% top',
          backgroundRepeat: 'no-repeat',
        }}
        aria-hidden="true"
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 25%, transparent 60%), linear-gradient(to left, rgba(0,0,0,0.7) 0%, transparent 20%)',
        }}
        aria-hidden="true"
      />

      {/* Pré-carrega e alterna jpg/png automaticamente */}
      <img
        src={bannerSrc}
        alt="Banner Perfumes do T"
        loading="eager"
        width="1400"
        height="900"
        className="absolute inset-0 h-full w-full object-cover opacity-0"
        onError={(e) => {
          if (bannerSrc.endsWith('.jpg')) {
            setBannerSrc('/banner.png')
            return
          }
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

      <div className="absolute left-0 top-1/2 z-10 w-full -translate-y-1/2 px-6 md:px-0">
        <div className="max-w-full md:pl-[8%] md:max-w-[45%]">
          <span className="fade-up inline-flex rounded-full border border-gold/80 bg-transparent px-4 py-2 font-display text-[13px] uppercase tracking-[0.24em] text-gold [animation-delay:0.1s]">
            ✦ COLEÇÃO 2025 ✦
          </span>
          <h1 className="fade-up mt-6 leading-none text-white [animation-delay:0.3s]">
            <span className="block font-display text-[clamp(2rem,8vw,3rem)]">
              A Arte de
            </span>
            <span className="block font-logo text-[clamp(2.5rem,6vw,5.5rem)] font-bold">
              Sentir
            </span>
          </h1>
          <hr className="fade-up mt-6 w-[60px] border-0 border-t border-gold [animation-delay:0.45s]" />
          <p className="fade-up mt-6 max-w-xl font-body text-[1.1rem] font-light text-cream [animation-delay:0.6s]">
            Fragrâncias que contam a sua história
          </p>

          <div className="fade-up mt-8 flex w-full flex-col gap-4 sm:flex-row [animation-delay:0.8s]">
            <Link
              to="/catalogo"
              className="inline-flex w-full items-center justify-center rounded-sm bg-gold px-6 py-3 font-body text-sm font-medium uppercase tracking-wider text-black transition-transform duration-300 hover:scale-[1.04] sm:w-auto"
            >
              Explorar Coleção
            </Link>
            <a
              href="https://wa.me/message/XRY3ZML54HGNE1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex w-full items-center justify-center gap-2 rounded-sm border border-gold px-6 py-3 font-body text-sm font-medium uppercase tracking-wider text-gold transition-transform duration-300 hover:scale-[1.04] sm:w-auto"
            >
              <MessageCircle className="h-4 w-4" />
              Fale no WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className="sr-only">
        <p>
          Fragrâncias que contam a sua história
        </p>
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
