import React from 'react'
import { IProduct } from '../../types/types'
import { FaRegHeart } from "react-icons/fa";
import { IoEyeOutline } from "react-icons/io5";
import { Rating } from "flowbite-react";

interface IProps {
    item: IProduct
}

const ProductItem: React.FC<IProps> = ({ item }) => {
    return (
        <div className='relative w-[350px] rounded bg-white shadow-xl group'>
            <div className='relative'>
                <div>
                    <img className='rounded w-full' src="https://www.shutterstock.com/image-vector/default-image-icon-vector-missing-260nw-2079504220.jpg" alt="" />
                </div>

                <div className='absolute left-2 top-3'>
                    <span className='px-4 py-1 bg-red-600 text-white rounded'>-{item.discount}%</span>
                </div>

                <div className='absolute right-2 top-3 flex flex-col gap-y-3'>
                    <div className='bg-white p-2 rounded-full'>
                        <FaRegHeart size={21} className='text-black cursor-pointer hover:text-orange-600 transition-all' />
                    </div>
                    <div className='bg-white p-2 rounded-full'>
                        <IoEyeOutline size={22} className='text-black cursor-pointer hover:text-orange-600 transition-all' />
                    </div>
                </div>
            </div>

            <div className='p-4'>
                <a className='font-semibold tracking-wider' href="#">{item.name}</a>
                <div className='flex gap-x-5'>
                    <span className=' font-bold text-lg'>₺{item.price}</span>
                </div>
                <div className='flex items-center'>
                    <span className='mr-2'>{item.rating}</span>
                    <Rating>
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star />
                        <Rating.Star filled={false} />
                    </Rating>
                </div>
            </div>

            <div className='absolute bottom-2 right-2 flex justify-center opacity-0 group-hover:opacity-100 transition-opacity'>
                <button className='px-4 py-2 bg-black text-white rounded hover:bg-orange-600 transition-all'>
                    Sepete Ekle
                </button>
            </div>
        </div>
    )
}

export default ProductItem