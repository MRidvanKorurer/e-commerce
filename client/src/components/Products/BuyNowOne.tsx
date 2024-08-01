import React from 'react'
import JBL from "../../assets/JBL.png";


const BuyNowOne: React.FC = () => {
  return (
    <div className=' w-10/12 mx-auto h-[400px] bg-black bg-opacity-90 flex justify-between items-center px-5 text-white font-bold rounded shadow-lg shadow-black '>
        <div className=' flex flex-col justify-between items-start h-full py-10'>
            <div>
                <p className=' font-semibold text-orange-500'>Categories</p>
            </div>

            <div>
                <h2 className=' text-3xl'>Kaliteli Müziğin Keyfini Çıkart</h2>
            </div>

            <div className=' flex justify-center items-center gap-x-2 select-none'>
                <div className=' font-light rounded-full p-6 w-16 h-16 bg-white text-black flex flex-col justify-center items-center border-orange-500 border-2'>
                    <span className=' font-bold'>33</span>
                    <p>Saat</p>
                </div>
                <div className=' font-light border-2 rounded-full p-6 w-16 h-16 bg-white text-black flex flex-col justify-center items-center border-orange-500'>
                    <span className=' font-bold'>50</span>
                    <p>Gün</p>
                </div>
                <div className=' font-light border-2 rounded-full p-6 w-16 h-16 bg-white text-black flex flex-col justify-center items-center border-orange-500'>
                    <span className=' font-bold'>2</span>
                    <p>Yıl </p>
                </div>
            </div>

            <div>
                <button className=' bg-orange-600 hover:bg-orange-700 transition-all p-4 rounded text-white w-40'>Hemen Al</button>
            </div>
        </div>

        <div>
            <img src={JBL} alt="" className=''/>
        </div>
    </div>
  )
}

export default BuyNowOne