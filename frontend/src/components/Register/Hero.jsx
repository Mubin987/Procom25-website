import React from 'react'
import Countdown from "@/components/Home/Countdown";
import ProcomSVG from '@/components/Home/ProcomSVG';
const Hero = ({ page }) => {
    return (
        <div className='h-screen w-full flex flex-col justify-center items-center'>
            <ProcomSVG />
            <div className='w-full p-10 px-20 flex justify-end items-end h-3/4'>
                <div className='bg-[linear-gradient(270deg,#0D32C5_0%,#1768DB_37.9%,#1E8AE9_78.9%,#23A7F4_100%)] bg-clip-text text-transparent font-bold'>
                    <h1 className='text-4xl'>{ page == "Register" ? 'REGISTER AT' : 'MODULES IN'}</h1>
                    <h1 className='text-[9rem] leading-[1]'>PROCOM'25</h1>
                    <p className='text-base italic tracking-widest'>REGISTRATIONS CLOSING IN</p>
                    <Countdown />
                </div>
            </div>
        </div>
    )
}

export default Hero