import type { Outfit, Product } from '../types'

export interface OutfitRecommendation {
  outfit: Outfit
  products: Product[]
  score: number
}

export const recommendOutfits = (
  products: Product[],
  outfits: Outfit[],
  selectedTags: string[],
): OutfitRecommendation[] => {
  const tagSet = new Set(selectedTags)
  const productsById = new Map(products.map((product) => [product.id, product]))

  return outfits
    .map((outfit) => {
      const matchedByOutfitTags = outfit.tags.filter((tag) => tagSet.has(tag)).length
      const matchedByProductTags = outfit.productIds.reduce((count, id) => {
        const product = productsById.get(id)
        return count + (product?.tags.some((tag) => tagSet.has(tag)) ? 1 : 0)
      }, 0)

      const score = matchedByOutfitTags * 2 + matchedByProductTags
      const resolvedProducts = outfit.productIds
        .map((id) => productsById.get(id))
        .filter((product): product is Product => Boolean(product))

      return {
        outfit,
        products: resolvedProducts,
        score,
      }
    })
    .filter(({ score }) => selectedTags.length === 0 || score > 0)
    .sort((a, b) => b.score - a.score)
}
