import Dropdown from "../ui/dropdown";
import RegisterHeading from "../ui/register-headings";

const Competitions = ({ setCompetitions }) => {
    return (
        <div className="relative pl-10 mt-20 font-lemonmilk">
            <RegisterHeading heading={"competitions"} textSize='text-2xl' />
            <div className='absolute left-4 top-7 md:left-6 flex w-[90%] sm:w-[80%] items-center'>
                <div className="w-full border-t-4 border-dashed border-themeBlue " />
                <Dropdown defaultValue="COMPETITIONS" setValue={setCompetitions} items={[
                    'Competition 1',
                    'Competition 2',
                    'Competition 3',
                ]} />
            </div>
            <div className="absolute top-[48%] left-[-1%] flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] font-bold text-white text-xl z-10">
            <span className="bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#D0EFFF_63.77%,_#A7E2FF_100%)] bg-clip-text text-transparent font-bold">2</span>
            </div>
            <div className="mt-5 sm:mt-7 bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] bg-clip-text text-transparent font-bold">
                <p className="text-[13px] sm:text-base max-w-[50%] italic">
                    SELECT THE COMPETITION YOU WISH TO PARTICIPATE IN!
                </p>
            </div>
        </div>
    );
}

export default Competitions;