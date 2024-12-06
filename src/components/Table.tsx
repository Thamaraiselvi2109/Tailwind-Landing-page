import { motion } from "framer-motion";
import tableData, { TABLETYPE } from "../datas/tableData";

export const Table = () => {
    return (
        <div className="container-props flex flex-col items-center">
            <h2 className="text-h1">Maximum brokerage charged per trade is Rs 20</h2>
            <motion.button whileHover={{ scale: 1.2 }} className='btn-props my-10'>Open an Account</motion.button>

            <h2 className="text-h1">Paytm Money Brokerage Charges 2024</h2>
            <p className="font-medium text-gray-900 py-5">
                Paytm Money employs a straightforward brokerage plan, charging either a flat Rs 20 or 0.05% of the order's value (whichever is lower) for intraday trading. The maximum brokerage cost per order remains capped at Rs 20 for all trading segments.
            </p>
            <p className="font-medium text-gray-900 py-5">
                Brokerage charges for different trading segments on Paytm Money are as follows:
            </p>
            <div className="w-half">
                <table className="table-auto border-collapse border border-gray-400 w-full text-left">
                    <thead>
                        <tr className="bg-gray-200">
                            <th className="border border-gray-400 px-4 py-2">Trading Segment</th>
                            <th className="border border-gray-400 px-4 py-2">Brokerage Charges</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((item: TABLETYPE) => (
                            <tr key={item.id}>
                                <td className="border border-gray-400 px-4 py-2">{item.segment}</td>
                                <td className="border border-gray-400 px-4 py-2">{item.chargers}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <div className="btn lg:w-4/6 flex-col md:rounded-full md:flex-row p-5 mt-10 sm:rounded-lg flex justify-between items-center">
                <div className="cta-flex"><p className="lg:text-left md:text-left lg:pl-5 text-white  sm:text-center">In addition to brokerage costs, traders should consider various other fees (transaction and regulatory charges, Demat charges) imposed by Paytm Money:</p></div>
                <div className="cta-flex">
                    <motion.button whileTap={{ scale: 0.9 }} className='btn-props-white my-5'>Open an Account</motion.button>
                </div>
            </div>
        </div>
    );
};
