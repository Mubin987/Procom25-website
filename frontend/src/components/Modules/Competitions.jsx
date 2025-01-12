import React from 'react'
import { Link } from 'react-router-dom';

const Card = ({ heading, text, image, comps }) => {
    return (
        <div className='bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] flex flex-col gap-8 w-4/5 mx-auto rounded-[32px] sm:rounded-3xl text-white p-6 [box-shadow:11px_15px_23px_0px_#00000040]'>
            <div className='flex gap-2 justify-center sm:justify-between'>
                <div className='w flex flex-col gap-2 items-center sm:items-start'>
                    <div className='sm:hidden m-auto'>
                        <img src={image} alt={heading} height={400} width={400} className='w-[300px] object-cover rounded-r-3xl' />
                    </div>
                    <h1 className='bg-clip-text text-center sm:text-start text-transparent bg-[linear-gradient(90deg,_#FFFFFF_25.4%,_#A7E2FF_90%)] text-4xl font-bold'>{heading}</h1>
                    <p className='hidden sm:inline text-lg font-semibold'>{text}</p>
                </div>
                <div className='hidden sm:flex m-auto'>
                    <img src={image} alt={heading} height={400} width={400} className='w-[200px] object-cover rounded-r-3xl' />
                </div>
            </div>
            <div className='flex flex-wrap w-full px-5 gap-4 justify-evenly items-center'>
                {comps.map((comp, index) => (
                    <Link to={comp.link} key={index} className='w-full sm:w-[120px] aspect-square cursor-pointer px-4 bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#D0EFFF_65.4%,_#A7E2FF_100%)] flex flex-col gap-2 justify-center items-center [box-shadow:11px_15px_23px_0px_#00000040] rounded-3xl'>
                        <img src={comp.image} alt={comp.heading} height={200} width={200} className='w-2/3 sm:w-[60px] object-cover' />
                        <h1 className='font-bold text-themeBlue text-center text-lg sm:text-sm'>{comp.heading}</h1>
                    </Link>
                ))}
            </div>
        </div>
    )
}

const Competitions = () => {

    const comps = [
        {
            heading: "Computer Science",
            text: "Compete in the most challenging and innovative competitions in the field of computer science.",
            image: "/CompetitionsImages/CS.png",
            comps: [
                {
                    heading: "Webb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Appb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Gameb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Gameb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Gameb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Gameb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                }
            ]
        },
        {
            heading: "Electrical Engineering",
            text: "Compete in the most challenging and innovative competitions in the field of electrical engineering.",
            image: "/CompetitionsImages/EE.png",
            comps: [
                {
                    heading: "Webb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Appb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Gameb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Gameb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Gameb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Gameb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                }
            ]
        },
        {
            heading: "Robotics",
            text: "Compete in the most challenging and innovative competitions in the field of robotics.",
            image: "/CompetitionsImages/ROBOTICS.png",
            comps: [
                {
                    heading: "Webb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Appb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Gameb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Gameb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Gameb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Gameb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                }
            ]
        },
        {
            heading: "Artificial Intelligence",
            text: "Compete in the most challenging and innovative competitions in the field of artifical intelligence.",
            image: "/CompetitionsImages/AI.png",
            comps: [
                {
                    heading: "Webb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Appb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Gameb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Gameb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Gameb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Gameb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                }
            ]
        },
        {
            heading: "General Fields",
            text: "Compete in the most challenging and innovative competitions in the field of general fields.",
            image: "/CompetitionsImages/GF.png",
            comps: [
                {
                    heading: "Webb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Appb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Gameb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Gameb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Gameb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                },
                {
                    heading: "Gameb",
                    image: "/CompetitionsImages/CS.png",
                    link: "Webb"
                }
            ]
        }
    ];

    return (
        <div className='my-28 mt-32 flex flex-col gap-8'>
            {comps.map((comp, index) => (
                <Card
                    key={index}
                    heading={comp.heading}
                    text={comp.text}
                    image={comp.image}
                    comps={comp.comps}
                />
            ))}
        </div>
    )
}

export default Competitions