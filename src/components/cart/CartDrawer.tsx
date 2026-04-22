import { useState } from 'react'
import { useCart } from '../../context/CartContext'
import { formatCurrency } from '../../utils/formatCurrency'
import { Modal } from '../ui/Modal'

export const CartDrawer = () => {
  const [open, setOpen] = useState(false)
  const { items, totalPrice } = useCart()

  return (
    <>
      <button
        className="rounded-md border border-slate-300 px-3 py-2 text-sm"
        onClick={() => setOpen(true)}
        type="button"
      >
        Quick Cart
      </button>
      <Modal open={open} title="Cart preview" onClose={() => setOpen(false)}>
        <ul className="space-y-2 text-sm">
          {items.map((item) => (
            <li key={`${item.productId}-${item.size ?? 'default'}`}>
              {item.product.name} × {item.quantity}
            </li>
          ))}
        </ul>
        <p className="mt-4 font-semibold">Total: {formatCurrency(totalPrice)}</p>
      </Modal>
    </>
  )
}
