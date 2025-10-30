import Typewriter from 'typewriter-effect';
import { PATHS } from "../routes/paths";
import { NavLink } from "react-router"

export function LandingPage() {

    return (
        <>
            <div className='flex mx-35 items-center gap-20'>
                
                <div className='max-w-4xl'>
                    <p className='text-7xl font-extrabold font-inter '>IT'S TIME TO BUILD YOUR DREAM</p>

                    <Typewriter
                        options={{
                            wrapperClassName: "text-7xl font-extrabold font-inter",
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

                    <p className='text-7xl font-extrabold font-inter'>KEYBOARD</p>
                    <p className='text-2xl my-10 font-inter '>Use our interactive builder to design your perfect keyboard step-by-step, or shop our collection of premium components.</p>
                    
                    <div className='flex gap-8'>
                        <button className="cursor-pointer transition bg-black text-white rounded-3xl font-semibold text-2xl py-6 px-20
                         hover:scale-102 font-inter">Start Building</button>
                        <NavLink to={PATHS.BROWSEPRODUCTS} className="cursor-pointer transition text-white bg-[#A9998A] rounded-3xl font-semibold text-2xl py-6 px-20
                        hover:scale-102 font-inter ">Browse Components</NavLink>
                    </div>
                </div>
                
                <div>
                    <img src='landing_keyboard.png'></img>
                </div>
        
            </div>
        </>

    )
}