import React from 'react'
import { Link } from 'react-router-dom';
import Countdown from "./Countdown";
const Hero = () => {
    return (
        <div className='flex'>
            <div className='basis-[25%]'>
                <img src="/Procom-Logo.png" alt="" className='opacity-40 h-screen' />
            </div>
            <div className='basis-[75%] flex flex-col justify-center'>
                <div className='flex items-center justify-center  basis-[75%] p-4'>
                    <div>
                        <h1 className='text-4xl font-extrabold text-left [text-underline-position:from-font] [text-decoration-skip-ink:none] bg-gradient-to-r from-[#0D32C5] to-[#23A7F4]  text-transparent bg-clip-text'>FAST-NUCES PRESENTS,</h1>
                        <h1 className=' text-[10rem] font-extrabold leading-[140px] text-left [text-underline-position:from-font] [text-decoration-skip-ink:none] bg-gradient-to-r from-[#23A7F4] to-[#0D32C5] text-transparent bg-clip-text'>PROCOM'25</h1>
                        <div className='flex w-full flex-col items-end mt-5'>
                            <p className=' text-[20px] font-extrabold leading-[25.2px] tracking-[0.07em] text-left [text-underline-position:from-font] [text-decoration-skip-ink:none]'>READY TO COMPETE?</p>
                            <Link to="/register">
                                <button className='border-[2px] border-[solid] border-[#22A3F2] text-[#22A3F2] hover:rounded duration-200 rounded-[10px] py-1 px-10 mt-1 text-[18px] font-bold leading-[24.31px] text-left [text-underline-position:from-font] [text-decoration-skip-ink:none]'>REGISTER NOW</button>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className='w-full  flex justify-end basis-[25%]'>
                    <Countdown />
                </div>
            </div>
        </div>
    )
}

export default Hero