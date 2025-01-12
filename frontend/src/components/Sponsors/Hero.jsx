import React from 'react'
import ProcomSVG from '@/components/Home/ProcomSVG';
import '../../index.css';
const Hero = () => {
    return (
        <div className='h-screen w-full flex flex-col justify-center items-center'>
            <ProcomSVG className={'z-10 left-5'} />
            <div className='relative w-full p-10 px-20 flex justify-end items-end h-3/4 md:h-1/2 lg:h-1/3'>
                <div className='bg-[linear-gradient(270deg,#0D32C5_0%,#1768DB_37.9%,#1E8AE9_78.9%,#23A7F4_100%)] bg-clip-text text-transparent font-bold'>
                    <h1 className='text-[9rem] md:text-[6rem] lg:text-[4rem] leading-[1] heading-primary'>PROCOM'25</h1>
                    <h1 className='text-4xl'>OUR PROUD SPONSORS</h1>
                    <button
                        className="absolute bottom-8 right-20 text-[13px] sm:text-[16px] bg-blue-500 hover:bg-blue-600 text-lg bg-[linear-gradient(90deg,_#218EF1_0%,_#1865DD_50%,_#0E3AC8_100%)] [box-shadow:6px_4px_11.7px_0px_#00000040] font-bold text-white px-5 py-3 rounded-full"
                    >
                        Become a Sponsor
                    </button>
                    {/* <Countdown /> */}
                </div>
            </div>
        </div>
    )
}

export default Hero