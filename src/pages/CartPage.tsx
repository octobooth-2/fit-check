import { CartItem } from '../components/cart/CartItem'
import { CartSummary } from '../components/cart/CartSummary'
import { useCart } from '../context/CartContext'

export const CartPage = () => {
  const { items, updateQuantity, removeFromCart } = useCart()

  if (items.length === 0) {
    return <p className="rounded-xl bg-white p-6 text-slate-600">Your cart is empty.</p>
  }

  return (
    <div className="grid gap-6 lg:grid-cols-[1fr_20rem]">
      <section className="space-y-3">
        {items.map((item) => (
          <CartItem
            key={`${item.productId}-${item.size ?? 'default'}`}
            product={item.product}
            quantity={item.quantity}
            size={item.size}
            onUpdate={(value) => updateQuantity(item.productId, value, item.size)}
            onRemove={() => removeFromCart(item.productId, item.size)}
          />
        ))}
      </section>
      <CartSummary />
    </div>
  )
}
