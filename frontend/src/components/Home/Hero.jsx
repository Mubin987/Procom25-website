import React from 'react'
import { Link } from 'react-router-dom';
import Countdown from "./Countdown";
import ProcomSVG from './ProcomSVG';
const Hero = () => {
    return (
        <div className='h-screen w-full flex flex-col justify-center items-center'>
            <ProcomSVG />
            <div className='w-full p-10 px-20 flex justify-end items-end h-3/4'>
                <div className='bg-[linear-gradient(270deg,#0D32C5_0%,#1768DB_37.9%,#1E8AE9_78.9%,#23A7F4_100%)] bg-clip-text text-transparent font-bold'>
                    <h1 className='text-4xl'>FAST-NUCES PRESENTS,</h1>
                    <h1 className='text-[9rem] leading-[1]'>PROCOM'25</h1>
                    <p className='text-themeDBlue text-end text-sm tracking-widest'>READY TO COMPETE?</p>
                    <div className='flex justify-end'>
                        <Link to="/register" className=''>
                            <button className='text-lg bg-[linear-gradient(90deg,_#218EF1_0%,_#1865DD_50%,_#0E3AC8_100%)] [box-shadow:6px_4px_11.7px_0px_#00000040] font-bold text-white px-6 py-1 rounded-full'>Register Now</button>
                        </Link>
                    </div>
                </div>
            </div>
            <div className='w-full h-1/4 flex flex-col gap-2 justify-end items-center p-5'>
                <Countdown />
                <h1 className='tracking-[0.1em] text-xl'>WE MAKE <span className='text-[#4E95EA] text-4xl'>IT</span> HAPPEN</h1>
            </div>
        </div>
    )
}

export default Hero