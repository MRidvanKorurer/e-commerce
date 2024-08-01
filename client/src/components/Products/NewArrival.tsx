import React from 'react'
import gucci from "../../assets/gucci.png"
import ellipse from "../../assets/ellips.png"
import ps5 from "../../assets/ps5.png"
import woman from "../../assets/woman.png"

const NewArrival: React.FC = () => {
  return (
    <div className=' flex flex-col md:flex-row w-full h-full md:h-[520px] justify-center gap-x-5 px-5'>
        <div className="">
            <div className=' relative h-full w-full'>
                <img src={ps5} alt="ps_five" className=' h-full w-[700px]'/>
                <div className=' absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full z-0'></div>
                <div className=' absolute flex flex-col gap-y-3 bottom-0 z-50 text-white items-start p-4'>
                    <h3 className=' font-bold text-5xl'> PlayStation 5</h3>
                    <p className=' font-semibold'>Oyunun keyfini çıkart!</p>
                    <button className=' border-b-2 hover:border-b-orange-600 transition-all'>Hemen Al</button>
                </div>
            </div>
        </div>

        <div className=' flex flex-col gap-y-5'>
            <div>
                <div className=' relative h-[250px]'>
                    <img src={woman} alt="ps_five" className=' h-full w-full'/>
                    <div className=' absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full z-0'></div>
                    <div className=' absolute flex flex-col gap-y-3 bottom-0 z-50 text-white items-start p-4'>
                        <h3 className=' font-bold text-3xl'> Kadın Modası</h3>
                        <p className=' font-semibold'>Modayı takip et dikkatleri üzerine çek!</p>
                        <button className=' border-b-2 hover:border-b-orange-600 transition-all'>Hemen Al</button>
                    </div>
                </div>
            </div>

            <div className=' flex gap-x-5'>
                <div className=' h-[250px]'>
                    <div className=' relative h-full'>
                    <img src={ellipse} alt="ps_five" className=' h-full w-[500px]'/>
                    <div className=' absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full z-0'></div>
                    <div className=' absolute flex flex-col gap-y-3 bottom-0 z-50 text-white items-start p-4'>
                        <h3 className=' font-bold text-xl'> Müzük Keyfi</h3>
                        <p className=' font-semibold'>Yüksek kalitedeki müzüğin keyifini çıkart!</p>
                        <button className=' border-b-2 hover:border-b-orange-600 transition-all'>Hemen Al</button>
                    </div>
                    </div>
                </div>

                <div className=' h-[250px]'>
                    <div className=' relative h-full'>
                        <img src={gucci} alt="ps_five" className=' h-full w-[500px]'/>
                        <div className=' absolute top-0 left-0 bg-black bg-opacity-50 w-full h-full z-0'></div>
                        <div className=' absolute flex flex-col gap-y-3 bottom-0 z-50 text-white items-start p-4'>
                            <h3 className=' font-bold text-xl'> Gucci Farkı</h3>
                            <p className=' font-semibold'>En iyi markaların ayrıcalıklarından faydalan!</p>
                            <button className=' border-b-2 hover:border-b-orange-600 transition-all'>Hemen Al</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewArrival