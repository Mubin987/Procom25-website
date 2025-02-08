import React from 'react'
import { Link } from 'react-router-dom'
import ThemeBtn1 from '../Commons/ThemeBtn1';
import ImageUplift from '@/animation/ImageUplift';
import { motion } from "framer-motion";

const Card = ({ heading, text, image, link }) => (
    <motion.div className='bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] flex gap-2 w-4/5 mx-auto justify-center sm:justify-between rounded-[32px] sm:rounded-3xl text-white p-6 [box-shadow:11px_15px_23px_0px_#00000040]'
    whileHover={{
        y: -10, // Moves the container upward on hover
        transition: { duration: 0.3, ease: "easeOut" }, // Smooth and responsive
      }}
    >
        <div className='w flex flex-col gap-2 items-center sm:items-start'>
            <div className='sm:hidden m-auto'>
                {/* <img src={image} alt={heading} height={400} width={400} className='w-[260px] sm:w-[300px] object-cover rounded-r-3xl' /> */}
                <ImageUplift img={image} imgStyle={`w-[260px] sm:w-[300px] object-cover rounded-r-3xl`}  alt={heading} height={400} width={400}/>
            </div>
            <h1 className='bg-clip-text text-center font-lemonmilk m-[20px] sm:m-0 sm:text-start text-transparent bg-[linear-gradient(90deg,_#FFFFFF_25.4%,_#A7E2FF_90%)] text-4xl font-bold'>{heading}</h1>
            <p className='hidden sm:inline text-lg font-semibold'>{text}</p>
            {/* <Link to={link} className='[box-shadow:1px_2px_3px_0px_#00000040] font-montserrate bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#D0EFFF_65.4%,_#A7E2FF_100%)] justify-center rounded-full text-[#2169D4] font-bold px-6 py-1.5 w-fit mt-2 sm:mt-0'>
                View Modules
            </Link> */}
            <ThemeBtn1 linkpath={link} text="View Modules" width="fit" height="" extra="font-bold px-6 py-1.5 sm:mt-0" />
        </div>
        <div className='hidden sm:flex m-auto'>
            {/* <img src={image} alt={heading} height={400} width={400} className='w-[200px] object-cover rounded-r-3xl' /> */}
            <ImageUplift img={image} imgStyle={`w-[200px] object-cover rounded-r-3xl`}  alt={heading} height={400} width={400}/>
        </div>
    </motion.div>
);

const Competitions = () => {
    return (
        <section className='w-full flex flex-col items-center justify-center gap-2 my-5 p-4'>
            <h1 className='font-extrabold font-lemonmilk w-4/5 bg-clip-text text-transparent bg-[linear-gradient(90deg,_#434242_25.4%,_#2C2C2C_78.4%,_#161616_100%)] text-4xl sm:text-5xl py-2 text-center'>EXPLORE <span className='font-bold bg-clip-text text-transparent bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] text-4xl sm:text-6xl'>PROCOM'S </span> DYNAMIC COMPETITIONS – CHOOSE YOUR ARENA</h1>
            <div className='flex flex-col gap-4 my-2'>
                {[
                    {
                        heading: "COMPUTER SCIENCE",
                        text: "Compete in the most challenging and innovative competitions in the field of computer science. From coding sprints to algorithmic battles, showcase your programming prowess and problem-solving skills.",
                        image: "/CompetitionsImages/CS.png",
                        link: "/modules?category=cs"
                    },
                    {
                        heading: "ARTIFICIAL INTELLIGENCE",
                        text: "Dive into the exciting world of artificial intelligence. Take on challenges involving machine learning, deep learning, and neural networks to prove you're at the forefront of this evolving technology.",
                        image: "/CompetitionsImages/AI.png",
                        link: "/modules?category=ai"
                    },
                    {
                        heading: "ELECTRICAL ENGINEERING",
                        text: "Explore competitions that test your expertise in circuit design, robotics, and system optimization. Engineer solutions that spark innovation and bring ideas to life.",
                        image: "/CompetitionsImages/EE.png",
                        link: "/modules?category=ee"
                    },
                    {
                        heading: "BUSINESS",
                        text: "Step into the competitive world of business and entrepreneurship. Solve case studies, pitch groundbreaking ideas, and prove your mettle as a visionary leader.",
                        image: "/CompetitionsImages/BUSINESS.png",
                        link: "/modules?category=business"
                    },
                    {
                        heading: "GENERAL COMPETITIONS",
                        text: "Participate in a wide range of creative and intellectual challenges. These competitions are designed for everyone to explore, compete, and excel beyond their comfort zones",
                        image: "/CompetitionsImages/GF.png",
                        link: "/modules?category=general"
                    },
                    {
                        heading: "GAMING",
                        text: "Enter the thrilling arena of gaming competitions. From intense esports battles to game design challenges, show off your skills, strategy, and creativity in the ultimate digital playground.",
                        image: "/CompetitionsImages/GAMING.png",
                        link: "/modules/?category=gaming"
                    }
                ].map((competition, index) => (
                    <Card
                        key={index}
                        heading={competition.heading}
                        text={competition.text}
                        image={competition.image}
                        link={competition.link}
                    />
                ))}
            </div>
        </section>
    )
}

export default Competitions