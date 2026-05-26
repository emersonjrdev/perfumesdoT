import { Link } from 'react-router-dom'
import { X, Plus, Minus, Trash2, MessageCircle } from 'lucide-react'
import { useCart } from '../context/CartContext'
import { buildCartWhatsAppLink } from '../utils/whatsapp'

const FALLBACK_PRODUCT_IMAGE =
  'https://images.unsplash.com/photo-1541643600914-78b084683702?q=80&w=600&auto=format&fit=crop'

function formatPrice(value) {
  return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })
}

export default function CartDrawer({ open, onClose }) {
  const { items, removeItem, updateQuantity, totalPrice, isCartOpen, closeCart } =
    useCart()
  const isOpen = typeof open === 'boolean' ? open : isCartOpen
  const handleClose = onClose || closeCart

  return (
    <div
      className={`fixed inset-0 z-50 ${isOpen ? '' : 'pointer-events-none'}`}
      aria-hidden={!isOpen}
    >
      <div
        className={`absolute inset-0 bg-black/70 transition-opacity ${
          isOpen ? 'opacity-100' : 'opacity-0'
        }`}
        onClick={handleClose}
        aria-hidden="true"
      />

      <aside
        className={`absolute right-0 top-0 flex h-full w-full sm:w-96 flex-col border-l border-dark-border bg-[#111] shadow-2xl transition-transform duration-300 ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        role="dialog"
        aria-label="Carrinho de compras"
      >
        <div className="flex items-center justify-between border-b border-dark-border p-4 sm:p-6">
          <h2 className="font-display text-lg font-semibold text-gold">
            Seu Carrinho
          </h2>
          <button
            type="button"
            onClick={handleClose}
            className="rounded p-1 text-cream hover:text-gold"
            aria-label="Fechar carrinho"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto p-4 sm:p-6">
          {items.length === 0 ? (
            <p className="py-8 text-center font-body text-sm text-cream/50">
              Seu carrinho está vazio.
            </p>
          ) : (
            <ul className="space-y-4">
              {items.map((item) => (
                <li
                  key={item.id}
                  className="flex gap-3 border-b border-dark-border pb-4"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-20 w-16 rounded object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.currentTarget.src = FALLBACK_PRODUCT_IMAGE
                    }}
                  />
                  <div className="flex flex-1 flex-col">
                    <p className="font-display text-sm font-semibold text-cream">
                      {item.name}
                    </p>
                    <p className="font-body text-xs text-cream/50">
                      {item.concentration} · {item.size}
                    </p>
                    <div className="mt-2 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity - 1)
                          }
                          className="rounded border border-dark-border p-1 text-cream hover:border-gold"
                          aria-label="Diminuir quantidade"
                        >
                          <Minus className="h-3 w-3" />
                        </button>
                        <span className="font-body text-sm text-cream">
                          {item.quantity}
                        </span>
                        <button
                          type="button"
                          onClick={() =>
                            updateQuantity(item.id, item.quantity + 1)
                          }
                          className="rounded border border-dark-border p-1 text-cream hover:border-gold"
                          aria-label="Aumentar quantidade"
                        >
                          <Plus className="h-3 w-3" />
                        </button>
                      </div>
                      <span className="font-body text-sm font-semibold text-gold">
                        {formatPrice(item.price * item.quantity)}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={() => removeItem(item.id)}
                      className="mt-2 flex items-center gap-1 font-body text-xs text-red-400 hover:text-red-300"
                    >
                      <Trash2 className="h-3 w-3" />
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t border-dark-border p-4 sm:p-6">
            <div className="mb-4 flex justify-between font-body text-sm">
              <span className="text-cream/70">Subtotal</span>
              <span className="font-display text-lg font-semibold text-gold">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <a
              href={buildCartWhatsAppLink(items)}
              target="_blank"
              rel="noopener noreferrer"
              className="mb-2 inline-flex w-full items-center justify-center gap-2 rounded bg-gold py-3 font-body text-sm font-semibold uppercase tracking-wider text-dark transition-colors hover:bg-gold-light"
            >
              <MessageCircle className="h-4 w-4" />
              Pedir via WhatsApp
            </a>
            <p className="mb-3 text-center text-xs text-cream/45">
              Você será redirecionado para o WhatsApp
            </p>
            <button
              type="button"
              onClick={handleClose}
              className="w-full rounded border border-dark-border py-2.5 font-body text-sm text-cream/70 transition-colors hover:border-gold hover:text-gold"
            >
              Continuar Comprando
            </button>
            <Link
              to="/carrinho"
              onClick={handleClose}
              className="mt-3 block text-center font-body text-xs text-gold underline"
            >
              Ver carrinho completo
            </Link>
          </div>
        )}
      </aside>
    </div>
  )
}
