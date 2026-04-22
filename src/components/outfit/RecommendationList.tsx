import type { OutfitRecommendation } from '../../utils/recommendOutfits'
import { OutfitCard } from './OutfitCard'

export const RecommendationList = ({
  items,
}: {
  items: OutfitRecommendation[]
}) => {
  if (items.length === 0) {
    return (
      <p className="rounded-xl border border-dashed border-slate-300 p-6 text-center text-slate-500">
        No matching outfits yet. Try a different style preference.
      </p>
    )
  }

  return (
    <div className="grid gap-4 md:grid-cols-2">
      {items.map((item) => (
        <OutfitCard key={item.outfit.id} recommendation={item} />
      ))}
    </div>
  )
}
