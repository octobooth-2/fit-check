import { useState } from 'react'
import type { Product } from '../../types'
import { useCart } from '../../context/CartContext'
import { formatCurrency } from '../../utils/formatCurrency'
import { Button } from '../ui/Button'

export const ProductDetail = ({ product }: { product: Product }) => {
  const { addToCart } = useCart()
  const [size, setSize] = useState(product.sizes[0] ?? 'One Size')

  return (
    <section className="grid gap-8 rounded-xl border border-slate-200 bg-white p-6 md:grid-cols-2">
      <img src={product.image} alt={product.name} className="rounded-lg bg-slate-100" />
      <div>
        <p className="text-sm uppercase tracking-wide text-slate-500">{product.category}</p>
        <h1 className="mt-1 text-2xl font-bold text-slate-900">{product.name}</h1>
        <p className="mt-2 text-xl text-slate-900">{formatCurrency(product.price)}</p>
        <p className="mt-4 text-slate-600">{product.description}</p>

        <label className="mt-6 block text-sm font-medium text-slate-800">
          Size
          <select
            className="mt-2 w-full rounded-md border border-slate-300 px-3 py-2"
            value={size}
            onChange={(event) => setSize(event.target.value)}
          >
            {product.sizes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}
          </select>
        </label>

        <Button onClick={() => addToCart(product.id, size)} className="mt-6 w-full md:w-auto">
          Add to Cart
        </Button>
      </div>
    </section>
  )
}
