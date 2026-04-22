import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { products } from '../data/catalog'
import type { Product } from '../types'

interface CartLine {
  productId: string
  quantity: number
  size?: string
}

interface CartItem extends CartLine {
  product: Product
}

interface CartContextValue {
  items: CartItem[]
  totalItems: number
  totalPrice: number
  addToCart: (productId: string, size?: string) => void
  removeFromCart: (productId: string, size?: string) => void
  updateQuantity: (productId: string, quantity: number, size?: string) => void
  clearCart: () => void
}

const STORAGE_KEY = 'fit-check-cart'
const CartContext = createContext<CartContextValue | undefined>(undefined)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [lines, setLines] = useState<CartLine[]>(() => {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (!stored) return []

    try {
      return JSON.parse(stored) as CartLine[]
    } catch {
      return []
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(lines))
  }, [lines])

  const value = useMemo<CartContextValue>(() => {
    const items = lines
      .map((line) => {
        const product = products.find((item) => item.id === line.productId)
        if (!product) return null

        return {
          ...line,
          product,
        }
      })
      .filter((item): item is CartItem => Boolean(item))

    const totalItems = items.reduce((total, item) => total + item.quantity, 0)
    const totalPrice = items.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0,
    )

    const addToCart = (productId: string, size?: string) => {
      setLines((current) => {
        const existing = current.find(
          (item) => item.productId === productId && item.size === size,
        )
        if (!existing) {
          return [...current, { productId, quantity: 1, size }]
        }

        return current.map((item) =>
          item.productId === productId && item.size === size
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        )
      })
    }

    const removeFromCart = (productId: string, size?: string) => {
      setLines((current) =>
        current.filter(
          (item) => !(item.productId === productId && item.size === size),
        ),
      )
    }

    const updateQuantity = (productId: string, quantity: number, size?: string) => {
      if (quantity <= 0) {
        removeFromCart(productId, size)
        return
      }

      setLines((current) =>
        current.map((item) =>
          item.productId === productId && item.size === size
            ? { ...item, quantity }
            : item,
        ),
      )
    }

    const clearCart = () => setLines([])

    return {
      items,
      totalItems,
      totalPrice,
      addToCart,
      removeFromCart,
      updateQuantity,
      clearCart,
    }
  }, [lines])

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error('useCart must be used within CartProvider')
  }

  return context
}
