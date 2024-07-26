import React from 'react'
import { ICategory } from '../../types/types'
import { FaChevronRight } from "react-icons/fa";


interface IProps {
    item: ICategory
}

const CategoryItem: React.FC<IProps> = ({item}) => {


  return (
    <div className=' cursor-pointer'>
        <ul>
            <li>
                <div className=' flex justify-between items-center px-3 hover:bg-black hover:text-white transition-all py-3'>
                    <p>{item.name}</p>
                    <FaChevronRight />
                </div>
            </li>
        </ul>
    </div>
  )
}

export default CategoryItem