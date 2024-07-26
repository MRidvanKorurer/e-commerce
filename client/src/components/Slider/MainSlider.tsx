import React, { useState } from 'react'
import slide1 from "../../assets/slider1.png";
import slide2 from "../../assets/slide2.png";
import slide3 from "../../assets/slider3.png";
import { FaChevronCircleRight } from "react-icons/fa";
import { FaChevronCircleLeft } from "react-icons/fa";



interface ISlider {
  image: string,
  title: string
  content: string,

}

const MainSlider: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);

  const sliderData: ISlider[] = [
    {image: slide1, title: 'Teknolojik Cihazlar', content: "Son model cihazlara uygun fiyatlarla erişim."},
    {image: slide2, title: 'Teknik Destek', content: "Yapılan alışverişlerde teknik destek imkanı."},
    {image: slide3, title: 'Giyim ve Kozmatik', content: "Trendleri takip eden, modaya uygun alışveriş."},
  ]


  const handleNext = () => {
    setCurrentPage((prev) => (prev + 1) % sliderData.length);
  }

  const handlePrev = () => { 
    setCurrentPage((prev) => (prev - 1 + sliderData.length) % sliderData.length);
  }


  return (
    <div className="h-56 sm:h-64 xl:h-80 2xl:h-96 max-h-[300px] shadow-lg shadow-gray-500 rounded max-w-[1000px] mx-auto ">
      <div className=' flex flex-col relative'>
        <div className=' absolute top-0 flex justify-start pl-10 items-center -left-0 w-full h-full font-bold text-4xl text-white z-20'>
          <div className=' flex flex-col items-start gap-y-2'>
            <h2 className=' tracking-widest'>{sliderData[currentPage].title}</h2>
            <p className=' font-light text-sm tracking-widest'>{sliderData[currentPage].content}</p>
          </div>
        </div>
 
        <div>
            <img src={sliderData[currentPage].image} alt="..." className=' w-full h-[300px]'/>
            <div className=' w-full h-full bg-opacity-50 bg-black absolute top-0 left-0'></div>
        </div>

        <div className=' flex gap-x-3 cursor-pointer absolute bottom-5 left-5 z-50 text-orange-700'>
          <FaChevronCircleLeft onClick={handlePrev} size={32} className=' hover:scale-105 transition-all'/>
          <FaChevronCircleRight onClick={handleNext} size={32} className='hover:scale-105 transition-all'/>
        </div>
      </div>
    </div>
  )
}

export default MainSlider