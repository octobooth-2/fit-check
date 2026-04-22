import { products } from '../data/catalog'
import { FilterPanel } from '../components/ui/FilterPanel'
import { SearchBar } from '../components/ui/SearchBar'
import { ProductGrid } from '../components/product/ProductGrid'
import { Sidebar } from '../components/layout/Sidebar'
import { useFilters } from '../context/FilterContext'

export const ShopPage = () => {
  const { category, search, setSearch, sort, styleTags } = useFilters()

  const filtered = products
    .filter((product) => (category === 'all' ? true : product.category === category))
    .filter((product) =>
      product.name.toLowerCase().includes(search.trim().toLowerCase()),
    )
    .filter((product) =>
      styleTags.length === 0
        ? true
        : styleTags.every((tag) => product.tags.includes(tag)),
    )
    .sort((a, b) => {
      if (sort === 'price-asc') return a.price - b.price
      if (sort === 'price-desc') return b.price - a.price
      return a.name.localeCompare(b.name)
    })

  return (
    <div className="grid gap-6 lg:grid-cols-[18rem_1fr]">
      <Sidebar>
        <div className="space-y-4">
          <SearchBar value={search} onChange={setSearch} />
          <FilterPanel />
        </div>
      </Sidebar>
      <section>
        <h1 className="mb-4 text-2xl font-semibold text-slate-900">Shop all products</h1>
        <ProductGrid products={filtered} />
      </section>
    </div>
  )
}
