import { useShoppingCartContext } from '../context/ShoppingCartContext'
import { FaShoppingCart, FaUser, FaHeart } from 'react-icons/fa'
import { NavLink } from 'react-router'
import { PATHS } from "../routes/paths"

export function NavBar() {
    const { cartQuantity } = useShoppingCartContext();

    return (
        <>
        <div className="flex items-center mt-4 py-5 px-15 mx-20 border border-[#EAE0D5] bg-white shadow-lg space-x-6 rounded-t-xl">
            
            <img src="logo_full.png" className='object-contain h-15'></img>
        
            <div className="ml-auto flex gap-5">
                <p className="underline">Sign Up</p>

                <FaUser
                    size="2em"
                />

                <FaHeart 
                    size="2em"
                />

                <FaShoppingCart 
                    size="2em"
                />
            </div>
            
        
        </div>
        <div className="flex py-6 px-15 mx-20 items-center bg-white border border-[#EAE0D5] shadow-lg space-x-6 rounded-b-xl">
            <NavLink to="/products/gaskets" className="cursor-pointer transition hover:bg-gray-200  rounded-xl py-2 px-3">Gaskets</NavLink>
            <button className="cursor-pointer transition hover:bg-gray-200  rounded-lg py-2 px-3">Switches</button>
            <button className="cursor-pointer transition hover:bg-gray-200 rounded-lg py-2 px-3">Keycaps</button>

            
            <div className="ml-auto">
                <NavLink to={PATHS.LANDINGPAGE} className="cursor-pointer text-white transition bg-black rounded-lg py-5 px-13
                 hover:bg-[#101010] hover:scale-102">Build Your Own</NavLink>
            </div>
        </div>
        </>
    )
}