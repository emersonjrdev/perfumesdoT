import { Link } from 'react-router-dom'

export default function NotFound() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-24 text-center md:px-6">
      <h1 className="font-logo text-7xl text-gold md:text-8xl">404</h1>
      <p className="mt-4 font-body text-lg text-cream/70">Página não encontrada</p>
      <Link
        to="/"
        className="mt-10 inline-flex rounded bg-gold px-10 py-3 font-body text-sm font-semibold uppercase tracking-wider text-dark hover:bg-gold-light"
      >
        Voltar à Home
      </Link>
    </div>
  )
}

