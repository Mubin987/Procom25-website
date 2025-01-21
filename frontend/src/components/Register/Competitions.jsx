import Dropdown from "../ui/dropdown";
import RegisterHeading from "../ui/register-headings";

const Competitions = ({
    minRef, 
    department ,
    setCompetitions, 
    compError, 
    setMembers, 
    fetchedCompetitions, 
    setPrice, 
    setMinMember,
    setCompetitionId,
    setTest,
}) => {
    return (
        <div className="relative pl-10 mt-20 font-lemonmilk">
            <RegisterHeading heading={"competitions"} textSize='text-2xl' />
            <div className='absolute left-4 top-7 md:left-6 flex w-[90%] sm:[95%] md:w-[96%] lg:w-[80%] items-center'>
                <div className="w-full border-t-4 border-dashed border-themeBlue " />
                {fetchedCompetitions && 
                    <Dropdown 
                        defaultValue="COMPETITIONS" 
                        minRef={minRef}
                        department={department}
                        setValue={setCompetitions} 
                        setMembers={setMembers}
                        items={fetchedCompetitions} 
                        setPrice={setPrice}
                        setMinMember={setMinMember}
                        setCompetitionId={setCompetitionId}
                        setTest={setTest}
                    />}
                { compError &&
                    <p className="absolute right-0 -bottom-[60%] text-[60%] sm:right-0 md:right-8 sm:-bottom-7 font-bold italic sm:text-base text-red-600">You must select a competition!</p>
                }
            </div>
            <div className="absolute top-[48%] left-[-1%] flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] font-bold text-white text-xl z-10">
            <span className="bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#D0EFFF_63.77%,_#A7E2FF_100%)] bg-clip-text text-transparent font-bold">2</span>
            </div>
            <div className="mt-5 sm:mt-7 bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] bg-clip-text text-transparent font-bold">
                <p className="text-[13px] sm:text-base max-w-[47%] italic">
                    SELECT THE COMPETITION YOU WISH TO PARTICIPATE IN!
                </p>
            </div>
        </div>
    );
}

export default Competitions;