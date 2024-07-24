import React from 'react'
import { CiSearch } from "react-icons/ci";
import { FaRegHeart } from "react-icons/fa";
import { RiShoppingBagLine } from "react-icons/ri";


const NavbarRight: React.FC = () => {
  return (
    <div className='flex justify-center items-center gap-x-5'>
        <div className=' flex justify-between items-center relative border w-60'>
            <input type="text" name="" id="" className=' p-1 border-none rounded w-full  ' placeholder='search'/>
            <div className=' absolute right-2'>
                <CiSearch size={19}/>
            </div>
        </div>

        <div className=' cursor-pointer hover:text-orange-600 transition-all'>
            <FaRegHeart size={20}/>
        </div>

        <div className=' cursor-pointer hover:text-orange-600 transition-all'>
            <RiShoppingBagLine size={24}/>
        </div>
    </div>
  )
}

export default NavbarRight