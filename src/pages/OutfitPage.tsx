import { useMemo, useState } from 'react'
import { products } from '../data/catalog'
import { OutfitBuilder } from '../components/outfit/OutfitBuilder'
import { RecommendationList } from '../components/outfit/RecommendationList'
import { useRecommendations } from '../hooks/useRecommendations'

export const OutfitPage = () => {
  const [selectedTags, setSelectedTags] = useState<string[]>(['casual'])
  const [selectedProductId, setSelectedProductId] = useState('')

  const productTags = useMemo(() => {
    if (!selectedProductId) return []

    return products.find((product) => product.id === selectedProductId)?.tags ?? []
  }, [selectedProductId])

  const mergedTags = useMemo(
    () => Array.from(new Set([...selectedTags, ...productTags])),
    [selectedTags, productTags],
  )

  const recommendations = useRecommendations(mergedTags)

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-slate-900">Outfit recommendation engine</h1>
      <OutfitBuilder
        selectedTags={selectedTags}
        onToggleTag={(tag) =>
          setSelectedTags((current) =>
            current.includes(tag)
              ? current.filter((item) => item !== tag)
              : [...current, tag],
          )
        }
        selectedProductId={selectedProductId}
        onSelectProduct={setSelectedProductId}
      />
      <RecommendationList items={recommendations} />
    </div>
  )
}
