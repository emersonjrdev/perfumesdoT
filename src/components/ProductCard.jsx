import { Link, useNavigate } from 'react-router-dom'
import { Star, MessageCircle } from 'lucide-react'
import { buildWhatsAppLink } from '../utils/whatsapp'

const FALLBACK_PRODUCT_IMAGE =
  'https://images.unsplash.com/photo-1541643600914-78b084683702?q=80&w=600&auto=format&fit=crop'

const badgeStyles = {
  'Mais Vendido': 'bg-gold text-dark',
  Novo: 'bg-emerald-950 text-emerald-300',
  Exclusivo: 'bg-purple-950 text-purple-300',
}

function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

function Stars({ rating }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`h-3.5 w-3.5 ${
            star <= Math.round(rating)
              ? 'fill-gold text-gold'
              : 'fill-none text-cream/20'
          }`}
        />
      ))}
    </div>
  )
}

export default function ProductCard({ product, style }) {
  const nav = useNavigate()
  const discount = Math.max(
    0,
    Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100),
  )

  return (
    <article
      className="group flex flex-col overflow-hidden rounded-xl border border-dark-border bg-dark-card transition-all duration-300 hover:border-gold hover:shadow-[0_8px_40px_rgba(201,162,86,0.15)]"
      style={style}
    >
      <div
        className="relative block cursor-pointer overflow-hidden"
        role="button"
        tabIndex={0}
        onClick={() => nav(`/produto/${product.id}`)}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') nav(`/produto/${product.id}`)
        }}
        aria-label={`Ver detalhes de ${product.name}`}
      >
        {product.badge && (
          <span
            className={`absolute left-3 top-3 z-10 rounded px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider ${
              badgeStyles[product.badge]
            }`}
          >
            {product.badge}
          </span>
        )}
        <div className="relative h-48 overflow-hidden bg-[#121212] sm:h-64">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.08]"
            loading="lazy"
            onError={(e) => {
              e.currentTarget.src = FALLBACK_PRODUCT_IMAGE
            }}
          />
          <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/85 to-transparent" />
        </div>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="font-body text-[11px] uppercase tracking-[0.18em] text-gold/80">
          {product.brand}
        </p>
        <h3
          className="cursor-pointer font-display text-sm font-semibold text-cream transition-colors group-hover:text-gold sm:text-base"
          onClick={() => nav(`/produto/${product.id}`)}
        >
          {product.name}
        </h3>

        <div className="mt-3 flex gap-2">
          <span className="rounded-full border border-dark-border bg-dark-hover px-2.5 py-1 text-[10px] uppercase tracking-wider text-cream/60">
            {product.concentration}
          </span>
          <span className="rounded-full border border-dark-border bg-dark-hover px-2.5 py-1 text-[10px] uppercase tracking-wider text-cream/60">
            {product.size}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <Stars rating={product.rating} />
          <span className="font-body text-xs text-cream/50">
            ({product.reviews.toLocaleString('pt-BR')})
          </span>
        </div>

        <div className="mt-3 h-px w-full bg-gradient-to-r from-transparent via-gold/60 to-transparent" />

        <div className="mt-3 flex items-center justify-between gap-2">
          <span className="font-body text-sm text-cream/40 line-through">
            {formatPrice(product.originalPrice)}
          </span>
          {discount > 0 && (
            <span className="rounded-full bg-red-700/80 px-2 py-0.5 text-[10px] font-semibold text-white">
              -{discount}%
            </span>
          )}
        </div>
        <div className="mt-1 flex items-baseline gap-2">
          <span className="font-display text-[22px] font-semibold text-gold">
            {formatPrice(product.price)}
          </span>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-2 opacity-100 translate-y-0 md:translate-y-2 md:opacity-0 md:transition-all md:duration-300 md:group-hover:translate-y-0 md:group-hover:opacity-100">
          <Link
            to={`/produto/${product.id}`}
            className="inline-flex items-center justify-center rounded border border-gold/50 py-2 text-center text-xs font-medium uppercase tracking-wider text-gold hover:bg-gold/10"
          >
            Ver Detalhes
          </Link>
          <a
            href={buildWhatsAppLink(product)}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-1 rounded bg-gold py-2 text-xs font-semibold uppercase tracking-wider text-dark hover:bg-gold-light"
          >
            <MessageCircle className="h-3.5 w-3.5" />
            Pedir no WhatsApp
          </a>
        </div>
      </div>
    </article>
  )
}
