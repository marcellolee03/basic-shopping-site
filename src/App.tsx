import { ProductCard } from './components/ProductCard';
import { useEffect, useState } from 'react';
import { type Product } from './models/Product';
import { productService } from './services/productService';
import { NavBar } from './components/NavBar';

function App() {
  const [products, setProducts] = useState<Product[]>([])

  useEffect(() => {
    productService.getAllProducts()
      .then(setProducts)
      .catch(console.error)
  }, [])

  
  return (
    <>
      <NavBar/>

      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-30">

        {products.map((product) => (
          <ProductCard
            product={product}
          />
        ))}

        </div>
      </div>
    
    </>
    
    
  )
}

export default App
