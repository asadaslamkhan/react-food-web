import React from 'react'
import BannerImg from "../../assets/hero2.png"

function Banner() {
  return (
    <>
      <div className="container py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* img section */}
          <div className="flex justify-center items-center">
            <img src={BannerImg} alt="" />
          </div>
          {/* text section */}
          <div className="flex flex-col justify-center">
            <h1 className="text-4xl font-semibold">Food Is Always Good</h1>
            <p className="py-4 font-semibold">
            Food is always good because it not only nourishes the body but also brings people together, creating moments of joy and connection. From the comforting warmth of a home-cooked meal to the exciting flavors of global cuisines, food has the power to evoke emotions, spark creativity, and tell stories of culture and tradition.{" "}
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default Banner
