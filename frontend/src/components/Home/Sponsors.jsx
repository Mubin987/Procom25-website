import React, { useEffect, useState } from 'react';
import Heading1 from '../Commons/Heading1';
import ThemeBtn2 from '../Commons/ThemeBtn2';
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
    const SponsorLink ="https://docs.google.com/forms/d/e/1FAIpQLSe80deCHsUdU-Kac_uDUX67z4u6am0Y7ud8_8hlwED4J97a-A/viewform"

    useEffect(()=>{
        axios.get("https://procom25-server.vercel.app/Sponsor_logos")
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
            <a href={SponsorLink} target='_blank' className='group'>
            <ThemeBtn2 text="Sponsor Now" width="3vw" px="6" py="1.5"/>
            </a>
        </section>
    );
};

export default Sponsors;
