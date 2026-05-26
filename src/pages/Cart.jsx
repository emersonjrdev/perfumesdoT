import { Link } from 'react-router-dom'
import { Plus, Minus, Trash2 } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { buildCartWhatsAppLink } from '../utils/whatsapp'

const FREE_SHIPPING_THRESHOLD = 299
const SHIPPING_COST = 19.9

const FALLBACK_PRODUCT_IMAGE =
  'https://images.unsplash.com/photo-1541643600914-78b084683702?q=80&w=600&auto=format&fit=crop'

function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export default function Cart() {
  const { items, removeItem, updateQuantity, totalPrice, clearCart } = useCart()

  const shipping =
    totalPrice >= FREE_SHIPPING_THRESHOLD || items.length === 0 ? 0 : SHIPPING_COST
  const total = totalPrice + shipping

  if (items.length === 0) {
    return (
      <div className="mx-auto max-w-7xl px-4 py-20 text-center md:px-6">
        <h1 className="font-display text-3xl font-semibold text-cream">Carrinho</h1>
        <p className="mt-4 font-body text-cream/60">Seu carrinho está vazio.</p>
        <Link
          to="/catalogo"
          className="mt-8 inline-flex rounded bg-gold px-8 py-3 font-body text-sm font-semibold uppercase tracking-wider text-dark hover:bg-gold-light"
        >
          Voltar ao Catálogo
        </Link>
      </div>
    )
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
      <h1 className="font-display text-3xl font-semibold text-cream md:text-4xl">
        Carrinho
      </h1>

      <div className="mt-10 grid gap-10 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <ul className="space-y-4">
            {items.map((item) => (
              <li
                key={item.id}
                className="flex gap-4 rounded-lg border border-dark-border bg-dark-card p-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-28 w-24 rounded object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = FALLBACK_PRODUCT_IMAGE
                  }}
                />
                <div className="flex flex-1 flex-col justify-between">
                  <div>
                    <p className="font-body text-xs uppercase tracking-wider text-cream/50">
                      {item.brand}
                    </p>
                    <p className="font-display text-lg font-semibold text-cream">
                      {item.name}
                    </p>
                    <p className="font-body text-xs text-cream/50">
                      {item.concentration} · {item.size}
                    </p>
                  </div>
                  <div className="mt-3 flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity - 1)}
                        className="rounded border border-dark-border p-1.5 text-cream hover:border-gold"
                        aria-label="Diminuir quantidade"
                      >
                        <Minus className="h-4 w-4" />
                      </button>
                      <span className="w-8 text-center font-body text-sm">
                        {item.quantity}
                      </span>
                      <button
                        type="button"
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="rounded border border-dark-border p-1.5 text-cream hover:border-gold"
                        aria-label="Aumentar quantidade"
                      >
                        <Plus className="h-4 w-4" />
                      </button>
                    </div>
                    <span className="font-display text-lg text-gold">
                      {formatPrice(item.price * item.quantity)}
                    </span>
                  </div>
                  <button
                    type="button"
                    onClick={() => removeItem(item.id)}
                    className="mt-2 flex items-center gap-1 self-start font-body text-xs text-red-400 hover:text-red-300"
                  >
                    <Trash2 className="h-3 w-3" />
                    Remover
                  </button>
                </div>
              </li>
            ))}
          </ul>

          <button
            type="button"
            onClick={clearCart}
            className="mt-4 font-body text-xs text-cream/40 underline hover:text-cream/60"
          >
            Limpar carrinho
          </button>
        </div>

        <aside className="h-fit rounded-lg border border-dark-border bg-dark-card p-6">
          <h2 className="font-display text-lg font-semibold text-gold">Resumo</h2>

          <dl className="mt-6 space-y-3 font-body text-sm">
            <div className="flex justify-between text-cream/70">
              <dt>Subtotal</dt>
              <dd>{formatPrice(totalPrice)}</dd>
            </div>
            <div className="flex justify-between text-cream/70">
              <dt>Frete</dt>
              <dd>
                {shipping === 0 ? (
                  <span className="text-emerald-400">Grátis</span>
                ) : (
                  formatPrice(shipping)
                )}
              </dd>
            </div>
            {totalPrice < FREE_SHIPPING_THRESHOLD && (
              <p className="text-xs text-cream/40">
                Frete grátis em compras acima de{' '}
                {formatPrice(FREE_SHIPPING_THRESHOLD)}
              </p>
            )}
            <div className="flex justify-between border-t border-dark-border pt-3">
              <dt className="font-semibold text-cream">Total</dt>
              <dd className="font-display text-xl font-semibold text-gold">
                {formatPrice(total)}
              </dd>
            </div>
          </dl>

          <a
            href={buildCartWhatsAppLink(items)}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex w-full items-center justify-center rounded bg-gold py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-dark transition-colors hover:bg-gold-light"
          >
            Finalizar pedido via WhatsApp
          </a>

          <Link
            to="/catalogo"
            className="mt-4 block w-full rounded border border-dark-border py-2.5 text-center font-body text-sm text-cream/70 transition-colors hover:border-gold hover:text-gold"
          >
            Voltar ao Catálogo
          </Link>
        </aside>
      </div>
    </div>
  )
}
