import { useEffect, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { ShoppingBag, Menu, X } from 'lucide-react'
import InstagramIcon from './InstagramIcon'
import { useCart } from '../context/CartContext'
import { SITE_LOGO_SRC } from '../constants/branding'

function SprayIcon() {
  return (
    <svg viewBox="0 0 28 28" className="h-7 w-7 text-gold" aria-hidden="true">
      <path
        d="M8 10h8a2 2 0 0 1 2 2v10H6V12a2 2 0 0 1 2-2z"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
      />
      <path
        d="M10 8h8m-1-2h4M20 6v4m3-1h1m-1 3h1m-2-5h1"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
      />
    </svg>
  )
}

function Logo({ className = '', mobile = false }) {
  const [imgError, setImgError] = useState(false)

  if (!imgError) {
    return (
      <img
        src={SITE_LOGO_SRC}
        alt="Perfumes do T"
        className={`${mobile ? 'h-9' : 'h-10'} w-auto object-contain ${className}`}
        onError={() => setImgError(true)}
      />
    )
  }

  return (
    <span
      className={`font-logo text-lg tracking-[0.18em] text-gold sm:text-2xl md:text-xl ${className}`}
    >
      PERFUMES DO T
    </span>
  )
}

export default function Navbar({ onOpenCart }) {
  const { totalCount, openCart } = useCart()
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 28)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinkClass = ({ isActive }) =>
    `relative py-1 font-body text-sm font-medium tracking-[0.16em] uppercase transition-colors after:absolute after:bottom-0 after:left-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-gold after:transition-transform hover:text-gold hover:after:scale-x-100 ${
      isActive ? 'text-gold after:scale-x-100' : 'text-cream/80'
    }`

  const links = [
    { to: '/', label: 'Home' },
    { to: '/catalogo', label: 'Catálogo' },
    { to: '/sobre', label: 'Sobre' },
    { to: '/contato', label: 'Contato' },
  ]

  return (
    <>
      <header
        className={`sticky top-0 z-[60] border-b border-gold/30 transition-all duration-500 ${
          scrolled
            ? 'bg-[rgba(6,6,6,0.92)] shadow-[0_10px_25px_rgba(0,0,0,0.45)] backdrop-blur-[20px]'
            : 'bg-[rgba(6,6,6,0.45)] backdrop-blur-[8px]'
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-4 md:px-6">
          <Link
            to="/"
            className="flex items-center gap-2.5"
            onClick={() => setMenuOpen(false)}
          >
            <SprayIcon />
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
              className="hidden rounded-full p-2 text-gold transition-all hover:bg-gold/10 hover:shadow-[0_0_18px_rgba(201,162,86,0.35)] sm:block"
              aria-label="Instagram Perfumes do T"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>

            <button
              type="button"
              onClick={onOpenCart || openCart}
              className="relative rounded-full p-2 text-cream transition-colors hover:text-gold"
              aria-label={`Abrir carrinho, ${totalCount} itens`}
            >
              <ShoppingBag className="h-5 w-5" />
              {totalCount > 0 && (
                <span className="gold-pulse absolute -right-0.5 -top-0.5 flex h-5 w-5 items-center justify-center rounded-full bg-red-600 text-[10px] font-semibold text-white">
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
          className={`absolute left-0 top-0 flex h-full w-72 flex-col border-r border-dark-border bg-[#0d0d0d] p-6 transition-transform ${
            menuOpen ? 'translate-x-0' : '-translate-x-full'
          }`}
        >
          <div className="mb-8 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <SprayIcon />
              <Logo mobile />
            </div>
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
