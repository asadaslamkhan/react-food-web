import React from 'react'

function Navbar() {
  return (
    <div className='py-4'>
       <div className='container flex justify-between items-center'>
        {/* logo section */}
        <div>
           <p className='text-lg font-semibold'>Food <span className='text-red-500'>Bank</span></p> 
        </div>
        {/* menu section */}
        <div>
            <ul className='flex gap-8'>
                <li className="hover:border-b-2 border-primary uppercase">Home</li>
                <li className="hover:border-b-2 border-primary uppercase">Menu</li>
                <li className="hover:border-b-2 border-primary uppercase">About</li>
            </ul>
        </div>
        {/* Login section */}
        <div>
            <img src={""} alt="" />
        </div>
       </div>
    </div>
  )
}

export default Navbar
