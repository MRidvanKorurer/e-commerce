import React from 'react'
import ProductHead from './ProductHead'
import { useGetFlashProductsQuery } from '../../redux/services/productApi'
import Loading from '../Helpers/Loading';
import Error from '../Helpers/Error';
import { IProduct } from '../../types/types';
import ProductItem from './ProductItem';

const FlashProducts: React.FC = () => {
  const {data, isLoading, isError} = useGetFlashProductsQuery();

  let content; 

  if(isLoading) {
    content = (
      <div>
        <Loading />
      </div>
    )
  }else if(isError) {
    content = (
      <div>
        <Error />
      </div>
    )
  }else {
    content = (
      <div className=' flex flex-wrap gap-10 justify-center items-center'>
        {
          data?.products.map((item: IProduct) => (
            <ProductItem key={item.id} item={item}/>
          ))
        }
      </div>
    )
  }



  return (
    <div className=' flex flex-col gap-y-5 pt-10 pb-20 border-b-2 relative'>
      <ProductHead content='Flaş Ürünler'/>
      
      <div>
        {content}
      </div>

      <div className=' flex justify-center items-center absolute bottom-2 left-0 right-0'>
        <button className=' bg-black text-white hover:bg-orange-600 px-2 py-1 rounded w-60 transition-all'>Tüm Ürünleri Gör</button>
      </div>
    </div>
  )
}

export default FlashProducts