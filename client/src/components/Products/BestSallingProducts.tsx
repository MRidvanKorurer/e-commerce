import React from 'react'
import ProductHead from './ProductHead'
import { useGetTopSalesProductsQuery } from '../../redux/services/productApi'
import Error from '../Helpers/Error';
import Loading from '../Helpers/Loading';
import { IProduct } from '../../types/types';
import ProductItem from './ProductItem';
import { CgChevronDoubleRightR } from 'react-icons/cg';

const BestSallingProducts: React.FC = () => {
    const {data, isLoading, isError} = useGetTopSalesProductsQuery();

    let content;

    if(isError) {
        content = (
            <Error />
        )
    }else if(isLoading) {
        content = (
            <div>
                <Loading />
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
        <ProductHead content='En Çok Satan Ürünler'/>
        <div>
            {content}
        </div>
        <div className=' flex justify-center items-center absolute bottom-2 left-0 right-0'>
        <button className=' bg-black text-white hover:bg-orange-600 px-2 py-1 rounded w-60 transition-all flex justify-center gap-x-5 items-center '>
          <p>Tüm Ürünleri Gör</p>
        <CgChevronDoubleRightR size={20}/>
        </button>
      </div>
    </div>
  )
}

export default BestSallingProducts;