import Dropdown from "../ui/dropdown";
import RegisterHeading from "../ui/register-headings";

const Department = ({ setDepartment }) => {
    return (
        <div className="relative pl-10 mb-5 mt-20">
            <RegisterHeading heading={"department"} textSize='text-2xl' />
            <div className='absolute left-4 top-7 md:left-6 flex w-[90%] sm:w-[80%] items-center'>
                <div className="w-full border-t-4 border-dashed border-themeBlue " />
                <Dropdown defaultValue="DEPARTMENT" setValue={setDepartment} items={[
                    'Computer Science',
                    'Electrical Engineering',
                    'Mechanical Engineering',
                ]} />
            </div>
            <div className="absolute top-[36%] sm:top-[36%] left-[-1%] flex h-7 w-7 items-center justify-center rounded-full bg-gradient-text font-bold text-white text-xl z-10">
                1
            </div>
            <div className="mt-5 sm:mt-7 bg-[linear-gradient(270deg,#0D32C5_0%,#1768DB_37.9%,#1E8AE9_93.9%,#23A7F4_100%)] bg-clip-text text-transparent font-bold">
                <p className="text-[13px] sm:text-base max-w-[50%] italic">
                    SELECT THE DEPARTMENT OF COMPETITIONS YOU WISH TO PARTICIPATE IN, FOR MORE INFORMATION CLICK HERE!
                </p>
            </div>
        </div>
    );
}

export default Department;