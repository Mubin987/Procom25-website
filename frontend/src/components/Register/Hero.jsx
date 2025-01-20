import React from 'react'
import Countdown from "@/components/Home/Countdown";
import ProcomSVG from '@/components/Home/ProcomSVG';
const Hero = ({ page }) => {
    return (
        <div className='h-screen w-full flex flex-col justify-center items-center'>
            <ProcomSVG />
            <div className='w-full p-10 px-20 flex sm:justify-end justify-center sm:items-end items-center h-3/4 mt-12 sm:mt-0'>
                <div className='font-lemonmilk bg-[linear-gradient(270deg,#0D32C5_0%,#1768DB_37.9%,#1E8AE9_78.9%,#23A7F4_100%)] bg-clip-text text-transparent font-bold'>
                    <h1 className='text-[5vw] sm:text-4xl md:text-[3vw] lg:text-4xl -mb-2 sm:mb-0'>{ page == "Register" ? 'REGISTER AT' : 'MODULES IN'}</h1>
                    <h1 className='text-[14vw] sm:text-[6rem] md:text-[14vw] lg:text-[9rem] leading-[1]'>PROCOM'25</h1>
                    <p className='italic text-xs font-montserrate sm:text-sm tracking-widest mt-2 mb-1 sm:mt-4 sm:mb-2'>REGISTRATIONS CLOSING IN</p>
                    <Countdown />
                </div>
            </div>
        </div>
    )
}

export default Hero