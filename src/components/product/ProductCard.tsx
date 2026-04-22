import { Link } from 'react-router-dom'
import { useCart } from '../../context/CartContext'
import { formatCurrency } from '../../utils/formatCurrency'
import type { Product } from '../../types'
import { Button } from '../ui/Button'

export const ProductCard = ({ product }: { product: Product }) => {
  const { addToCart } = useCart()

  return (
    <article className="flex h-full flex-col rounded-xl border border-slate-200 bg-white p-4">
      <img
        src={product.image}
        alt={product.name}
        className="mb-3 aspect-square rounded-lg bg-slate-100 object-cover"
      />
      <p className="mb-1 text-xs uppercase tracking-wide text-slate-500">
        {product.category}
      </p>
      <h3 className="text-base font-semibold text-slate-900">{product.name}</h3>
      <p className="mb-4 text-slate-600">{formatCurrency(product.price)}</p>
      <div className="mt-auto flex gap-2">
        <Link
          to={`/product/${product.id}`}
          className="rounded-md border border-slate-300 px-3 py-2 text-sm"
        >
          View
        </Link>
        <Button onClick={() => addToCart(product.id)} className="flex-1">
          Add to Cart
        </Button>
      </div>
    </article>
  )
}
