import { useFilters } from '../../context/FilterContext'
import type { ProductCategory } from '../../types'

const categories: Array<ProductCategory | 'all'> = [
  'all',
  'tops',
  'bottoms',
  'shoes',
  'accessories',
]
const styleOptions = ['casual', 'summer', 'formal', 'smart-casual', 'streetwear']

export const FilterPanel = () => {
  const {
    category,
    setCategory,
    sort,
    setSort,
    styleTags,
    toggleStyleTag,
    clearFilters,
  } = useFilters()

  return (
    <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-4">
      <div>
        <h3 className="mb-2 font-semibold text-slate-900">Category</h3>
        <div className="flex flex-wrap gap-2">
          {categories.map((item) => (
            <button
              key={item}
              type="button"
              onClick={() => setCategory(item)}
              className={`rounded-full px-3 py-1 text-sm ${
                category === item
                  ? 'bg-slate-900 text-white'
                  : 'bg-slate-100 text-slate-700'
              }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>

      <label className="flex flex-col gap-2">
        <span className="font-semibold text-slate-900">Sort</span>
        <select
          value={sort}
          onChange={(event) => setSort(event.target.value as typeof sort)}
          className="rounded-md border border-slate-300 px-3 py-2"
        >
          <option value="name-asc">Name A-Z</option>
          <option value="price-asc">Price: Low to High</option>
          <option value="price-desc">Price: High to Low</option>
        </select>
      </label>

      <div>
        <h3 className="mb-2 font-semibold text-slate-900">Style tags</h3>
        <div className="flex flex-wrap gap-2">
          {styleOptions.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => toggleStyleTag(tag)}
              className={`rounded-full px-3 py-1 text-sm ${
                styleTags.includes(tag)
                  ? 'bg-blue-600 text-white'
                  : 'bg-blue-50 text-blue-700'
              }`}
            >
              {tag}
            </button>
          ))}
        </div>
      </div>

      <button
        type="button"
        className="text-sm text-slate-600 underline"
        onClick={clearFilters}
      >
        Clear filters
      </button>
    </div>
  )
}
