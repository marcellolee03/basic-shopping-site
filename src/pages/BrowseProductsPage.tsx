import { NavBar } from "../components/NavBar"
import { useState, useEffect } from "react"
import { ProductCard } from "../components/ProductCard" 
import { type Product } from "../models/Product"
import { productService } from "../services/productService"


export function BrowseProductsPage() {
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
                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-30 py-20">
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