import { useState, useEffect } from "react"
import { ProductCard } from "../components/ProductCard" 
import { type Product } from "../models/Product"
import { productService } from "../services/productService"


export function BrowseProductsPage({ productCategory = "all" }) {
    const [products, setProducts] = useState<Product[]>([])
    
    useEffect(() => {
        if (productCategory === "all") {
            productService.getAllProducts()
            .then(setProducts)
            .catch(console.error)
        } else {
            productService.getAllProducts()
            .then(allProducts => {
                const filteredProducts = allProducts.filter (
                    product => product.category === productCategory
                );
                setProducts(filteredProducts)
            })
            .catch(console.error)
        }
    }, [productCategory])

    return (
        <>
            <div>
                <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 px-30 py-20">
                    {products.map((product) => (
                        <div key={product.id}>
                            <ProductCard 
                                product={product}
                            />
                        </div>
                    ))}

                </div>
            </div>
            
        </>
    )
}