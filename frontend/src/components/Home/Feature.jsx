import React from 'react';
import { Link } from 'react-router-dom';
import { CarouselPlugin } from './carousel/Carousel';
import './Feature.css';

const Feature = () => {
    return (
        <section className='w-full flex flex-col items-center justify-center gap-2 my-5 p-4 sm:mt-20'>
            <div className="w-4/5 text-center">
                <h1 className='font-extrabold font-lemonmilk  bg-clip-text text-transparent bg-[linear-gradient(90deg,_#434242_25.4%,_#2C2C2C_78.4%,_#161616_100%)] text-4xl sm:text-5xl py-2 text-center'>YEAR AFTER YEAR, WE MAKE <span className='font-bold bg-clip-text text-transparent bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] text-4xl sm:text-6xl'>IT </span> HAPPEN – <br /> HERE'S WHAT WE'RE ALL ABOUT!</h1>
            </div>
            <CarouselPlugin />
            <div className='flex flex-col gap-4 my-2 items-center justify-center w-4/5'>
                {/* <p className='text-center text-lg font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit atque esse libero enim facere consequuntur ipsum illo, nihil voluptatibus reprehenderit! Possimus et laudantium officia reprehenderit tempore voluptatibus nostrum at. Eius expedita ea possimus officia fuga ad ipsa tenetur amet ratione.</p> */}
                <div className=''>
                    <Link to="/about-us" className=''>
                        <button className='text-lg font-montserrate bg-[linear-gradient(90deg,_#218EF1_0%,_#1865DD_50%,_#0E3AC8_100%)] [box-shadow:6px_4px_11.7px_0px_#00000040] font-bold text-white px-6 py-1 rounded-full'>About Us</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Feature;