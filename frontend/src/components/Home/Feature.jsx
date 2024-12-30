import React from 'react';
import Carousel from './carousel/Carousel';
import './Feature.css';

const Feature = () => {
    const slides = [
        "https://picsum.photos/800/400?random=1",
        "https://picsum.photos/800/400?random=2",
        "https://picsum.photos/800/400?random=3",
        "https://picsum.photos/800/400?random=4",
        "https://picsum.photos/800/400?random=5"
    ];

    return (
        <section>
            <div className="w-full text-center">
                <div className="w-[70%] mx-auto py-2 mt-16" style={{ textShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)' }}>
                    <p className="text-6xl font-medium">
                        <span className="gradient-text">YEAR AFTER YEAR, WE MAKE </span>
                        <span className="text-[#2169D4] text-8xl">IT</span>
                    </p>
                    <p className="text-6xl font-medium gradient-text">
                        HAPPEN - HERE'S WHAT WE'RE ALL
                    </p>
                    <p className="text-6xl font-medium gradient-text">ABOUT!</p>
                </div>
            </div>
            <Carousel slides={slides} />
            <div className="grid gap-7 w-[60%] mx-auto mt-10 text-2xl font-bold" style={{ textShadow: '0px 1px 1px rgba(0, 0, 0, 0.25)' }}>
                <p className="gradient-text">
                    Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the mRenaissance. 
                </p>
                <p className="gradient-text">
                    The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.  Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the mRenaissance.
                </p>
            </div>
        </section>
    );
};

export default Feature;