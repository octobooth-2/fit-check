import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { CartDrawer } from './components/cart/CartDrawer'
import { Footer } from './components/layout/Footer'
import { Navbar } from './components/layout/Navbar'
import { CartProvider } from './context/CartContext'
import { FilterProvider } from './context/FilterContext'
import { CartPage } from './pages/CartPage'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'
import { OutfitPage } from './pages/OutfitPage'
import { ProductPage } from './pages/ProductPage'
import { ShopPage } from './pages/ShopPage'

function App() {
  return (
    <BrowserRouter basename={import.meta.env.BASE_URL}>
      <CartProvider>
        <FilterProvider>
          <div className="min-h-screen bg-slate-50 text-slate-900">
            <Navbar />
            <main className="mx-auto max-w-6xl px-4 py-8">
              <div className="mb-4 flex justify-end">
                <CartDrawer />
              </div>
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/shop" element={<ShopPage />} />
                <Route path="/product/:productId" element={<ProductPage />} />
                <Route path="/outfits" element={<OutfitPage />} />
                <Route path="/cart" element={<CartPage />} />
                <Route path="*" element={<NotFoundPage />} />
              </Routes>
            </main>
            <Footer />
          </div>
        </FilterProvider>
      </CartProvider>
    </BrowserRouter>
  )
}

export default App
