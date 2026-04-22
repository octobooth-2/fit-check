export type ProductCategory = 'tops' | 'bottoms' | 'shoes' | 'accessories'

export interface Product {
  id: string
  name: string
  price: number
  category: ProductCategory
  tags: string[]
  image: string
  description: string
  sizes: string[]
}

export interface Outfit {
  id: string
  name: string
  description: string
  image: string
  tags: string[]
  productIds: string[]
}
