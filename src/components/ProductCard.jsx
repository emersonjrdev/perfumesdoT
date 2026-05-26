import { Link } from 'react-router-dom'
import { Star, ShoppingBag } from 'lucide-react'
import { useCart } from '../context/CartContext'

const badgeStyles = {
  'Mais Vendido': 'bg-gold/20 text-gold border-gold/40',
  Novo: 'bg-emerald-900/50 text-emerald-400 border-emerald-600/40',
  Exclusivo: 'bg-purple-900/50 text-purple-300 border-purple-600/40',
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
  const { addItem } = useCart()

  const handleAdd = (e) => {
    e.preventDefault()
    e.stopPropagation()
    addItem(product)
  }

  return (
    <article
      className="group flex flex-col overflow-hidden rounded-lg border border-dark-border bg-dark-card transition-all duration-300 hover:border-gold/40"
      style={style}
    >
      <Link to={`/produto/${product.id}`} className="relative block overflow-hidden">
        {product.badge && (
          <span
            className={`absolute left-3 top-3 z-10 rounded border px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wider ${
              badgeStyles[product.badge]
            }`}
          >
            {product.badge}
          </span>
        )}
        <div className="aspect-[3/4] overflow-hidden bg-[#1a1a1a]">
          <img
            src={product.image}
            alt={`${product.name} — ${product.brand}`}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
            loading="lazy"
          />
        </div>
      </Link>

      <div className="flex flex-1 flex-col p-4">
        <Link to={`/produto/${product.id}`}>
          <h3 className="font-display text-lg font-semibold text-cream transition-colors group-hover:text-gold">
            {product.name}
          </h3>
          <p className="mt-0.5 font-body text-xs uppercase tracking-widest text-cream/50">
            {product.brand}
          </p>
        </Link>

        <div className="mt-2 flex items-center gap-2">
          <Stars rating={product.rating} />
          <span className="font-body text-xs text-cream/50">
            ({product.reviews.toLocaleString('pt-BR')})
          </span>
        </div>

        <div className="mt-3 flex items-baseline gap-2">
          <span className="font-body text-sm text-cream/40 line-through">
            {formatPrice(product.originalPrice)}
          </span>
          <span className="font-display text-xl font-semibold text-gold">
            {formatPrice(product.price)}
          </span>
        </div>

        <button
          type="button"
          onClick={handleAdd}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded border border-gold/50 bg-transparent py-2.5 font-body text-sm font-medium text-gold transition-all hover:bg-gold hover:text-dark"
        >
          <ShoppingBag className="h-4 w-4" />
          Adicionar ao Carrinho
        </button>
      </div>
    </article>
  )
}
