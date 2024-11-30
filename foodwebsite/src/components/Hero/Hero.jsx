import React from 'react'
import HeroImg from '../../assets/Hero3.png'

function Hero() {
    return (
        <div>
            <div className='container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px] '>
                {/* text section */}
                <div className='flex flex-col justify-center gap-8 text-center md:text-left pt-24 md:p-0 pb-10'>
                    <h1 className='text-4xl lg:text-6xl font-semibold'>Delicious Food Is Waiting For You</h1>
                    <p className=''>
                    Delicious food is a feast for the senses, combining tantalizing aromas, vibrant colors, and irresistible flavors that create a memorable experience with every bite. It has the power to uplift moods, evoke nostalgia, and even transport you to far-off places through its unique taste and texture. 
                    </p>
                    <div className='flex gap-4 items-center md:justify-start justify-center'>
                        <button className='primary-btn hover:scale-105 duration-200'>Food Menu</button>
                        <button className='secondary-btn text-black hover:scale-105 duration-200'>Book Table</button>
                    </div>
                </div>
                {/* image section */}
                <div className='flex flex-col justify-center'>
                    <img src={HeroImg} alt="" className=" animate-spin-slow img-shadow w-[400px]  mx-auto " />
                </div>
          </div>
        </div>
    )
}

export default Hero
