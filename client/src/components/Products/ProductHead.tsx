import React from 'react'
import { FaChevronCircleLeft } from "react-icons/fa";
import { FaChevronCircleRight } from "react-icons/fa";


interface IProps {
    content: string
}

const ProductHead: React.FC<IProps> = ({content}) => {
  return (
    <div className=' text-2xl font-bold tracking-wider flex  justify-between items-center w-11/12 mx-auto bg-white py-2 px-5  shadow-xl rounded mb-5'>
        <div>
            {content}
        </div>

        <div className=' flex gap-x-3'>
            <FaChevronCircleLeft className=' text-gray-500 hover:text-orange-600 transition-all cursor-pointer'/>
            <FaChevronCircleRight className=' text-gray-500 hover:text-orange-600 transition-all cursor-pointer'/>
        </div>
    </div>
  )
}

export default ProductHead