import { useParams, Link } from 'react-router-dom'
import {
  Star,
  ShoppingBag,
  Leaf,
  Heart,
  Mountain,
} from 'lucide-react'
import { getProductById, getRelatedProducts } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'

const badgeStyles = {
  'Mais Vendido': 'bg-gold/20 text-gold border-gold/40',
  Novo: 'bg-emerald-900/50 text-emerald-400 border-emerald-600/40',
  Exclusivo: 'bg-purple-900/50 text-purple-300 border-purple-600/40',
}

function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()

  if (!product) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center">
        <p className="font-body text-lg text-cream/60">Produto não encontrado.</p>
        <Link to="/catalogo" className="mt-4 inline-block font-body text-gold underline">
          Voltar ao catálogo
        </Link>
      </div>
    )
  }

  const related = getRelatedProducts(product.id, product.category)

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
        <div className="overflow-hidden rounded-lg border-2 border-gold/30 bg-dark-card">
          <img
            src={product.image}
            alt={`${product.name} — ${product.brand}`}
            className="aspect-square w-full object-cover"
          />
        </div>

        <div>
          {product.badge && (
            <span
              className={`inline-block rounded border px-3 py-1 text-xs font-semibold uppercase tracking-wider ${
                badgeStyles[product.badge]
              }`}
            >
              {product.badge}
            </span>
          )}

          <p className="mt-3 font-body text-sm uppercase tracking-[0.2em] text-cream/50">
            {product.brand}
          </p>
          <h1 className="mt-1 font-display text-4xl font-bold text-cream md:text-5xl">
            {product.name}
          </h1>

          <div className="mt-4 flex items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`h-4 w-4 ${
                    star <= Math.round(product.rating)
                      ? 'fill-gold text-gold'
                      : 'fill-none text-cream/20'
                  }`}
                />
              ))}
            </div>
            <span className="font-body text-sm text-cream/60">
              {product.rating} ({product.reviews.toLocaleString('pt-BR')} avaliações)
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded border border-dark-border bg-[#1a1a1a] px-3 py-1 font-body text-xs text-cream/80">
              {product.concentration}
            </span>
            <span className="rounded border border-dark-border bg-[#1a1a1a] px-3 py-1 font-body text-xs text-cream/80">
              {product.size}
            </span>
            <span className="rounded border border-dark-border bg-[#1a1a1a] px-3 py-1 font-body text-xs capitalize text-cream/80">
              {product.category}
            </span>
          </div>

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-body text-lg text-cream/40 line-through">
              {formatPrice(product.originalPrice)}
            </span>
            <span className="font-display text-4xl font-semibold text-gold">
              {formatPrice(product.price)}
            </span>
          </div>

          <div className="mt-8 grid grid-cols-3 gap-4">
            <div className="rounded-lg border border-dark-border bg-dark-card p-4 text-center">
              <Leaf className="mx-auto h-5 w-5 text-gold" />
              <p className="mt-2 font-display text-xs font-semibold text-gold">Topo</p>
              <ul className="mt-2 space-y-1">
                {product.notes.top.map((note) => (
                  <li key={note} className="font-body text-[11px] text-cream/60">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-dark-border bg-dark-card p-4 text-center">
              <Heart className="mx-auto h-5 w-5 text-gold" />
              <p className="mt-2 font-display text-xs font-semibold text-gold">Coração</p>
              <ul className="mt-2 space-y-1">
                {product.notes.heart.map((note) => (
                  <li key={note} className="font-body text-[11px] text-cream/60">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-lg border border-dark-border bg-dark-card p-4 text-center">
              <Mountain className="mx-auto h-5 w-5 text-gold" />
              <p className="mt-2 font-display text-xs font-semibold text-gold">Base</p>
              <ul className="mt-2 space-y-1">
                {product.notes.base.map((note) => (
                  <li key={note} className="font-body text-[11px] text-cream/60">
                    {note}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 font-body text-base font-light leading-relaxed text-cream/80">
            {product.description}
          </p>

          <button
            type="button"
            onClick={() => addItem(product)}
            className="mt-8 flex w-full items-center justify-center gap-2 rounded bg-gold py-4 font-body text-sm font-semibold uppercase tracking-wider text-dark transition-colors hover:bg-gold-light md:w-auto md:px-12"
          >
            <ShoppingBag className="h-5 w-5" />
            Adicionar ao Carrinho
          </button>
        </div>
      </div>

      {related.length > 0 && (
        <section className="mt-20 border-t border-dark-border pt-16">
          <h2 className="font-display text-2xl font-semibold text-cream">
            Você também pode gostar
          </h2>
          <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {related.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </section>
      )}
    </div>
  )
}
