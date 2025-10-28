import { useShoppingCartContext } from '../context/ShoppingCartContext'
import { FaShoppingCart } from 'react-icons/fa'

export function NavBar() {
    const { cartQuantity } = useShoppingCartContext();

    return (
        <div className="flex rounded-b-[4vw] items-center py-6 px-20 bg-[#3C3C3C] mx-15 shadow-lg space-x-6">
            <button className="cursor-pointer transition bg-black text-white rounded-xl py-5 px-13
             hover:bg-[#101010] hover:scale-102">Build Your Own</button>
            <button className="cursor-pointer transition hover:bg-[#757575] text-white rounded-xl py-2 px-3">Gaskets</button>
            <button className="cursor-pointer transition hover:bg-[#757575] text-white rounded-xl py-2 px-3">Switches</button>
            <button className="cursor-pointer transition hover:bg-[#757575] text-white rounded-xl py-2 px-3">Keycaps</button>

            <div className=" ml-auto flex gap-3">
                
                <div className="position: relative">
                    <FaShoppingCart 
                    size="1.5em"
                    />
                </div>
                
                <p className='text-white'>{cartQuantity}</p>
            </div>
        
        </div>
    )
}