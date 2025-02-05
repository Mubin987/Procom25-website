import React, { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom';
import ThemeBtn2 from '../Commons/ThemeBtn2';
import Countdown from '../Home/Countdown';
import ProcomSVG from '../Home/ProcomSVG';
import locomotiveScroll from 'locomotive-scroll';
import { useInView } from "react-intersection-observer";
import {motion} from 'framer-motion'


const  AboutUsHero = ()=>{

    const scrollRef = useRef(null);
    const { ref, inView } = useInView({
        triggerOnce: false,
        threshold: 0.5,
      });


  return (
    <div ref={scrollRef} className='scroll-container h-screen w-full flex flex-col justify-center items-center'>
        <ProcomSVG />
        <div ref={ref}className='w-full p-10 px-22 flex sm:justify-end justify-center sm:items-end items-center h-3/4 mt-12 sm:mt-0'>
            <motion.div className='bg-[linear-gradient(270deg,#0D32C5_0%,#1768DB_37.9%,#1E8AE9_78.9%,#23A7F4_100%)] font-lemonmilk bg-clip-text text-transparent font-bold'
                  initial={{ opacity: 0, y: 20 }} // Hidden state (faded and below position)
                  animate={inView ? { opacity: 1, y: 0 }: { opacity: 0, y: 20 }} // Visible state (fully visible and in place)
                  transition={{ duration: 1, ease: "easeOut" }} // Smooth transition
            >
                <h1 className="text-[5vw] sm:text-4xl md:text-[3vw] lg:text-4xl -mb-2 sm:mb-0">Sheikhani Group PRESENTS,</h1>
                <h1 className="text-[14vw] sm:text-[6rem] md:text-[14vw] lg:text-[9rem] leading-[1]">PROCOM'25</h1>
                <div className='w-full flex justify-end'>
                    <div className='flex flex-col justify-center items-center font-montserrate'>
                        <p className="text-[3vw] text-themeDBlue text-end text-xs sm:text-sm tracking-widest mt-2 mb-1 sm:mt-4 sm:mb-2">Together, we shape the future!</p>
                        <div className='flex justify-end'>
                            <a href={`https://docs.google.com/forms/d/e/1FAIpQLScsHqsfQw5xxEvIrvDjv-hsLWSMxAr-aAF_0oEDeQyM_EpNYQ/viewform`} target="_blank" className='group'>
                            <ThemeBtn2 text="Become Ambassador" width="3vw" px="6" py="1.5"/>
                            </a>
                        </div>
                    </div>
                </div>
            </motion.div>
        </div>
        <div className='w-full h-1/4 flex flex-col gap-2 justify-end items-center p-5'>
            <Countdown pageType={`Home`} />
            <h1 className='tracking-[0.1em] text-xl font-outfit'>WE MAKE <span className='text-[#4E95EA] text-4xl'>IT</span> HAPPEN</h1>
        </div>
    </div>
)    
}

export default AboutUsHero