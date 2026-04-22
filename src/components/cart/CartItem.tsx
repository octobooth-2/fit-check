import type { Product } from '../../types'
import { formatCurrency } from '../../utils/formatCurrency'

export const CartItem = ({
  product,
  quantity,
  size,
  onUpdate,
  onRemove,
}: {
  product: Product
  quantity: number
  size?: string
  onUpdate: (value: number) => void
  onRemove: () => void
}) => (
  <article className="flex flex-col gap-3 rounded-xl border border-slate-200 bg-white p-4 sm:flex-row sm:items-center sm:justify-between">
    <div>
      <h3 className="font-semibold text-slate-900">{product.name}</h3>
      <p className="text-sm text-slate-600">
        {formatCurrency(product.price)} {size ? `• Size ${size}` : ''}
      </p>
    </div>
    <div className="flex items-center gap-2">
      <input
        type="number"
        min={1}
        value={quantity}
        onChange={(event) => onUpdate(Number(event.target.value) || 1)}
        className="w-16 rounded-md border border-slate-300 px-2 py-1"
      />
      <button type="button" className="text-sm text-red-600" onClick={onRemove}>
        Remove
      </button>
    </div>
  </article>
)
