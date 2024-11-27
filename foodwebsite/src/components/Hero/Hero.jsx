import React from 'react'
import HeroImg from '../../assets/Hero.png'

function Hero() {
    return (
        <div>
            <div className='container grid grid-cols-1 md:grid-cols-2 gap-8 min-h-[600px] '>
                {/* text section */}
                <div className='flex flex-col justify-center gap-5 text-center md:text-left pt-24 md:p-0 pb-10'>
                    <h1 className='text-3xl font-semi-bold'>Delicious Food Is Waiting For You</h1>
                    <p className=''>
                    Indulge in our mouthwatering, flavorful, and gourmet dishes, crafted with fresh ingredients, tantalizing aromas, and a heavenly taste experience.
                    </p>
                    <div className='flex gap-4 items-center md:justify-start justify-center'>
                        <button className='primary-btn'>Food Menu</button>
                        <button className='secondary-btn'>Book Table</button>
                    </div>
                </div>
                {/* image section */}
                <div className='flex flex-col justify-center'>
                    <img src={HeroImg} alt="" />
                </div>
          </div>
        </div>
    )
}

export default Hero
