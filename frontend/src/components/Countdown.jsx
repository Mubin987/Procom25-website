import { useAnimate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

// NOTE: Change this date to whatever date you want to countdown to :)
const COUNTDOWN_FROM = "2024-12-5";

const SECOND = 1000;
const MINUTE = SECOND * 60;
const HOUR = MINUTE * 60;
const DAY = HOUR * 24;

const Countdown = () => {
    return (
        <div className="fixed bottom-6 right-4">
            <div className="flex gap-2 items-end">
                <CountdownItem unit="Day" text="days" />
                <Colon />
                <CountdownItem unit="Hour" text="hours" />
                <Colon />
                <CountdownItem unit="Minute" text="minutes" />
                <Colon />
                <CountdownItem unit="Second" text="seconds" />
            </div>
        </div>
    );
};

const CountdownItem = ({ unit, text }) => {
    const { ref, time } = useTimer(unit);

    return (
        <div className="flex flex-col items-center justify-center mx-2">
            <span className="text-xs font-bold text-[#23A7F4] mb-1">
                {text.toUpperCase()}
            </span>
            <div className="relative w-full overflow-hidden text-center">
                <span
                    ref={ref}
                    className="block text-7xl font-bold text-white"
                >
                    {time.toString().padStart(2, "0")}
                </span>
            </div>
        </div>
    );
};

const Colon = () => (
    <span className="text-7xl font-bold text-white">:</span>
);

export default Countdown;

const useTimer = (unit) => {
    const [ref, animate] = useAnimate();

    const intervalRef = useRef(null);
    const timeRef = useRef(0);

    const getNewTime = () => {
        const end = new Date(COUNTDOWN_FROM);
        const now = new Date();
        const distance = Math.max(0, end - now);

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

    const [time, setTime] = useState(() => {
        timeRef.current = getNewTime();
        return timeRef.current;
    });

    useEffect(() => {
        intervalRef.current = setInterval(handleCountdown, 1000);

        return () => clearInterval(intervalRef.current || undefined);
    }, []);

    const handleCountdown = async () => {
        const newTime = getNewTime();

        if (newTime !== timeRef.current) {
            // Exit animation
            await animate(
                ref.current,
                { y: ["0%", "-50%"], opacity: [1, 0] },
                { duration: 0.35 }
            );

            timeRef.current = newTime;
            setTime(newTime);

            // Enter animation
            await animate(
                ref.current,
                { y: ["50%", "0%"], opacity: [0, 1] },
                { duration: 0.35 }
            );
        }
    };

    return { ref, time };
};


// const useTimer = (unit) => {
//     const [ref, animate] = useAnimate();

//     const intervalRef = useRef(null);
//     const timeRef = useRef(0);
//     const isInitialRender = useRef(true);

//     const getNewTime = () => {
//         const end = new Date(COUNTDOWN_FROM);
//         const now = new Date();
//         const distance = Math.max(0, end - now);

//         if (unit === "Day") {
//             return Math.floor(distance / DAY);
//         } else if (unit === "Hour") {
//             return Math.floor((distance % DAY) / HOUR);
//         } else if (unit === "Minute") {
//             return Math.floor((distance % HOUR) / MINUTE);
//         } else {
//             return Math.floor((distance % MINUTE) / SECOND);
//         }
//     };

//     const [time, setTime] = useState(getNewTime());

//     useEffect(() => {
//         intervalRef.current = setInterval(handleCountdown, 1000);

//         return () => clearInterval(intervalRef.current || undefined);
//     }, []);

//     const handleCountdown = async () => {
//         const newTime = getNewTime();

//         if (newTime !== timeRef.current) {
//             await animate(
//                 ref.current,
//                 { y: ["0%", "-50%"], opacity: [1, 0] },
//                 { duration: 0.35 }
//             );

//             timeRef.current = newTime;
//             setTime(newTime);

//             await animate(
//                 ref.current,
//                 { y: ["50%", "0%"], opacity: [0, 1] },
//                 { duration: 0.35 }
//             );
//         }
//     };

//     return { ref, time };
// };

