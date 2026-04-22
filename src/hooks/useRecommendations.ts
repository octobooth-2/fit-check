import { outfits, products } from '../data/catalog'
import { recommendOutfits } from '../utils/recommendOutfits'

export const useRecommendations = (selectedTags: string[]) =>
  recommendOutfits(products, outfits, selectedTags)
