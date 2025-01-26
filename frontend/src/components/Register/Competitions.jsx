import Dropdown from "../ui/dropdown";
import RegisterHeading from "../ui/register-headings";
import RegisterStep from "../ui/register-steps";

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
        <div className="relative mb-5 mt-28 font-lemonmilk">
            <div className='relative ml-7 flex w-[90%] sm:[95%] md:w-[96%] lg:w-[80%] items-center'>
                <RegisterHeading heading={"competitions"} textSize='text-2xl md:text-[2rem]' className='absolute -top-6 left-2 sm:left-3' />
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
                <RegisterStep step={2} />
            </div>
            <div className="pl-10 bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] bg-clip-text text-transparent font-bold">
                <p className="text-[13px] sm:text-[0.9rem] max-w-[47%] italic">
                    SELECT THE COMPETITION YOU WISH TO PARTICIPATE IN!
                </p>
            </div>
        </div>
    );
}

export default Competitions;