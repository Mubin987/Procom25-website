import React from 'react';
import Heading1 from '../Commons/Heading1';
import { cn } from "@/lib/utils";
import Marquee from "@/components/ui/marquee";
import { Link } from 'react-router-dom';

const logos = [
    {
        name: "Jack",
        img: "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737827015/10_b4mkj4.png",
    },
    {
        name: "Jill",
        img: "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737827015/9_lvbeer.png",
    },
    {
        name: "John",
        img: "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737827015/6_rjjnch.png",
    },
    {
        name: "Jane",
        img: "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737827015/4_bzoqdf.png",
    },
    {
        name: "Jenny",
        img: "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737827015/3_iq10fv.png",
    },
    {
        name: "James",
        img: "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737827014/2_b4hfej.png",
    },
    {
        name: "James",
        img: "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737827014/8_njt5q3.png",
    },
    {
        name: "James",
        img: "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737827014/7_em3yak.png",
    },
    {
        name: "James",
        img: "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737827014/1_p8o6tq.png",
    },
    {
        name: "James",
        img: "https://res.cloudinary.com/drrz1wz3s/image/upload/v1737827014/5_mpcba6.png",
    },
];

const firstRow = logos.slice(0, logos.length / 2);
const secondRow = logos.slice(logos.length / 2);


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
    return (
        <section className='w-full flex flex-col items-center justify-center gap-6 my-5 p-4 overflow-hidden'>
            <h1 className='font-extrabold font-lemonmilk w-4/5 bg-clip-text text-transparent bg-[linear-gradient(90deg,_#434242_25.4%,_#2C2C2C_78.4%,_#161616_100%)] text-4xl sm:text-5xl py-2 text-center'>Who attends <span className='font-bold bg-clip-text text-transparent bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] text-4xl sm:text-6xl'>PROCOM</span>?</h1>
            <div className=''>
                <Marquee pauseOnHover className="[--duration:20s]">
                    {firstRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
                    ))}
                </Marquee>
                <Marquee reverse pauseOnHover className="[--duration:20s]">
                    {secondRow.map((review) => (
                        <ReviewCard key={review.username} {...review} />
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
