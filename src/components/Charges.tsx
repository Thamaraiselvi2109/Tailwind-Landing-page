
import { motion } from 'framer-motion'
import charges from '../assets/additional-charges.webp'
import Choose, { ChooseItem } from '../datas/choose'

export const Charges = () => {
    return (
        <>
            <div className="container-props">
                {/* additional charges section */}
                <div className="flex flex-col text-center md:flex-row lg:text-start items-center justify-center p-4">
                    <div className="w-full text-right md:w-2/6">
                        <img src={charges} alt="" className='h-auto' />
                    </div>
                    <div className="w-full md:w-3/6 flex justify-center flex-col">
                        <h1 className='text-h1 md:text-left sm:text-center pb-5'>Additional Charges</h1>
                        <p className='text-base text-left'>
                            <ul>
                                <li><b>Platform Fees:</b> Rs 30 per month.</li>
                                <li><b>Physical Statement and Document:</b> Rs 300 per request + Rs 300 per courier.</li>
                                <li><b>Payment gateway charges (Net banking):</b> Rs 10 for each fund addition.</li>
                                <li><b>Payment gateway charges (UPI):</b> Rs 0 for each fund addition (Free).</li>
                                <li><b>Auto square off charges:</b> Rs 50.</li>
                                <li><b>Delayed Payment Charges:</b> 1.5% per month on the outstanding bill amount.</li>
                            </ul>
                        </p>
                    </div>
                </div>
                {/* why payment */}
                <div className='my-5 cta-flex flex flex-col items-center mx-auto'>
                    <h1 className='text-h1 text-center'>Why Choose Paytm Money?</h1>
                    <p className='font-medium text-gray-900 py-5'>Paytm Money offers investment options that provide a broad range of products and services, allowing users to invest, manage funds, and work towards achieving their financial goals.</p>
                    <motion.button whileHover={{ scale: 1.2 }} className='btn-props'>Open an Account</motion.button>
                    <div className='flex flex-wrap justify-center'>
                        {Choose.map((item: ChooseItem) => (
                            <div className="charges-cont">
                                <div className="charges-props">
                                    <img src={item.img} alt={item.title} />
                                    <h3 className="text-title">{item.title}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                </div>
            </div>
        </>
    )
}