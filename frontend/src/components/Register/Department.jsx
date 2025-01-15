import { Link } from "react-router-dom";
import Dropdown from "../ui/dropdown";
import RegisterHeading from "../ui/register-headings";

const Department = ({ setDepartment }) => {
    return (
        <div className="relative pl-10 mb-5 mt-20 font-lemonmilk">
            <RegisterHeading heading={"department"} textSize='text-2xl' />
            <div className='absolute left-4 top-7 md:left-6 flex w-[90%] sm:w-[80%] items-center'>
                <div className="w-full border-t-4 border-dashed border-themeBlue " />
                <Dropdown defaultValue="DEPARTMENT" setValue={setDepartment} items={[
                    'Computer Science',
                    'Electrical Engineering',
                    'Mechanical Engineering',
                ]} />
            </div>
            <div className="absolute top-[36%] sm:top-[36%] left-[-1%] flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] font-bold text-xl z-10">
                <span className="bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#D0EFFF_63.77%,_#A7E2FF_100%)] bg-clip-text text-transparent font-bold">1</span>
            </div>
            <div className="mt-5 sm:mt-7 bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] bg-clip-text text-transparent font-bold">
                <p className="text-[13px] sm:text-base max-w-[50%] italic font-lemonmilk">
                    SELECT THE DEPARTMENT OF COMPETITIONS YOU WISH TO PARTICIPATE IN, FOR MORE INFORMATION <Link to={'/modules'} className="underline">
                        CLICK HERE!
                    </Link>
                </p>
            </div>
        </div>
    );
}

export default Department;