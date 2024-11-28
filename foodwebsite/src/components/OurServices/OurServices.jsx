import React from 'react'
import { FaMobileScreen } from "react-icons/fa6";

function OurServices() {
    return (
        <div className="container">
            {/* Header section */}
            <div className='text-center'>
                <h1 className='text-4xl font-semibold'>Our Services</h1>
            </div>
            {/* icons section */}
            <div>
                <div>
                <FaMobileScreen />
                </div>
            </div>
        </div>
    )
}

export default OurServices
