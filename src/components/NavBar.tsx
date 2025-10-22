import { useShoppingCartContext } from '../context/ShoppingCartContext'
import { FaShoppingCart } from 'react-icons/fa'

export function NavBar() {
    const { cartQuantity } = useShoppingCartContext();

    return (
        <div className="flex rounded-xl items-center p-5 bg-white mx-15 my-3 shadow-lg space-x-6">
            <button className="cursor-pointer transition bg-blue-400 text-white rounded-xl py-2 px-3
             hover:bg-blue-300 hover:scale-102">Build Your Own</button>
            <button className="cursor-pointer transition hover:bg-gray-100 rounded-xl py-2 px-3">Gaskets</button>
            <button className="cursor-pointer transition hover:bg-gray-100 rounded-xl py-2 px-3">Switches</button>
            <button className="cursor-pointer transition hover:bg-gray-100 rounded-xl py-2 px-3">Keycaps</button>

            <div className=" ml-auto flex gap-3 cursor-pointer">
                
                <div className="position: relative">
                    <FaShoppingCart 
                    size="1.5em"
                    />
                </div>
                
                {cartQuantity}
            </div>
        
        </div>
    )
}