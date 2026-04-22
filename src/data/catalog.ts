import outfitsJson from './outfits.json'
import productsJson from './products.json'
import type { Outfit, Product } from '../types'

export const products = productsJson as Product[]
export const outfits = outfitsJson as Outfit[]
