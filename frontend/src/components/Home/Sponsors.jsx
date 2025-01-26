import React, { useEffect, useState } from 'react';
import Heading1 from '../Commons/Heading1';
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { Link } from 'react-router-dom';
import axios from 'axios';


// const firstRow = single_sponsor.slice(0, logos.length / 2);
// const secondRow = single_sponsor.slice(logos.length / 2);


const ReviewCard = ({
    img,
}) => {
    return (
        <figure
            className={cn(
                "relative w-fit cursor-pointer overflow-hidden rounded-xl border p-2",
                "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
                "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]",
            )}
        >
            <div className="flex items-center w-full h-full justify-center">
                <img className="w-[100px]" width="1000" height="1000" alt="" src={img} />
            </div>
        </figure>
    );
};

const Sponsors = () => {

    const [single_sponsor, setSingle_sponsor] = useState([])

    useEffect(()=>{
        axios.get("http://localhost:3000/Sponsor_logos")
        .then((res)=>
            setSingle_sponsor(res.data)
        )
    }, [])



    return (
        <section className='w-full flex flex-col items-center justify-center gap-6 my-5 p-4 overflow-hidden'>
            <h1 className='font-extrabold font-lemonmilk w-4/5 bg-clip-text text-transparent bg-[linear-gradient(90deg,_#434242_25.4%,_#2C2C2C_78.4%,_#161616_100%)] text-4xl sm:text-5xl py-2 text-center'>Who attends <span className='font-bold bg-clip-text text-transparent bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] text-4xl sm:text-6xl'>PROCOM</span>?</h1>
            <div className=''>
                <Marquee pauseOnHover className="[--duration:20s]">
                    {single_sponsor.slice(0, single_sponsor.length / 2).map((sponser) => (
                        <ReviewCard key={sponser.name} img={sponser.img_url} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {single_sponsor.slice(single_sponsor.length / 2).map((sponser) => (
                        <ReviewCard key={sponser.name} img={sponser.img_url}  />
                    ))}
                </Marquee>
            </div>
            <Link to="/sponsors" className=''>
                <button className='text-lg font-montserrate bg-[linear-gradient(90deg,_#218EF1_0%,_#1865DD_50%,_#0E3AC8_100%)] [box-shadow:6px_4px_11.7px_0px_#00000040] font-bold text-white px-6 py-1 rounded-full'>Become a Sponsor</button>
            </Link>
        </section>
    );
};

export default Sponsors;
