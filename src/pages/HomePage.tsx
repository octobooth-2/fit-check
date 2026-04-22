import { outfits, products } from '../data/catalog'
import { ProductGrid } from '../components/product/ProductGrid'

export const HomePage = () => (
  <div className="space-y-8">
    <section className="rounded-2xl bg-slate-900 p-8 text-white">
      <p className="text-sm uppercase tracking-widest text-slate-300">Fit Check</p>
      <h1 className="mt-2 text-3xl font-bold">Shop smart. Style smarter.</h1>
      <p className="mt-2 max-w-xl text-slate-200">
        Discover curated essentials and use our outfit recommendation engine to build looks fast.
      </p>
    </section>

    <section>
      <h2 className="mb-4 text-2xl font-semibold text-slate-900">Featured products</h2>
      <ProductGrid products={products.slice(0, 6)} />
    </section>

    <section>
      <h2 className="mb-4 text-2xl font-semibold text-slate-900">Trending outfits</h2>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {outfits.map((outfit) => (
          <article key={outfit.id} className="rounded-xl border border-slate-200 bg-white p-4">
            <img src={outfit.image} alt={outfit.name} className="mb-3 rounded-lg bg-slate-100" />
            <h3 className="font-semibold text-slate-900">{outfit.name}</h3>
            <p className="text-sm text-slate-600">{outfit.description}</p>
          </article>
        ))}
      </div>
    </section>
  </div>
)
