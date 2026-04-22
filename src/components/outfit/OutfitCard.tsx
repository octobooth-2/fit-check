import type { OutfitRecommendation } from '../../utils/recommendOutfits'

export const OutfitCard = ({ recommendation }: { recommendation: OutfitRecommendation }) => (
  <article className="rounded-xl border border-slate-200 bg-white p-4">
    <img
      src={recommendation.outfit.image}
      alt={recommendation.outfit.name}
      className="mb-3 aspect-video rounded-lg bg-slate-100 object-cover"
    />
    <h3 className="text-lg font-semibold text-slate-900">{recommendation.outfit.name}</h3>
    <p className="text-sm text-slate-600">{recommendation.outfit.description}</p>
    <p className="mt-2 text-xs text-blue-700">Match score: {recommendation.score}</p>
    <ul className="mt-3 list-inside list-disc text-sm text-slate-700">
      {recommendation.products.map((product) => (
        <li key={product.id}>{product.name}</li>
      ))}
    </ul>
  </article>
)
