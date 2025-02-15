import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// NOTE: Change this date to whatever date you want to countdown to :)
export const COUNTDOWN_FROM = "2025-02-16T19:00:00Z";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Countdown = ({ pageType }) => {
    return (
        <div className={`flex gap-1 ${pageType === "Home" || pageType === "Sponsors" ? "justify-center items-end" : "justify-start"} bg-[linear-gradient(90deg,_#23B5F4_0%,_#2087F1_31.4%,_#1F6DEF_96.6%)] bg-clip-text text-transparent
            font-bold font-outfit
        `}>
            <CountdownItem unit="Day" text="days" pageType={pageType} />
            <Colon />
            <CountdownItem unit="Hour" text="hours" pageType={pageType} />
            <Colon />
            <CountdownItem unit="Minute" text="minutes" pageType={pageType} />
            <Colon />
            <CountdownItem unit="Second" text="seconds" pageType={pageType} />
        </div>
    );
};

const CountdownItem = ({ unit, text, pageType }) => {
    const { ref, time } = useTimer(unit);

    return (
        <div className="flex flex-col items-center justify-center">
            {pageType === "Home" || pageType === "Sponsors" ? (
                <>
                    {/* Label */}
                    <span className="text-xs font-semibold text-themeDBlue opacity-65 leading-[17.07px] tracking-[0.15em]">
                        {text}
                    </span>
                    {/* Time */}
                    <span
                        ref={ref}
                        className="block text-5xl font-extrabold"
                    >
                        {time.toString().padStart(2, "0")}
                    </span>
                </>
            ) : (
                <>
                    {/* Time */}
                    <span
                        ref={ref}
                        className="block text-5xl font-extrabold"
                    >
                        {time.toString().padStart(2, "0")}
                    </span>
                    {/* Label */}
                    <span className="text-xs font-semibold text-themeDBlue opacity-65 leading-[17.07px] tracking-[0.15em]">
                        {text}
                    </span>
                </>
            )}
        </div>
    );
};

const Colon = () => (
    <span className="text-5xl font-black">:</span>
);

export default Countdown;

const useTimer = (unit) => {
    const [ref, animate] = useAnimate();

    const intervalRef = useRef(null);
    const timeRef = useRef(0);

    const getNewTime = () => {
        const end = new Date(COUNTDOWN_FROM);
        const now = new Date();
        const distance = Math.max(0, end.getTime() - now.getTime()); // Use getTime() for precise calculations

        if (unit === "Day") {
            return Math.floor(distance / DAY);
        } else if (unit === "Hour") {
            return Math.floor((distance % DAY) / HOUR);
        } else if (unit === "Minute") {
            return Math.floor((distance % HOUR) / MINUTE);
        } else {
            return Math.floor((distance % MINUTE) / SECOND);
        }
    };

    const [time, setTime] = useState(getNewTime());

    useEffect(() => {
        intervalRef.current = setInterval(handleCountdown, 1000);

        return () => clearInterval(intervalRef.current || undefined);
    }, []);

    const handleCountdown = async () => {
        let newTime = getNewTime();

        if (newTime !== timeRef.current) {
            // Exit animation
            // await animate(
            //     ref.current,
            //     {
            //         y: ["0%", "-50%"],
            //         opacity: [1, 0.5]
            //     },
            //     { duration: 0.35 }
            // );

            timeRef.current = newTime;
            setTime(newTime);

            // Enter animation
            // await animate(
            //     ref.current,
            //     {
            //         y: ["50%", "0%"],
            //         opacity: [0.5, 1]
            //     },
            //     { duration: 0.35 }
            // );
        }
    };

    return { ref, time };
};
