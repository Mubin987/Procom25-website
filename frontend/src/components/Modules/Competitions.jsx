import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { motion } from "framer-motion";

const Card = ({ heading, text, image, comps }) => {
    return (
        <motion.div className='bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] flex flex-col gap-8 w-4/5 mx-auto rounded-[32px] sm:rounded-3xl text-white p-6 [box-shadow:11px_15px_23px_0px_#00000040]'
        whileHover={{
            y: -10, // Moves the container upward on hover
            transition: { duration: 0.3, ease: "easeOut" }, // Smooth and responsive
          }}>
            <div className='flex gap-2 justify-center sm:justify-between'>
                <div className='w flex flex-col gap-2 items-center sm:items-start'>
                    <div className='sm:hidden m-auto'>
                        <img src={image} alt={heading} height={400} width={400} className='w-[300px] object-cover rounded-r-3xl' />
                    </div>
                    <h1 className='font-lemonmilk bg-clip-text text-center sm:text-start text-transparent bg-[linear-gradient(90deg,_#FFFFFF_25.4%,_#A7E2FF_90%)] text-4xl font-bold'>{heading}</h1>
                    <p className='hidden sm:inline text-lg font-semibold'>{text}</p>
                </div>
                <div className='hidden sm:flex m-auto'>
                    <img src={image} alt={heading} height={400} width={400} className='w-[200px] object-cover rounded-r-3xl' />
                </div>
            </div>
            <div className='flex flex-wrap w-full gap-4 justify-center items-center'> 
                {(comps || []).map((comp, index) => (
                    <Link

                        to={`${comp.title.split(' ').join('-')}`}
                        key={index}
                        className='border-2 p-4 gap-1 hover:scale-110 duration-200  w-full sm:w-[150px] relative sm:h-[120px] cursor-pointer px-4 bg-transparent flex flex-col justify-start items-center rounded-2xl'
                    >
                        <img
                            src={comp.badge}
                            alt={comp.title}
                            height={200}
                            width={200}
                            className='w-2/3 sm:w-1/3'
                            whileHover={{
                                scale: 1.2, // Slightly enlarges the image on hover
                                transition: { duration: 0.2, ease: "easeOut" },
                              }}
                        />
                        <h1 className='font-bold text-white text-center text-lg sm:text-sm mx-2 flex-start'>
                            {comp.title}
                        </h1>
                    </Link>
                ))}

            </div>
        </motion.div>
    )
}

const Competitions = () => {
    const [competitions, setCompetitions] = useState({ CS: [], EE: [], business: [], AI: [], general: [], Gaming: [] })

    useEffect(() => {
        axios
            .get("https://procom25-server.vercel.app/competition")
            .then((res) => {
                const updatedCompetitions = { CS: [], EE: [], business: [], AI: [], general: [], Gaming: [] };
                res.data.forEach((compet) => {
                    console.log(compet);
                    updatedCompetitions[compet.department].push(compet);
                });
                console.log(updatedCompetitions);
                setCompetitions(updatedCompetitions);
            })
            .catch((error) => console.error("Error fetching competitions:", error));
    }, []);

    const comps = [
        {
            heading: "COMPUTER SCIENCE",
            text: "Compete in the most challenging and innovative competitions in the field of computer science. From coding sprints to algorithmic battles, showcase your programming prowess and problem-solving skills.",
            image: "/CompetitionsImages/CS.png",
            Department: "CS",
        },
        {
            heading: "ELECTRICAL ENGINEERING",
            text: "Explore competitions that test your expertise in circuit design, robotics, and system optimization. Engineer solutions that spark innovation and bring ideas to life.",
            image: "/CompetitionsImages/EE.png",
            Department: "EE",
        },
        {
            heading: "Business",
            text: "Step into the competitive world of business and entrepreneurship. Solve case studies, pitch groundbreaking ideas, and prove your mettle as a visionary leader.",
            image: "/CompetitionsImages/ROBOTICS.png",
            Department: "business",
        },
        {
            heading: "ARTIFICIAL INTELLIGENCE",
            text: "Dive into the exciting world of artificial intelligence. Take on challenges involving machine learning, deep learning, and neural networks to prove you're at the forefront of this evolving technology.",
            image: "/CompetitionsImages/AI.png",
            Department: "AI",
        },
        {
            heading: "GENERAL FIELDS",
            text: "Participate in a wide range of creative and intellectual challenges. These competitions are designed for everyone to explore, compete, and excel beyond their comfort zones",
            image: "/CompetitionsImages/GF.png",
            Department: "general",
        },
        {
            heading: "GAMING",
            text: "Enter the thrilling arena of gaming competitions. From intense esports battles to game design challenges, show off your skills, strategy, and creativity in the ultimate digital playground.",
            image: "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737569514/gaming_controller_utofcm.png",
            link: "/modules",
            Department: "Gaming",
        }
    ];


    return (
        <div className='my-28 mt-32 flex flex-col gap-8' id='competitions'>
            {comps.map((comp, index) => (
                <Card
                    key={index}
                    heading={comp.heading}
                    text={comp.text}
                    image={comp.image}
                    comps={competitions[comp.Department]}
                />
            ))}
        </div>
    )
}

export default Competitions