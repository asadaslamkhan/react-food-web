import React from 'react';
import Profile from "../../assets/Profile.png"
import { MdOutlineKeyboardArrowDown } from "react-icons/md";

function Navbar() {
  return (
    <div className='py-4'>
      <div className='container flex justify-between items-center'>
        {/* logo section */}
        <div>
          <p className='text-lg font-semibold'>Food <span className='text-red-500'>Bank</span></p>
        </div>
        {/* menu section */}
        <div className='flex justify-center items-center gap-6'>
          <ul className=' gap-8 hidden sm:flex'>
            <li className="hover:border-b-2 border-primary uppercase">Home</li>
            <li className="hover:border-b-2 border-primary uppercase">Menu</li>
            <li className="hover:border-b-2 border-primary uppercase">About</li>
          </ul>
        </div>
        {/* Login section */}
        <div className='flex gap-4 items-center' >
          <img src={Profile} alt="" className='w-10 rounded-full' />
          <MdOutlineKeyboardArrowDown />
        </div>
      </div>
    </div>
  )
}

export default Navbar
