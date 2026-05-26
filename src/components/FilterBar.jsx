export default function FilterBar({
  category,
  setCategory,
  concentration,
  setConcentration,
  maxPrice,
  setMaxPrice,
  priceCeiling,
  sortBy,
  setSortBy,
  resultCount,
}) {
  return (
    <div className="rounded-lg border border-[#333] bg-dark-card p-4 md:p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <div>
          <label
            htmlFor="filter-category"
            className="mb-2 block font-body text-xs font-semibold uppercase tracking-wider text-cream/60"
          >
            Categoria
          </label>
          <select
            id="filter-category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            className="w-full rounded border border-[#333] bg-[#1a1a1a] px-3 py-2 font-body text-sm text-cream focus:border-gold focus:outline-none"
          >
            <option value="todos">Todos</option>
            <option value="masculino">Masculino</option>
            <option value="feminino">Feminino</option>
            <option value="unissex">Unissex</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="filter-concentration"
            className="mb-2 block font-body text-xs font-semibold uppercase tracking-wider text-cream/60"
          >
            Concentração
          </label>
          <select
            id="filter-concentration"
            value={concentration}
            onChange={(e) => setConcentration(e.target.value)}
            className="w-full rounded border border-[#333] bg-[#1a1a1a] px-3 py-2 font-body text-sm text-cream focus:border-gold focus:outline-none"
          >
            <option value="todos">Todos</option>
            <option value="EDP">EDP</option>
            <option value="EDT">EDT</option>
            <option value="Parfum">Parfum</option>
          </select>
        </div>

        <div>
          <label
            htmlFor="filter-price"
            className="mb-2 block font-body text-xs font-semibold uppercase tracking-wider text-cream/60"
          >
            Preço máximo:{' '}
            <span className="text-gold">
              {maxPrice.toLocaleString('pt-BR', {
                style: 'currency',
                currency: 'BRL',
              })}
            </span>
          </label>
          <input
            id="filter-price"
            type="range"
            min={100}
            max={priceCeiling}
            step={50}
            value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="w-full accent-gold"
          />
        </div>

        <div>
          <label
            htmlFor="filter-sort"
            className="mb-2 block font-body text-xs font-semibold uppercase tracking-wider text-cream/60"
          >
            Ordenar por
          </label>
          <select
            id="filter-sort"
            value={sortBy}
            onChange={(e) => setSortBy(e.target.value)}
            className="w-full rounded border border-[#333] bg-[#1a1a1a] px-3 py-2 font-body text-sm text-cream focus:border-gold focus:outline-none"
          >
            <option value="relevancia">Relevância</option>
            <option value="menor">Menor preço</option>
            <option value="maior">Maior preço</option>
            <option value="avaliacao">Avaliação</option>
          </select>
        </div>
      </div>

      <p className="mt-4 font-body text-sm text-gold">
        {resultCount} produto{resultCount !== 1 ? 's' : ''} encontrado
        {resultCount !== 1 ? 's' : ''}
      </p>
    </div>
  )
}
