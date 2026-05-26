import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { Sparkles, ShoppingBag, Menu, X } from 'lucide-react'
import InstagramIcon from './InstagramIcon'
import { useCart } from '../context/CartContext'
import { SITE_LOGO_SRC } from '../constants/branding'

function Logo({ className = '' }) {
  const [imgError, setImgError] = useState(false)

  if (!imgError) {
    return (
      <img
        src={SITE_LOGO_SRC}
        alt="Perfumes do T"
        className={`h-10 w-auto object-contain ${className}`}
        onError={() => setImgError(true)}
      />
    )
  }

  return (
    <span
      className={`font-display text-lg font-bold tracking-widest text-gold md:text-xl ${className}`}
    >
      PERFUMES DO T
    </span>
  )
}

export default function Navbar({ onOpenCart }) {
  const { totalCount } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)

  const navLinkClass = ({ isActive }) =>
    `font-body text-sm font-medium tracking-wide transition-colors hover:text-gold ${
      isActive ? 'text-gold' : 'text-cream/80'
    }`

  const links = [
    { to: '/', label: 'Home' },
    { to: '/catalogo', label: 'Catálogo' },
    { to: '/#sobre', label: 'Sobre' },
    { to: '/#contato', label: 'Contato' },
  ]

  return (
    <>
      <header className="sticky top-0 z-40 border-b border-dark-border/60 bg-dark/95 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <Link
            to="/"
            className="flex items-center gap-2"
            onClick={() => setMenuOpen(false)}
          >
            <Sparkles className="h-5 w-5 text-gold" aria-hidden="true" />
            <Logo />
          </Link>

          <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
            {links.map((link) => (
              <NavLink key={link.to} to={link.to} className={navLinkClass}>
                {link.label}
              </NavLink>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href="https://www.instagram.com/perfumes_do_t/"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden text-cream/70 transition-colors hover:text-gold sm:block"
              aria-label="Instagram Perfumes do T"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>

            <button
              type="button"
              onClick={onOpenCart}
              className="relative rounded-full p-2 text-cream transition-colors hover:text-gold"
              aria-label={`Abrir carrinho, ${totalCount} itens`}
            >
              <ShoppingBag className="h-5 w-5" />
              {totalCount > 0 && (
                <span className="absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-semibold text-white">
                  {totalCount > 9 ? '9+' : totalCount}
                </span>
              )}
            </button>

            <button
              type="button"
              className="rounded-lg p-2 text-cream md:hidden"
              onClick={() => setMenuOpen(true)}
              aria-label="Abrir menu"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      <div
        className={`fixed inset-0 z-50 md:hidden ${menuOpen ? '' : 'pointer-events-none'}`}
        aria-hidden={!menuOpen}
      >
        <div
          className={`absolute inset-0 bg-black/70 transition-opacity ${
            menuOpen ? 'opacity-100' : 'opacity-0'
          }`}
          onClick={() => setMenuOpen(false)}
        />
        <aside
          className={`absolute left-0 top-0 flex h-full w-72 flex-col border-r border-dark-border bg-[#1a1a1a] p-6 transition-transform ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <Logo />
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              aria-label="Fechar menu"
              className="text-cream"
            >
              <X className="h-6 w-6" />
            </button>
          </div>

          <nav className="flex flex-col gap-4" aria-label="Mobile">
            {links.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={navLinkClass}
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </NavLink>
            ))}
          </nav>

          <a
            href="https://www.instagram.com/perfumes_do_t/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 flex items-center gap-2 text-sm text-cream/70 hover:text-gold"
          >
            <InstagramIcon className="h-5 w-5" />
            @perfumes_do_t
          </a>
        </aside>
      </div>
    </>
  )
}
