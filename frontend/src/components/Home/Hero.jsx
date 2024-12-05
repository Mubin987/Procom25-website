import React from 'react'
import { Link } from 'react-router-dom';
import Countdown from "./Countdown";
const Hero = () => {
    return (
        <div className='flex'>
            <div className='w-[35%]'>
                <img src="/Procom-Logo.png" alt="" className='opacity-40 w-[440px] ' />
            </div>
            <div className='flex flex-col justify-center'>
                <p style={{...styles.commonStyle,  ...styles.presents}} className=''>FAST-NUCES PRESENTS,</p>
                <h1 style={{...styles.commonStyle, ...styles.headingProcom}} className=''>PROCOM'25</h1>
                <div className="flex flex-col items-end my-8">
                    <p className='font-bold text-[23px] my-2 tracking-wider'>READY TO COMPETE?</p>
                    <Link to="/register"><button className="px-12 py-2 text-[20px] tracking-wider border-2 border-[#23A7F4] text-[#23A7F4] font-bold rounded-lg hover:bg-[#23A7F4] hover:text-black transition duration-300">
                        REGISTER NOW</button>
                    </Link>
                </div>
                <div className='flex-2 relative'>
                    <Countdown />
                </div>
            </div>
        </div>
    )
}

const styles = {
    commonStyle: {
        background: "linear-gradient(270deg, #0D32C5 0%, #23A7F4 100%)",
        backgroundClip: "text",
        WebkitBackgroundClip: "text",
        webkitTextFillColor: "transparent",
        fontStyle: "normal",
        fontWeight: 700,
        lineHeight: "normal"
    },
    headingProcom: {
        background: "linear-gradient(270deg, #0D32C5 0%, #23A7F4 100%)",
        fontSize: "168px",
        lineHeight: 0.9,
        marginLeft: "-7px"
    },
    presents: {
        background: "linear-gradient(270deg, #23A7F4 0%, #0D32C5 100%)",
        fontSize: "55px",
        marginBottom: "-8px"
    }
}

export default Hero