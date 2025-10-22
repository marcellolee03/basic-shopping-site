import { type Product } from '../models/Product'
import { useShoppingCartContext } from '../context/ShoppingCartContext'


type ProductCardProps = {
    product: Product
}

export function ProductCard( { product } : ProductCardProps) {
    const { addToShoppingCart } = useShoppingCartContext();

    return (
        <div className="flex flex-col shadow-lg rounded-md bg-white px-7 py-6">
            <div className="grow">
                <img src={product.image} alt="item image" className="pb-4 aspect-square w-full object-contain"></img>
                <p className="font-semibold py-2 text-sm">{product.name}</p>
            </div>
            <p className="text-gray-600 text-sm">{product.category}</p>

            {'discountedPrice' in product 
                ? <div className='flex items-baseline'>
                    <p className="font-semibold py-2 text-lg mr-3 text-red-600">${product.discountedPrice?.toFixed(2)}</p>
                    <p className=" py-2 text-sm line-through">${product.price.toFixed(2)}</p> 
                  </div>
                : <p className="font-semibold py-2 text-lg">${product.price.toFixed(2)}</p>
            }
            <button onClick={() => addToShoppingCart(product.id)}
            className=" cursor-pointer bg-blue-500 transition mt-2 text-white py-3 rounded-xl shadow-md hover:-translate-y-1 hover:bg-blue-400 hover:scale-103">+ Add to Cart</button>
        </div>
    )
}