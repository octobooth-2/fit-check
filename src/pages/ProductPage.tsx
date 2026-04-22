import { useParams } from 'react-router-dom'
import { products } from '../data/catalog'
import { ProductDetail } from '../components/product/ProductDetail'

export const ProductPage = () => {
  const { productId } = useParams()
  const product = products.find((item) => item.id === productId)

  if (!product) {
    return <p className="text-slate-600">Product not found.</p>
  }

  return <ProductDetail product={product} />
}
