import { useState } from 'react'
import { Link } from 'react-router-dom'
import InstagramIcon from './InstagramIcon'
import { SITE_LOGO_SRC } from '../constants/branding'

function Logo() {
  const [imgError, setImgError] = useState(false)

  if (!imgError) {
    return (
      <img
        src={SITE_LOGO_SRC}
        alt="Perfumes do T"
        className="mx-auto h-12 w-auto object-contain"
        onError={() => setImgError(true)}
      />
    )
  }

  return (
    <p className="font-display text-xl font-bold tracking-widest text-gold">
      PERFUMES DO T
    </p>
  )
}

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gold/30 bg-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="text-center">
          <Logo />
          <p className="mt-3 font-body text-sm font-light italic text-cream/70">
            O seu perfume. A sua essência.
          </p>
        </div>

        <div className="mt-10 grid gap-8 text-center sm:grid-cols-3 sm:text-left">
          <div>
            <h3 className="font-display text-sm font-semibold tracking-wider text-gold">
              Links Rápidos
            </h3>
            <ul className="mt-3 space-y-2 font-body text-sm text-cream/70">
              <li>
                <Link to="/" className="transition-colors hover:text-gold">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/catalogo"
                  className="transition-colors hover:text-gold"
                >
                  Catálogo
                </Link>
              </li>
              <li>
                <Link to="/#sobre" className="transition-colors hover:text-gold">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          <div className="sm:col-span-2 sm:text-right">
            <h3 className="font-display text-sm font-semibold tracking-wider text-gold">
              Contato
            </h3>
            <a
              href="https://www.instagram.com/perfumes_do_t/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-flex items-center gap-2 font-body text-sm text-cream/70 transition-colors hover:text-gold sm:float-right"
            >
              <InstagramIcon className="h-5 w-5 text-gold" />
              @perfumes_do_t
            </a>
            <p className="mt-2 clear-both font-body text-xs text-cream/50 sm:text-right">
              Siga-nos no Instagram @perfumes_do_t
            </p>
          </div>
        </div>

        <p className="mt-10 border-t border-dark-border pt-6 text-center font-body text-xs text-cream/40">
          © 2025 Perfumes do T. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
