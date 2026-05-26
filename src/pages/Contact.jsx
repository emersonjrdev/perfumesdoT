import { MessageCircle, MapPin } from 'lucide-react'
import InstagramIcon from '../components/InstagramIcon'

export default function Contact() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-12 md:px-6 md:py-16">
      <section className="relative overflow-hidden rounded-2xl border border-dark-border bg-dark-card p-8 md:p-12">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541643600914-78b084683702?q=80&w=1400&auto=format&fit=crop')",
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/70" aria-hidden="true" />

        <div className="relative">
          <h1 className="font-logo text-4xl text-gold md:text-5xl">Fale Conosco</h1>
          <p className="mt-3 font-body text-sm text-cream/70">
            Estamos disponíveis de segunda a sábado, das 9h às 20h
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            <article className="rounded-xl border border-dark-border bg-dark-card/80 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <InstagramIcon className="h-6 w-6 text-gold" />
                <div>
                  <p className="text-sm font-semibold text-cream">Instagram</p>
                  <a
                    href="https://www.instagram.com/perfumes_do_t/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-gold hover:text-gold-light"
                  >
                    @perfumes_do_t
                  </a>
                </div>
              </div>
            </article>

            <article className="rounded-xl border border-dark-border bg-dark-card/80 p-6 backdrop-blur">
              <div className="flex items-center gap-3">
                <MessageCircle className="h-6 w-6 text-emerald-400" />
                <div className="flex-1">
                  <p className="text-sm font-semibold text-cream">WhatsApp</p>
                  <a
                    href="https://wa.me/message/XRY3ZML54HGNE1"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-2 inline-flex w-full items-center justify-center rounded bg-gold px-4 py-2.5 text-xs font-semibold uppercase tracking-wider text-dark hover:bg-gold-light"
                  >
                    Chamar no WhatsApp
                  </a>
                </div>
              </div>
            </article>
          </div>

          <div className="mt-10 flex items-center justify-center gap-2 text-cream/60">
            <MapPin className="h-4 w-4 text-gold" />
            <p className="text-sm">Atendimento online • Brasil</p>
          </div>
        </div>
      </section>
    </div>
  )
}

