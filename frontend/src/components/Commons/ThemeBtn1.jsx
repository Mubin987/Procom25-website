import { Link } from 'react-router-dom';

const ThemeBtn1 = ({linkpath, text, width, height})=>{

    return(
    <Link to={linkpath} className={`relative overflow-hidden group [box-shadow:1px_2px_3px_0px_#00000040] transition-all duration-1000 font-montserrate bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#D0EFFF_65.4%,_#A7E2FF_100%)] inline-flex justify-center rounded-full mt-2 sm:mt-0 items-center m-auto w-${width} h-[${height}] text-xl`}>
        <span className="absolute inset-0 w-full h-full bg-[linear-gradient(200deg,_#FFFFFF_14.9%,_#D0EFFF_65.4%,_#A7E2FF_100%)] transform translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out rounded-full"></span>
        <span className="relative z-10 text-[#2169D4] transition-colors duration-300 ease-in-out group-hover:text-[#2169D4]">
        {text}
        </span>
    </Link>

    )

}

export default ThemeBtn1;