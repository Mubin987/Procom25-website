const ThemeBtn2 = ({text, width, height, px, py})=>{

    return(
        <button className={`relative hover:scale-105 overflow-hidden text-${width} duration-200 sm:text-lg bg-[linear-gradient(90deg,_#218EF1_0%,_#1865DD_50%,_#0E3AC8_100%)] [box-shadow:6px_4px_11.7px_0px_#00000040] font-bold text-white px-${px} py-${py} rounded-full`}>
        <span className="absolute inset-0 w-full h-full bg-[linear-gradient(90deg,_#218EF1_0%,_#1865DD_50%,_#0E3AC8_100%)] transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-full"></span>
        <span className="relative z-10">
        {text}
        </span>
    </button>

    )

}

export default ThemeBtn2;