import { getFeaturedProducts } from '../data/products'
import ProductCard from './ProductCard'

export default function FeaturedSection() {
  const featured = getFeaturedProducts()

  return (
    <section className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <div className="text-center">
          <h2 className="font-display text-3xl font-semibold text-cream md:text-4xl">
            Destaques da Coleção
          </h2>
          <div className="mx-auto mt-4 h-px w-24 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>

        <div className="mt-12 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {featured.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
