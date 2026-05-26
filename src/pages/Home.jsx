import HeroSection from '../components/HeroSection'
import FeaturedSection from '../components/FeaturedSection'
import { ShieldCheck, Truck, MessageCircle } from 'lucide-react'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />

      <div className="overflow-hidden bg-gold py-3">
        <div className="animate-marquee whitespace-nowrap font-display text-sm uppercase tracking-widest text-dark">
          ✦ ENTREGA PARA TODO O BRASIL &nbsp;&nbsp; ✦ PERFUMES ORIGINAIS &nbsp;&nbsp; ✦
          FRETE GRÁTIS ACIMA DE R$299 &nbsp;&nbsp; ✦ ENTREGA PARA TODO O BRASIL
          &nbsp;&nbsp; ✦ PERFUMES ORIGINAIS &nbsp;&nbsp; ✦ FRETE GRÁTIS ACIMA DE R$299
          &nbsp;&nbsp;
          ✦ ENTREGA PARA TODO O BRASIL &nbsp;&nbsp; ✦ PERFUMES ORIGINAIS &nbsp;&nbsp; ✦
          FRETE GRÁTIS ACIMA DE R$299 &nbsp;&nbsp; ✦ ENTREGA PARA TODO O BRASIL
          &nbsp;&nbsp; ✦ PERFUMES ORIGINAIS &nbsp;&nbsp; ✦ FRETE GRÁTIS ACIMA DE R$299
          &nbsp;&nbsp;
        </div>
      </div>

      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-cream md:text-4xl">Por Que Nos Escolher</h2>
          </div>
          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <article className="rounded-xl border border-dark-border bg-dark-card p-6">
              <ShieldCheck className="h-10 w-10 text-gold" />
              <h3 className="mt-4 font-display text-xl text-cream">100% Originais</h3>
              <p className="mt-2 text-sm text-cream/70">
                Todos os perfumes com procedencia garantida.
              </p>
            </article>
            <article className="rounded-xl border border-dark-border bg-dark-card p-6">
              <Truck className="h-10 w-10 text-gold" />
              <h3 className="mt-4 font-display text-xl text-cream">Entrega Rápida</h3>
              <p className="mt-2 text-sm text-cream/70">
                Enviamos para todo o Brasil em até 5 dias.
              </p>
            </article>
            <article className="rounded-xl border border-dark-border bg-dark-card p-6">
              <MessageCircle className="h-10 w-10 text-gold" />
              <h3 className="mt-4 font-display text-xl text-cream">
                Atendimento Personalizado
              </h3>
              <p className="mt-2 text-sm text-cream/70">
                Fale conosco direto pelo WhatsApp.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="sobre" className="border-t border-dark-border bg-[#1a1a1a] py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="font-display text-3xl font-semibold text-gold">Sobre Nós</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold/50" />
          <p className="mt-6 font-body text-base font-light leading-relaxed text-cream/80">
            Na <strong className="font-medium text-gold">Perfumes do T</strong>, acreditamos
            que cada fragrância conta uma história única. Selecionamos as melhores
            essências das marcas mais renomadas do mundo para que você encontre o
            perfume que traduz sua personalidade — com autenticidade, elegância e
            atendimento personalizado.
          </p>
          <p className="mt-4 font-body text-sm italic text-cream/50">
            O seu perfume. A sua essência.
          </p>
        </div>
      </section>

      <section id="contato" className="py-16 md:py-24">
        <div className="mx-auto max-w-3xl px-4 text-center md:px-6">
          <h2 className="font-display text-3xl font-semibold text-gold">Contato</h2>
          <div className="mx-auto mt-4 h-px w-16 bg-gold/50" />
          <p className="mt-6 font-body text-base font-light text-cream/80">
            Tire suas dúvidas, peça recomendações ou faça seu pedido pelo Instagram.
            Estamos prontos para ajudá-lo a encontrar a fragrância perfeita.
          </p>
          <a
            href="https://wa.me/message/XRY3ZML54HGNE1"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded bg-gold px-8 py-3 font-body text-sm font-semibold uppercase tracking-wider text-dark transition-colors hover:bg-gold-light"
          >
            Chamar no WhatsApp
          </a>
        </div>
      </section>

      <section className="mx-4 mb-16 rounded-xl bg-gold px-6 py-14 text-center text-dark md:mx-auto md:max-w-7xl">
        <h2 className="text-3xl font-semibold md:text-4xl">Encontrou o seu perfume?</h2>
        <p className="mx-auto mt-3 max-w-2xl text-base text-dark/80">
          Fale com a gente agora e garanta o seu!
        </p>
        <a
          href="https://wa.me/message/XRY3ZML54HGNE1"
          target="_blank"
          rel="noopener noreferrer"
          className="mt-8 inline-flex rounded bg-dark px-10 py-3.5 text-sm font-semibold uppercase tracking-wider text-gold transition-colors hover:bg-black"
        >
          Chamar no WhatsApp
        </a>
      </section>
    </>
  )
}
