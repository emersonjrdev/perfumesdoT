import HeroSection from '../components/HeroSection'
import FeaturedSection from '../components/FeaturedSection'

export default function Home() {
  return (
    <>
      <HeroSection />
      <FeaturedSection />

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
            href="https://www.instagram.com/perfumes_do_t/"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-8 inline-flex items-center justify-center rounded bg-gold px-8 py-3 font-body text-sm font-semibold uppercase tracking-wider text-dark transition-colors hover:bg-gold-light"
          >
            @perfumes_do_t no Instagram
          </a>
        </div>
      </section>
    </>
  )
}
