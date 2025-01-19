import React from 'react'
import { Link } from 'react-router-dom'

const Card = ({ heading, text, image, link }) => (
    <div className='bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] flex gap-2 w-4/5 mx-auto justify-center sm:justify-between rounded-[32px] sm:rounded-3xl text-white p-6 [box-shadow:11px_15px_23px_0px_#00000040]'>
        <div className='w flex flex-col gap-2 items-center sm:items-start'>
            <div className='sm:hidden m-auto'>
                <img src={image} alt={heading} height={400} width={400} className='w-[300px] object-cover rounded-r-3xl' />
            </div>
            <h1 className='bg-clip-text text-center font-lemonmilk sm:text-start text-transparent bg-[linear-gradient(90deg,_#FFFFFF_25.4%,_#A7E2FF_90%)] text-4xl font-bold'>{heading}</h1>
            <p className='hidden sm:inline text-lg font-semibold'>{text}</p>
            <Link to={link} className='[box-shadow:1px_2px_3px_0px_#00000040] font-montserrate bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#D0EFFF_65.4%,_#A7E2FF_100%)] justify-center rounded-full text-[#2169D4] font-bold px-6 py-1.5 w-fit mt-2 sm:mt-0'>
                View Modules
            </Link>
        </div>
        <div className='hidden sm:flex m-auto'>
            <img src={image} alt={heading} height={400} width={400} className='w-[200px] object-cover rounded-r-3xl' />
        </div>
    </div>
);

const Competitions = () => {
    return (
        <section className='w-full flex flex-col items-center justify-center gap-2 my-5 p-4'>
            <h1 className='font-extrabold font-lemonmilk w-4/5 bg-clip-text text-transparent bg-[linear-gradient(90deg,_#434242_25.4%,_#2C2C2C_78.4%,_#161616_100%)] text-4xl sm:text-5xl py-2 text-center'>EXPLORE <span className='font-bold bg-clip-text text-transparent bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] text-4xl sm:text-6xl'>PROCOM'S </span> DYNAMIC COMPETITIONS – CHOOSE YOUR ARENA</h1>
            <div className='flex flex-col gap-4 my-2'>
                {[
                    {
                        heading: "COMPUTER SCIENCE",
                        text: "Compete in the most challenging and innovative competitions in the field of computer science.",
                        image: "/CompetitionsImages/CS.png",
                        link: "/modules"
                    },
                    {
                        heading: "ELECTRICAL ENGINEERING",
                        text: "Compete in the most challenging and innovative competitions in the field of electrical engineering.",
                        image: "/CompetitionsImages/EE.png",
                        link: "/modules"
                    },
                    {
                        heading: "ROBOTICS",
                        text: "Compete in the most challenging and innovative competitions in the field of Robotics.",
                        image: "/CompetitionsImages/ROBOTICS.png",
                        link: "/modules"
                    },
                    {
                        heading: "ARTIFICIAL INTELLIGENCE",
                        text: "Compete in the most challenging and innovative competitions in the field of artificial intelligence.",
                        image: "/CompetitionsImages/AI.png",
                        link: "/modules"
                    },
                    {
                        heading: "GENERAL FIELDS",
                        text: "Compete in the most challenging and innovative competitions in the field of general fields.",
                        image: "/CompetitionsImages/GF.png",
                        link: "/modules"
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