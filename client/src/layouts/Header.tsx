import React, { useState } from 'react'
import { FaChevronDown } from "react-icons/fa";
import { FaRegWindowClose } from "react-icons/fa";


const Header: React.FC = () => {
    const [closeHeader, setCloseHeader] = useState<boolean>(false);


  return (
    closeHeader ? (null) : (
        <div className=' relative bg-black text-white h-10 flex justify-center gap-x-20 items-center font-light '>
            <div className=' flex justify-center items-center gap-x-2'>
                <p>Summer Sale For All Swim Suits And Free Express Delivery - OFF 50%!</p>

                <button className=' underline'>ShopNow</button>
            </div>

            <div>
                <div className=' flex justify-center items-center gap-x-2'>
                    <ul>
                        <li>English</li>
                    </ul>
                    <div className=' cursor-pointer'>
                        <FaChevronDown />
                    </div>
                </div>
            </div>


            <div onClick={() => setCloseHeader(true)} className=' absolute right-5 cursor-pointer hover:text-red-600 transition-all'>
                <FaRegWindowClose size={20} />
            </div>
        </div>
    )
  )
}

export default Header