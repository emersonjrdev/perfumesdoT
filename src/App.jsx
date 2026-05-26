import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { CartProvider } from './context/CartContext'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import CartDrawer from './components/CartDrawer'
import Home from './pages/Home'
import Catalog from './pages/Catalog'
import ProductDetail from './pages/ProductDetail'
import Cart from './pages/Cart'

function Layout({ children, onOpenCart }) {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar onOpenCart={onOpenCart} />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  )
}

function AppRoutes({ onOpenCart }) {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <Layout onOpenCart={onOpenCart}>
            <Home />
          </Layout>
        }
      />
      <Route
        path="/catalogo"
        element={
          <Layout onOpenCart={onOpenCart}>
            <Catalog />
          </Layout>
        }
      />
      <Route
        path="/produto/:id"
        element={
          <Layout onOpenCart={onOpenCart}>
            <ProductDetail />
          </Layout>
        }
      />
      <Route
        path="/carrinho"
        element={
          <Layout onOpenCart={onOpenCart}>
            <Cart />
          </Layout>
        }
      />
    </Routes>
  )
}

export default function App() {
  const [cartOpen, setCartOpen] = useState(false)

  const openCart = () => setCartOpen(true)
  const closeCart = () => setCartOpen(false)

  return (
    <CartProvider>
      <BrowserRouter>
        <AppRoutes onOpenCart={openCart} />
        <CartDrawer open={cartOpen} onClose={closeCart} />
      </BrowserRouter>
    </CartProvider>
  )
}
