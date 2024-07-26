import React from 'react'
import { useGetAllCategoryQuery } from '../../redux/services/categoryApi'
import Loading from '../Helpers/Loading';
import Error from '../Helpers/Error';
import { ICategory } from '../../types/types';
import CategoryItem from './CategoryItem';

const CategoriesSideBar: React.FC = () => {
    const {data: categoriesData, isError, isLoading} = useGetAllCategoryQuery();

    let content; 

    if(isLoading) {
      content = (
        <div className=' w-full h-full flex justify-center mt-10'>
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
        <div>
            {
              categoriesData?.categories.map((item: ICategory) => (
                <CategoryItem key={item.id} item={item}/>
              ))
            }
        </div>
      )
    }

  return (
    <div>
      {content}
    </div>
  )
}

export default CategoriesSideBar