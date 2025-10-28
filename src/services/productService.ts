import { dummyProducts } from '../backend/data'
import { type Product } from '../models/Product'

export const productService = {

    getAllProducts: async(): Promise<Product[]> =>{

        return new Promise ((resolve) => {
            setTimeout(() => {
                resolve(dummyProducts)
            }, 1000)
        })
    }
}