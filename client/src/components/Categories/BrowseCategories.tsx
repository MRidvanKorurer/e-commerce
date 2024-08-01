import React from 'react'
import { useGetAllCategoryQuery } from '../../redux/services/categoryApi'
import Loading from '../Helpers/Loading';
import { ICategory } from '../../types/types';
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";



const BrowseCategories: React.FC = () => {
    const {data, isLoading} = useGetAllCategoryQuery();

    let content;

    if(isLoading) {
        content = (
            <div>
                <Loading />
            </div>
        )
    }else {
        content = (
            <div className=' flex justify-center items-center gap-x-20'>
                {
                    data?.categories.map((item: ICategory) => (
                        <div key={item.id} className='p-4 bg-white h-32 w-32 rounded-xl shadow-xl cursor-pointer flex flex-col justify-between items-center'>
                            <div className=' w-20 h-20'>
                                <img src="https://www.shutterstock.com/image-vector/default-image-icon-vector-missing-260nw-2079504220.jpg" alt="..." />
                            </div>
                            <div>
                                <p className=' font-bold'>{item.name}</p>
                            </div>
                        </div>
                    ))
                }
            </div>
        )
    }

  return (
    <div className=''>
        <div className=' relative'>
            {content}
            <div className=' absolute top-14 left-0 right-0 w-full flex justify-between px-60'>
                <FaChevronCircleLeft size={24} className=' text-gray-500 hover:text-orange-600 transition-all cursor-pointer'/>
                <FaChevronCircleRight size={24} className='text-gray-500 hover:text-orange-600 transition-all cursor-pointer'/>
            </div>
        </div>
      
    </div>
  )
}

export default BrowseCategories