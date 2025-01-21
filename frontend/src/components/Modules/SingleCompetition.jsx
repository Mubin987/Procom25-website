import Heading1 from '@/components/Commons/Heading1';
import { ArrowDownCircleIcon, LucideDollarSign, User2Icon } from "lucide-react"
import React from 'react'
import { Link } from 'react-router-dom';
import { Button } from '../ui/button';

const DetailBox = ({ isIcon, IconPath, value, title, width }) => {
    return (
        <div className={"flex md:gap-2 flex-col w-full md:w-" + width}>
            <div className="flex rounded-full [box-shadow:6px_7px_20px_2px_#00000040]">
                <div className="bg-[linear-gradient(180deg,_#1F95ED_0%,_#2169D4_100%)] rounded-l-full p-3 flex items-center justify-center w-14">
                    {isIcon ? <IconPath /> :
                        <img src={IconPath} alt={IconPath} height={35} width={35} className='object-cover rounded-r-3xl' />}
                </div>
                <div className="bg-white rounded-r-full flex justify-center py-3 px-6 flex-1">
                    <span className="text-gray-800 text-[1.5rem] font-bold pr-[15%] leading-2">{value}</span>
                </div>
            </div>
            <p className="text-white font-lemonmilk text-center text-sm mt-1 italic uppercase tracking-wider font-medium">
                {title}
            </p>
        </div>
    )
}

const SingleCompetition = ({ module }) => {
    console.log(module)

    let moduleHeading = "";
    if (module.department === "CS") {
        moduleHeading = "Computer Science";
    } else if (module.department === "EE") {
        moduleHeading = "Electrical Engineering";
    }
    else if (module.department === "Business") {
        moduleHeading = "Business Competition";
    }
    else if (module.department === "AI") {
        moduleHeading = "Artificial Intelligence";
    }
    else if (module.department === "General") {
        moduleHeading = "General Competition";
    }
    
    return (
        <div className='w-full flex flex-col justify-center items-center gap-4 my-32'>
            <Heading1 text={moduleHeading} className="tracking-wider" />
            <div className='bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] flex flex-col gap-8 max-w-[1000px] w-4/5 w-custom mx-auto rounded-[32px] sm:rounded-3xl text-white p-10 [box-shadow:11px_8px_8px_3px_#00000040]'>
                <div className='flex gap-2 justify-center sm:justify-evenly'>
                    <div className='w flex flex-col gap-2 items-center sm:items-start'>
                        <div className='flex md:hidden m-auto w-4/5 bg-[linear-gradient(90deg,_#FFFFFF_25.4%,_#caeaf9_90%)] rounded-[18px] [box-shadow:11px_15px_23px_0px_#00000040]'>
                            <img src={module.badge} alt={module.title} className='w-full object-cover rounded-r-3xl' />
                        </div>
                        <h1 className='font-lemonmilk bg-clip-text text-center sm:text-start text-transparent bg-[linear-gradient(90deg,_#FFFFFF_25.4%,_#caeaf9_90%)] text-4xl md:text-[3rem] font-bold tracking-tight leading-[45px] uppercase'>{module.title}</h1>
                        <p className='text-lg font-semibold'>{module.subtitle}</p>
                    </div>
                    <div className='hidden md:flex w-[500px] bg-[linear-gradient(90deg,_#FFFFFF_25.4%,_#caeaf9_90%)] rounded-[18px] [box-shadow:11px_8px_8px_3px_#00000040]'>
                        <img src={module.badge} alt={module.title} className='w-full object-cover rounded-r-3xl' />
                    </div>
                </div>
                <div className='flex flex-col items-center w-full gap-4'>
                    <h1 className='font-lemonmilk bg-clip-text text-transparent bg-[linear-gradient(90deg,_#FFFFFF_25.4%,_#caeaf9_90%)] text-5xl font-bold mt-10 uppercase mb-5 tracking-widest'>General Details</h1>
                    <div className="flex gap-4 flex-col md:flex-row justify-between w-10/12 sm:w-4/5">
                        <DetailBox isIcon={true} IconPath={() => (<LucideDollarSign />)} value={module.fee} title="Registration Fee" width="2/5" />
                        <DetailBox isIcon={true} IconPath={() => (<User2Icon />)} value={`${module.min_team_size} - ${module.max_team_size}`} title="Members Limit" width="2/5" />
                    </div>
                    <div className="rounded-[9rem] flex items-center w-[14rem] sm:w-[18rem] h-14 [box-shadow:6px_7px_20px_2px_#00000040] bg-white">
                        <div className="flex">
                            <div className="p-3 flex items-center justify-center w-14">
                                <ArrowDownCircleIcon className="text-[#217ade]" size={40} />
                            </div>
                            <a href={`${module.rulebook.book_url}`} target="_blank" className="flex flex-col py-3 justify-center px-2 sm:px-6">
                                <span className="text-[#217ade] text-sm sm:text-base font-bold -mb-1">Download Details</span>
                                <span className="text-[#217ade] text-center text-sm sm:text-base -mt-1 font-bold">PDF</span>
                            </a>
                        </div>
                    </div>
                    <h1 className='bg-clip-text text-transparent bg-[linear-gradient(90deg,_#FFFFFF_25.4%,_#caeaf9_90%)] text-5xl font-bold font-lemonmilk uppercase mt-10 mb-2 tracking-widest'>Prizes</h1>
                    <div className="flex gap-4 flex-col md:flex-row justify-between w-10/12 sm:w-4/5">
                        <div className='flex flex-col w-full md:w-2/5 justify-end items-center'>
                            <div>
                                <img src={"/WinnerTrophy.png"} alt={"Winner"} height={400} width={400} className='w-[200px] object-cover rounded-r-3xl' />
                            </div>
                            <DetailBox isIcon={false} IconPath={"/GoldBadge.png"} value={module.firstPrize} title="Winner" width="full" />
                        </div>
                        <div className='flex flex-col w-full md:w-2/5 justify-end items-center'>
                            <div>
                                <img src={"/RunnersupTrophy.png"} alt={"Runnerup"} height={400} width={400} className='w-[150px] object-cover rounded-r-3xl' />
                            </div>
                            <DetailBox isIcon={false} IconPath={"/SilverBadge.png"} value={module.secondPrize} title="Runner Up" width="full" />
                        </div>
                    </div>
                    <Link to={'/register'} className='flex justify-center items-center m-auto w-11/12 h-[50px] text-xl text-black font-bold bg-[linear-gradient(90deg,_#FFFFFF_25.4%,_#caeaf9_90%)] rounded-[15px] [box-shadow:5px_6px_7px_3px_#00000040]'>
                    Register Now
                    </Link>
                    {/* {module && module.rulebook && Object.keys(module.rulebook).map((key) => (
                        <div className='flex flex-col gap-2 w-full' key={key}>
                            <h2 className='hidden font-lemonmilk bg-clip-text text-center text-transparent bg-[linear-gradient(90deg,_#FFFFFF_25.4%,_#caeaf9_90%)] text-[1.25rem] sm:text-[2rem] font-bold tracking-tight uppercase'>{key}</h2>
                        </div>
                    ))} */}
                </div>
            </div>
        </div>
    )
}

export default SingleCompetition