import { useCart } from '../../context/CartContext'
import { formatCurrency } from '../../utils/formatCurrency'
import { Button } from '../ui/Button'

export const CartSummary = () => {
  const { totalItems, totalPrice, clearCart } = useCart()

  return (
    <aside className="rounded-xl border border-slate-200 bg-white p-4">
      <h2 className="text-lg font-semibold text-slate-900">Summary</h2>
      <dl className="mt-3 space-y-2 text-sm text-slate-700">
        <div className="flex justify-between">
          <dt>Items</dt>
          <dd>{totalItems}</dd>
        </div>
        <div className="flex justify-between font-semibold text-slate-900">
          <dt>Total</dt>
          <dd>{formatCurrency(totalPrice)}</dd>
        </div>
      </dl>
      <Button className="mt-4 w-full" onClick={clearCart} variant="secondary">
        Clear cart
      </Button>
    </aside>
  )
}
