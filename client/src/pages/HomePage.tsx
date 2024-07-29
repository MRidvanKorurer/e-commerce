import React from 'react'
import CategoriesSideBar from '../components/Categories/CategoriesSideBar'
import MainSlider from '../components/Slider/MainSlider'
import FlashProducts from '../components/Products/FlashProducts'
import BestSallingProducts from '../components/Products/BestSallingProducts'
import BuyNowOne from '../components/Products/BuyNowOne'

const HomePage: React.FC = () => {
  return (
    <div className=' flex flex-col gap-y-10'>
      
      <div className=' flex w-full h-full'>
        {/* categories sideBar */}
        <div className=' flex-1 border-r h-[300px]'>
          <CategoriesSideBar />
        </div>

        {/*hero slider */}
        <div className=' flex-[4]'>
          <MainSlider />
        </div>
      </div>

      {/* product sections */}
      <div className=' flex flex-col gap-y-10'>
          <FlashProducts />
          <div>
            <BuyNowOne />
          </div>  
          <BestSallingProducts />
      </div>
    </div>
  )
}

export default HomePage;