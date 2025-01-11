import Heading1 from '@/components/Commons/Heading1';
import { ArrowDownCircleIcon, LucideDollarSign, User2Icon } from "lucide-react"
import React from 'react'

const DetailBox = ({isIcon,IconPath, value, title, width}) => {
    return (
        <div className={"flex md:gap-2 flex-col w-full md:w-"+width}>
            <div className="flex rounded-full [box-shadow:6px_7px_20px_2px_#00000040]">
                <div className="bg-[linear-gradient(180deg,_#1F95ED_0%,_#2169D4_100%)] rounded-l-full p-3 flex items-center justify-center w-14">
                    {isIcon? <IconPath/>:
                    <img src={IconPath} alt={IconPath} height={35} width={35} className='object-cover rounded-r-3xl' />}
                </div>
                <div className="bg-white rounded-r-full py-3 px-6 flex-1">
                    <span className="text-gray-800 text-xl font-bold ">{value}</span>
                </div>
            </div>
            <p className="text-white text-center text-sm mt-1 italic uppercase tracking-wider font-medium">
                {title}
            </p>
        </div>
    )
}


const SingleCompetition = ({module}) => {

    return (
        <div className='w-full flex flex-col justify-center items-center gap-4 mb-20'>
            <Heading1 text={module.category} className="tracking-wider"/>
            <div className='bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] flex flex-col gap-8 w-4/5 mx-auto rounded-[32px] sm:rounded-3xl text-white p-6 [box-shadow:11px_15px_23px_0px_#00000040]'>
                <div className='flex gap-2 justify-center sm:justify-evenly'>
                    <div className='w flex flex-col gap-2 items-center sm:items-start'>
                        <div className='flex sm:hidden m-auto'>
                            <img src={module.image} alt={module.name} height={400} width={400} className='w-[300px] object-cover rounded-r-3xl' />
                        </div>
                        <h1 className='bg-clip-text text-center sm:text-start text-transparent bg-[linear-gradient(90deg,_#FFFFFF_25.4%,_#caeaf9_90%)] text-[3rem] font-bold tracking-tight uppercase'>{module.name}</h1>
                        <p className='text-lg font-semibold'>{module.text}</p>
                    </div>
                    <div className='hidden sm:flex'>
                        <img src={module.image} alt={module.name} height={400} width={400} className='w-[200px] object-cover rounded-r-3xl' />
                    </div>
                </div>
                <div className='flex flex-col items-center w-full gap-4'>
                    <h1 className='bg-clip-text text-transparent bg-[linear-gradient(90deg,_#FFFFFF_25.4%,_#caeaf9_90%)] text-4xl font-bold tracking-widest uppercase mb-5'>Details</h1>
                    <div className="flex gap-4 flex-col md:flex-row justify-between w-10/12 sm:w-3/5">
                        <DetailBox isIcon={true} IconPath={()=>(<LucideDollarSign/>)} value="0000" title="Registration Fee" width="2/5"/>
                        <DetailBox isIcon={true} IconPath={()=>(<User2Icon/>)} value="0000" title="Max Members" width="2/5"/>
                    </div>
                    <div className="rounded-[9rem] flex items-center w-[14rem] sm:w-[18rem] h-14 [box-shadow:6px_7px_20px_2px_#00000040] bg-white">
                        <div className="flex">
                            <div className="p-3 flex items-center justify-center w-14">
                                <ArrowDownCircleIcon className="text-[#217ade]" size={40}/>
                            </div>
                            <div className="flex flex-col py-3 justify-center px-2 sm:px-6">
                                <span className="text-[#217ade] text-sm sm:text-base font-bold -mb-1">Download Details</span>
                                <span className="text-[#217ade] text-center text-sm sm:text-base -mt-1 font-bold">PDF</span>
                            </div>
                        </div>
                    </div>
                    <h1 className='bg-clip-text text-transparent bg-[linear-gradient(90deg,_#FFFFFF_25.4%,_#caeaf9_90%)] text-4xl font-bold tracking-widest uppercase mt-10 mb-2'>Prizes</h1>
                    <div className="flex gap-4 flex-col md:flex-row justify-between w-10/12 sm:w-3/5">
                        <div className='flex flex-col w-full md:w-2/5 justify-end'>
                            <div>
                            <img src={module.image} alt={module.name} height={400} width={400} className='w-[200px] object-cover rounded-r-3xl' />
                            </div>
                            <DetailBox isIcon={false} IconPath={module.image} value="0000" title="Winner" width="full"/>
                        </div>
                        <div className='flex flex-col w-full md:w-2/5 justify-end'>
                            <div>
                            <img src={module.image} alt={module.name} height={400} width={400} className='w-[150px] object-cover rounded-r-3xl' />
                            </div>
                            <DetailBox isIcon={false} IconPath={module.image} value="0000" title="Runner Up" width="full"/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleCompetition