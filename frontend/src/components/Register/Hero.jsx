import React from 'react'
import { Link } from 'react-router-dom';
import Countdown from "@/components/Home/Countdown";
import ProcomSVG from '@/components/Home/ProcomSVG';
import '../../index.css';
const Hero = () => {
    return (
        <div className='h-screen w-full flex flex-col justify-center items-center'>
            <ProcomSVG className='responsive-svg'/>
            <div className='w-full p-10 px-20 flex justify-end items-end h-3/4 md:h-1/2 lg:h-1/3'>
                <div className='bg-[linear-gradient(270deg,#0D32C5_0%,#1768DB_37.9%,#1E8AE9_78.9%,#23A7F4_100%)] bg-clip-text text-transparent font-bold'>
                    <h1 className='text-4xl md:text-3xl lg:text-2xl heading-secondary'>REGISTER AT</h1>
                    <h1 className='text-[9rem] md:text-[6rem] lg:text-[4rem] leading-[1] heading-primary'>PROCOM'25</h1>
                    <p className='text-base md:text-sm lg:text-xs italic tracking-widest'>REGISTRATIONS CLOSING IN</p>
                    <Countdown />
                </div>
            </div>
        </div>
    )
}

export default Hero