import { useState } from "react";
import axios from 'axios'
import RegisterHeading from "../ui/register-headings";

const Review = ({ confirmInfo, isErrorPresent, competitionId, team_name, setteamNameAvailableError}) => {
    const [stopper, setStopper] = useState(true)

    const check_TeamName_Availability = ()=>{
    axios.post("http://localhost:3000/pre-register", {data: {_id: competitionId, team_name: team_name.trim()}})
    .then((res) => {
        setteamNameAvailableError(!res.data.isAvailable)
        setStopper(res.data.isAvailable)
    })
    }

    return (
        <div className="relative pl-10 mt-28">
            <RegisterHeading heading={"review"} textSize='text-2xl' />
            <div className='absolute left-4 top-7 md:left-6 flex w-[80%] sm:w-[93%] md:w-[80%] items-center'>
                <div className="w-full border-t-4 border-dashed border-themeBlue " />
                <button onClick={(e) => {
                    e.preventDefault()
                    check_TeamName_Availability()
                    if(stopper){confirmInfo()}
                    
                }} 
                className='ml-3 text-[13px] sm:text-[22px] bg-blue-500 hover:bg-blue-600 text-lg bg-[linear-gradient(90deg,_#218EF1_0%,_#1865DD_50%,_#0E3AC8_100%)] [box-shadow:6px_4px_11.7px_0px_#00000040] font-bold text-white px-6 py-1 rounded-full'>
                    Submit
                </button>
            </div>
            <div className="absolute top-[33px] left-[-1%] flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] font-bold text-white text-xl z-10">
            <span className="bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#D0EFFF_63.77%,_#A7E2FF_100%)] bg-clip-text text-transparent font-bold">5</span>
            </div>
            <div className="mt-4 w-[50%] sm:w-full bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] bg-clip-text text-transparent font-bold">
                <p className="max-w-[60%] text-[13px] sm:text-sm italic">
                    PLEASE REVIEW YOUR INFORMATION AND CLICK SUBMIT!
                </p>
            </div>
            { isErrorPresent &&
                <p className="absolute font-bold italic text-lg text-red-600">Please recheck your registration, a field is missing!</p>
            }
        </div>
    );
}

export default Review;