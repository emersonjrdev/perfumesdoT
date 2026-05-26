import { useMemo, useState } from 'react'
import { products } from '../data/products'
import FilterBar from '../components/FilterBar'
import ProductCard from '../components/ProductCard'

const priceCeiling = Math.ceil(Math.max(...products.map((p) => p.price)) / 50) * 50

export default function Catalog() {
  const [category, setCategory] = useState('todos')
  const [concentration, setConcentration] = useState('todos')
  const [maxPrice, setMaxPrice] = useState(priceCeiling)
  const [sortBy, setSortBy] = useState('relevancia')

  const filtered = useMemo(() => {
    let result = products.filter((p) => {
      if (category !== 'todos' && p.category !== category) return false
      if (concentration !== 'todos' && p.concentration !== concentration) return false
      if (p.price > maxPrice) return false
      return true
    })

    switch (sortBy) {
      case 'menor':
        result = [...result].sort((a, b) => a.price - b.price)
        break
      case 'maior':
        result = [...result].sort((a, b) => b.price - a.price)
        break
      case 'avaliacao':
        result = [...result].sort((a, b) => b.rating - a.rating)
        break
      default:
        result = [...result].sort((a, b) => (b.reviews || 0) - (a.reviews || 0))
    }

    return result
  }, [category, concentration, maxPrice, sortBy])

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 md:px-6 md:py-14">
      <div className="mb-8 text-center md:text-left">
        <h1 className="font-display text-3xl font-semibold text-cream md:text-4xl">
          Catálogo
        </h1>
        <p className="mt-2 font-body text-sm font-light text-cream/60">
          Explore nossa coleção de fragrâncias premium
        </p>
      </div>

      <FilterBar
        category={category}
        setCategory={setCategory}
        concentration={concentration}
        setConcentration={setConcentration}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        priceCeiling={priceCeiling}
        sortBy={sortBy}
        setSortBy={setSortBy}
        resultCount={filtered.length}
      />

      {filtered.length === 0 ? (
        <p className="mt-16 text-center font-body text-lg text-cream/50">
          Nenhum produto encontrado
        </p>
      ) : (
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
          {filtered.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              style={{
                animation: 'fadeIn 0.5s ease-out forwards',
                animationDelay: `${index * 0.05}s`,
                opacity: 0,
              }}
            />
          ))}
        </div>
      )}
    </div>
  )
}
