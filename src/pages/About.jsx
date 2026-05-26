import { ShieldCheck, Gem, Flame, MessageCircle } from 'lucide-react'

export default function About() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
      <section className="relative overflow-hidden rounded-2xl border border-gold/25 bg-dark-card p-8 md:p-12">
        <div
          className="absolute inset-0 opacity-30"
          style={{
            background:
              'radial-gradient(800px circle at 20% 10%, rgba(201,162,86,0.18), transparent 55%), radial-gradient(800px circle at 80% 60%, rgba(201,162,86,0.12), transparent 55%)',
          }}
          aria-hidden="true"
        />
        <div className="relative">
          <h1 className="font-logo text-4xl text-gold md:text-5xl">Nossa História</h1>
          <p className="mt-5 max-w-3xl font-body text-base font-light leading-relaxed text-cream/80 md:text-lg">
            A Perfumes do T nasceu da paixão por fragrâncias únicas e autênticas. Cada
            perfume da nossa coleção é cuidadosamente selecionado para oferecer uma
            experiência olfativa inesquecível.
          </p>
        </div>
      </section>

      <section className="mt-12 grid gap-4 md:grid-cols-3">
        <article className="rounded-xl border border-dark-border bg-dark-card p-6">
          <ShieldCheck className="h-10 w-10 text-gold" />
          <h2 className="mt-4 text-xl font-semibold text-cream">Qualidade</h2>
          <p className="mt-2 text-sm text-cream/70">Curadoria rígida e seleção premium.</p>
        </article>
        <article className="rounded-xl border border-dark-border bg-dark-card p-6">
          <Gem className="h-10 w-10 text-gold" />
          <h2 className="mt-4 text-xl font-semibold text-cream">Autenticidade</h2>
          <p className="mt-2 text-sm text-cream/70">Procedência garantida em cada frasco.</p>
        </article>
        <article className="rounded-xl border border-dark-border bg-dark-card p-6">
          <Flame className="h-10 w-10 text-gold" />
          <h2 className="mt-4 text-xl font-semibold text-cream">Paixão</h2>
          <p className="mt-2 text-sm text-cream/70">A gente ama perfumes tanto quanto você.</p>
        </article>
      </section>

      <div className="mt-12 text-center">
        <a
          href="https://wa.me/message/XRY3ZML54HGNE1"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded bg-gold px-10 py-3.5 font-body text-sm font-semibold uppercase tracking-wider text-dark transition-colors hover:bg-gold-light"
        >
          <MessageCircle className="h-5 w-5" />
          Fale Conosco
        </a>
      </div>
    </div>
  )
}

