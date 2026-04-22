import { products } from '../../data/catalog'

const options = ['casual', 'summer', 'formal', 'smart-casual', 'streetwear', 'winter']

export const OutfitBuilder = ({
  selectedTags,
  onToggleTag,
  selectedProductId,
  onSelectProduct,
}: {
  selectedTags: string[]
  onToggleTag: (tag: string) => void
  selectedProductId: string
  onSelectProduct: (id: string) => void
}) => (
  <div className="space-y-4 rounded-xl border border-slate-200 bg-white p-4">
    <div>
      <h2 className="mb-2 text-lg font-semibold text-slate-900">Style preferences</h2>
      <div className="flex flex-wrap gap-2">
        {options.map((tag) => (
          <button
            key={tag}
            type="button"
            onClick={() => onToggleTag(tag)}
            className={`rounded-full px-3 py-1 text-sm ${
              selectedTags.includes(tag)
                ? 'bg-slate-900 text-white'
                : 'bg-slate-100 text-slate-700'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>
    </div>

    <label className="block text-sm font-medium text-slate-800">
      Start from a product
      <select
        value={selectedProductId}
        onChange={(event) => onSelectProduct(event.target.value)}
        className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2"
      >
        <option value="">No specific product</option>
        {products.map((product) => (
          <option key={product.id} value={product.id}>
            {product.name}
          </option>
        ))}
      </select>
    </label>
  </div>
)
