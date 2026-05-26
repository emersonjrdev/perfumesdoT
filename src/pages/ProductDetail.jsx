import { useMemo, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { Star, ShoppingBag, MessageCircle } from 'lucide-react'
import { getProductById, getRelatedProducts } from '../data/products'
import { useCart } from '../context/CartContext'
import ProductCard from '../components/ProductCard'
import { buildWhatsAppLink } from '../utils/whatsapp'

function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export default function ProductDetail() {
  const { id } = useParams()
  const product = getProductById(id)
  const { addItem } = useCart()
  const [activeImage, setActiveImage] = useState(0)

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
  const gallery = useMemo(
    () => [
      `${product.image}&sat=-10`,
      `${product.image}&q=90&crop=entropy`,
      `${product.image}&blur=20`,
    ],
    [product.image],
  )

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
      <nav className="mb-8 font-body text-sm text-cream/60">
        <Link to="/" className="text-gold hover:text-gold-light">
          Home
        </Link>{' '}
        &gt;{' '}
        <Link to="/catalogo" className="text-gold hover:text-gold-light">
          Catálogo
        </Link>{' '}
        &gt; <span className="text-cream">{product.name}</span>
      </nav>

      <div className="grid gap-10 lg:grid-cols-[55%_45%] lg:gap-16">
        <div>
          <div className="overflow-hidden rounded-xl border border-gold/40 bg-dark-card shadow-[0_8px_34px_rgba(201,162,86,0.2)]">
            <img
              src={gallery[activeImage]}
              alt={`${product.name} — ${product.brand}`}
              className="aspect-square w-full object-cover"
            />
          </div>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {gallery.map((src, index) => (
              <button
                key={src}
                type="button"
                onClick={() => setActiveImage(index)}
                className={`overflow-hidden rounded-lg border ${
                  activeImage === index ? 'border-gold' : 'border-dark-border'
                }`}
              >
                <img
                  src={src}
                  alt={`Miniatura ${index + 1} de ${product.name}`}
                  className="h-24 w-full object-cover"
                />
              </button>
            ))}
          </div>
        </div>

        <div>
          <p className="font-body text-xs uppercase tracking-[0.24em] text-gold">
            {product.brand}
          </p>
          <h1 className="mt-2 font-logo text-4xl leading-tight text-cream md:text-5xl">
            {product.name}
          </h1>

          <div className="mt-4 flex flex-wrap items-center gap-3">
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
            <span className="rounded-full bg-emerald-900/60 px-2.5 py-1 text-xs text-emerald-300">
              Em estoque
            </span>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            <span className="rounded-full border border-dark-border bg-dark-hover px-3 py-1 font-body text-xs uppercase tracking-wider text-cream/80">
              {product.concentration}
            </span>
            <span className="rounded-full border border-dark-border bg-dark-hover px-3 py-1 font-body text-xs uppercase tracking-wider text-cream/80">
              {product.size}
            </span>
            <span className="rounded-full border border-dark-border bg-dark-hover px-3 py-1 font-body text-xs uppercase tracking-wider text-cream/80">
              {product.category}
            </span>
          </div>

          <div className="mt-6 h-px w-full bg-gradient-to-r from-gold/20 via-gold to-gold/20" />

          <div className="mt-6 flex items-baseline gap-3">
            <span className="font-body text-lg text-cream/40 line-through">
              {formatPrice(product.originalPrice)}
            </span>
            <span className="font-display text-4xl font-semibold text-gold md:text-[36px]">
              {formatPrice(product.price)}
            </span>
          </div>
          <p className="mt-1 text-xs text-cream/45">Parcele em ate 12x sem juros.</p>

          <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3">
            <div className="rounded-xl border border-dark-border bg-dark-card p-4">
              <p className="text-lg">🌿</p>
              <p className="mt-1 text-sm font-semibold text-gold">Notas de Topo</p>
              <ul className="mt-2 space-y-1 text-xs text-cream/65">
                {product.notes.top.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-dark-border bg-dark-card p-4">
              <p className="text-lg">💐</p>
              <p className="mt-1 text-sm font-semibold text-gold">Notas de Coração</p>
              <ul className="mt-2 space-y-1 text-xs text-cream/65">
                {product.notes.heart.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
            <div className="rounded-xl border border-dark-border bg-dark-card p-4">
              <p className="text-lg">🌳</p>
              <p className="mt-1 text-sm font-semibold text-gold">Notas de Base</p>
              <ul className="mt-2 space-y-1 text-xs text-cream/65">
                {product.notes.base.map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </div>
          </div>

          <p className="mt-8 font-body text-base font-light leading-relaxed text-cream/80">
            {product.description}
          </p>

          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            <button
              type="button"
              onClick={() => addItem(product)}
              className="inline-flex items-center justify-center gap-2 rounded border border-gold bg-transparent py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-gold transition-colors hover:bg-gold/10"
            >
              <ShoppingBag className="h-5 w-5" />
              Adicionar ao Carrinho
            </button>
            <a
              href={buildWhatsAppLink(product)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 rounded bg-gold py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-dark transition-colors hover:bg-gold-light"
            >
              <MessageCircle className="h-5 w-5" />
              Comprar via WhatsApp
            </a>
          </div>
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
