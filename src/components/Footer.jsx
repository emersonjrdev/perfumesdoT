import { useState } from 'react'
import { Link } from 'react-router-dom'
import { MessageCircle } from 'lucide-react'
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
    <p className="font-logo text-xl tracking-[0.15em] text-gold">
      PERFUMES DO T
    </p>
  )
}

export default function Footer() {
  return (
    <footer className="mt-auto border-t border-gold bg-dark">
      <div className="mx-auto max-w-7xl px-4 py-12 md:px-6">
        <div className="grid gap-8 text-center sm:grid-cols-2 lg:grid-cols-4 lg:text-left">
          <div>
            <Logo />
            <p className="mt-3 font-body text-sm font-light italic text-cream/70">
              O seu perfume. A sua essência.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gold">Links</h3>
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
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gold">Contato</h3>
            <p className="mt-3 text-sm text-cream/70">WhatsApp: (11) 99999-9999</p>
            <p className="mt-1 text-sm text-cream/70">Instagram: @perfumes_do_t</p>
          </div>
          <div>
            <h3 className="text-sm font-semibold tracking-wider text-gold">Redes sociais</h3>
            <div className="mt-3 flex items-center justify-center gap-3 lg:justify-start">
              <a
                href="https://www.instagram.com/perfumes_do_t/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-dark-border p-2 text-cream/70 transition-colors hover:text-gold"
                aria-label="Instagram Perfumes do T"
              >
                <InstagramIcon className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/5511999999999"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-dark-border p-2 text-cream/70 transition-colors hover:text-emerald-400"
                aria-label="WhatsApp Perfumes do T"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
            <a
              href="https://www.instagram.com/perfumes_do_t/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-flex items-center gap-2 text-sm text-cream/70 transition-colors hover:text-gold"
            >
              <InstagramIcon className="h-5 w-5" />
              @perfumes_do_t
            </a>
          </div>
        </div>

        <p className="mt-10 border-t border-dark-border pt-6 text-center font-body text-xs font-light text-cream/40">
          © 2025 Perfumes do T. Todos os direitos reservados.
        </p>
      </div>
    </footer>
  )
}
