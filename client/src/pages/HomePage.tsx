import React from 'react'
import CategoriesSideBar from '../components/Categories/CategoriesSideBar'
import MainSlider from '../components/Slider/MainSlider'

const HomePage: React.FC = () => {
  return (
    <div className=' flex gap-x-3'>

      {/* categories sideBar */}
      <div className=' flex-1 border-r h-[600px]'>
        <CategoriesSideBar />
      </div>

      {/*hero slider */}
      <div className=' flex-[4]'>
        <MainSlider />
      </div>

    </div>
  )
}

export default HomePage