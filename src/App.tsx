import { ProductCard } from './components/ProductCard';
import { type Product } from './models/Product'
import { NavBar } from './components/NavBar'

function App() {
  const dummyProduct: Product = {
    id: 1,
    name: "Fjarllraven = Foldsac No. 1 Backpack, Fits 15 Laptops",
    description: "Jacket",
    price: 109.95,
    image: "bag.png",
    category: "menś clothing",
    rating: {rate: 5, count: 5}
  };

  const dummyProduct2: Product = {
    id: 2,
    name: "Fjarllraven = Foldsac No. 1 Backpack, Fits 15 Laptops",
    description: "Jacket",
    price: 109.95,
    discountedPrice: 100.00,
    image: "test.png",
    category: "menś clothing",
    rating: {rate: 5, count: 5}
  };

  return (
    <>
      <NavBar/>

      <div>
        <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 px-30">
          <ProductCard
            product = {dummyProduct}
          />

          <ProductCard
            product = {dummyProduct2}
          />

          <ProductCard
            product = {dummyProduct}
          />

          <ProductCard
            product = {dummyProduct}
          />

        </div>
      </div>
    
    </>
    
    
  )
}

export default App
