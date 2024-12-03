import React from 'react'
import Countdown from "./Countdown";
const Hero = () => {
    return (
        <div className='flex'>
            <div className='flex-1'>
                <img src="/Procom-Logo.png" alt="" className='opacity-40 w-[340px]' />
            </div>
            <div className='flex-2 relative'>
                <Countdown />
            </div>
        </div>
    )
}

export default Hero