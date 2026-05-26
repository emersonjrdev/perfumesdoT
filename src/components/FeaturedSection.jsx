import { getFeaturedProducts } from '../data/products'
import ProductCard from './ProductCard'

export default function FeaturedSection() {
  const featured = getFeaturedProducts()
  const skeletons = Array.from({ length: 4 })

  return (
    <section id="destaques" className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold text-cream md:text-4xl">
            Destaques da Coleção
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        {featured.length === 0 ? (
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {skeletons.map((_, idx) => (
              <div
                key={idx}
                className="animate-pulse overflow-hidden rounded-xl border border-dark-border bg-dark-card"
              >
                <div className="h-48 bg-dark-hover sm:h-64" />
                <div className="space-y-3 p-4">
                  <div className="h-3 w-24 rounded bg-dark-hover" />
                  <div className="h-4 w-40 rounded bg-dark-hover" />
                  <div className="h-8 w-full rounded bg-dark-hover" />
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 sm:gap-6">
            {featured.map((product, index) => (
              <ProductCard
                key={product.id}
                product={product}
                style={{ animationDelay: `${index * 0.1}s` }}
              />
            ))}
          </div>
        )}
      </div>
    </section>
  )
}
