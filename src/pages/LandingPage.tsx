import { NavBar } from "../components/NavBar";
import Typewriter from 'typewriter-effect';
import { PATHS } from "../routes/paths";
import { NavLink } from "react-router"

export function LandingPage() {

    return (
        <>
            <NavBar />

            <div className='flex mx-25 items-center justify-center gap-20'>
                
                <div className='max-w-4xl'>
                    <p className='text-7xl font-extrabold font-inter text-white'>IT'S TIME TO BUILD YOUR DREAM</p>

                    <Typewriter
                        options={{
                            wrapperClassName: "text-7xl font-extrabold font-inter text-white",
                            delay: 80,

                            strings: [
                                'PREMIUM',
                                'PROFESSIONAL',
                                'GAMING',
                                'THOCKY'
                            ],
                            autoStart: true,
                            loop: true,
                        }}
                    />

                    <p className='text-7xl font-extrabold font-inter text-white'>KEYBOARD</p>
                    <p className='text-2xl my-10 font-inter text-white'>Use our interactive builder to design your perfect keyboard step-by-step, or shop our collection of premium components.</p>
                    
                    <div className='flex gap-8'>
                        <button className="cursor-pointer transition bg-[#3C3C3C] text-white rounded-3xl font-semibold text-2xl py-6 px-20
                        hover:bg-[#757575] hover:scale-102 font-inter">Start Building</button>
                        <NavLink to={PATHS.BROWSEPRODUCTS} className="cursor-pointer transition text-white rounded-3xl font-semibold text-2xl py-6 px-20
                        hover:bg-[#101010] hover:scale-102 font-inter border-gray-300 border">Browse Components</NavLink>
                    </div>
                </div>
                
                <div>
                    <img src='landing_keyboard.png'></img>
                </div>
        
            </div>
        </>

    )
}