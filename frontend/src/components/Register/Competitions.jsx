import Dropdown from "../ui/dropdown";
import RegisterHeading from "../ui/register-headings";

const Competitions = ({ setCompetitions }) => {
    return (
        <div className="relative pl-10 mt-20">
            <RegisterHeading heading={"competitions"} textSize='text-2xl' />
            <div className='absolute left-4 top-7 md:left-6 flex w-[90%] sm:w-[80%] items-center'>
                <div className="w-full border-t-4 border-dashed border-themeBlue " />
                <Dropdown defaultValue="COMPETITIONS" setValue={setCompetitions} items={[
                    'Competition 1',
                    'Competition 2',
                    'Competition 3',
                ]} />
            </div>
            <div className="absolute top-[48%] left-[-1%] flex h-7 w-7 items-center justify-center rounded-full bg-gradient-text font-bold text-white text-xl z-10">
                2
            </div>
            <div className="mt-5 sm:mt-7 bg-[linear-gradient(270deg,#0D32C5_0%,#1768DB_37.9%,#1E8AE9_93.9%,#23A7F4_100%)] bg-clip-text text-transparent font-bold">
                <p className="text-[13px] sm:text-base max-w-[50%] italic">
                    SELECT THE COMPETITION YOU WISH TO PARTICIPATE IN!
                </p>
            </div>
        </div>
    );
}

export default Competitions;