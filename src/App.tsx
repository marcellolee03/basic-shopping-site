import { useEffect, useState } from 'react';
import { type Product } from './models/Product';
import { productService } from './services/productService';
import { LandingPage } from './pages/LandingPage';

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    productService.getAllProducts()
      .then(setProducts)
      .catch(console.error)
  }, [])

  
  return (
    <>
      <LandingPage />
    </>
  )
}

export default App
