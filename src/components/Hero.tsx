import { motion } from "motion/react"
import hero_img from '../assets/Paytm-money-hero.webp'
export const Hero = () => {
    return (
        <div className="container-props">
            <div className="flex flex-col text-center lg:flex-row lg:text-start items-center p-4">
                <div className="w-full lg:w-1/2">
                    <p className='text-base font-medium pb-2'>Join the Financial Revolution and Start Investing Today!</p>
                    <h1 className='text-h1'>Unlock Financial Freedom<br /> with Paytm Money !</h1>
                    <p className='pt-5'>Welcome to Paytm Money, your gateway to a world of financial possibilities. Are you ready to take control of your finances, grow your wealth, and secure your future? With Paytm Money, you can make your money work for you. It's time to invest in your dreams!</p>
                    <h4 className='text-lg font-medium py-5'>
                        Start Your Wealth-Building <br/>Journey Today!</h4>
                    <motion.button whileHover={{ scale: 1.2 }} className='btn-props'>Open an Account</motion.button>
                </div>
                <div className="w-full lg:w-1/2 flex justify-center">
                    <img src={hero_img} alt="" className='max-w-full h-auto' />
                </div>
            </div>
        </div>
    );
};