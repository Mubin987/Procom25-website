import RegisterHeading from "../ui/register-headings";
import '../../index.css'
import MembersList from "./MembersList";
import RegisterStep from "../ui/register-steps";

const TeamInformation = ({ props, members, setMembers, memberCount, minMembers, checkErrors, test, teamNameAvailableError, setteamNameAvailableError}) => {

    return (
        <div className="relative mt-24 font-lemonmilk">
            <div className='relative ml-7 flex flex-col sm:flex-row w-[90%] sm:[95%] md:w-[96%] lg:w-[80%] items-center'>
                <RegisterHeading heading={"team information"} textSize='text-2xl md:text-[2rem]' className='absolute -top-9 left-2 sm:left-3' />
                <div className="w-full border-t-4 border-dashed border-themeBlue " />
                <div className="w-full sm:w-[90%] md:w-[88%] lg:w-[70%] relative">
                    <input
                        type='text'
                        placeholder='TEAM NAME *'
                        value={props.teamName}
                        onChange={e => {
                            setteamNameAvailableError(false)
                            let teamName = e.target.value;
                            teamName = teamName.replace(/[<>/'"`?\\]/g, "");
                            props.setTeamName(teamName);
                            if (teamName.length === 0) props.setTeamNameError(true);
                            else props.setTeamNameError(false);
                        }}
                        className={`w-full mt-3 ml-3 py-3 pl-4 rounded-xl bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#DCF4FF_100%)] sm:py-2 sm:placeholder:text-xl placeholder:font-bold placeholder-transparent placeholder:bg-gradient-text placeholder:bg-clip-text placeholder:italic shadow-[0px_4px_4px_0px_#00000040]
                        ${props.teamNameError || teamNameAvailableError ? `mb-1` : `mb-3`}
                        `}
                    />
                    {(props.teamNameError || teamNameAvailableError) && (
                        <p className="text-red-600 text-[13px] sm:text-sm font-bold italic absolute left-3">
                            {props.teamNameError ? "Please enter your team name." : "Team name already taken."}
                        </p>
                    )}
                </div>
                <RegisterStep step={4} />
            </div>
            <div className="pl-10 bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] bg-clip-text text-transparent font-bold">
                <p className="text-[13px] sm:text-[0.9rem] max-w-full sm:max-w-[48%] italic">
                    ENTER YOUR TEAM'S ACCURATE INFORMATION!
                </p>
            </div>
            <div className='pl-10 ml-5 md:max-w-full lg:max-w-[86%]'>
                <p className="text-xl italic mt-5 mb-2 ml-2 bg-[linear-gradient(270deg,#0D32C5_0%,#1768DB_37.9%,#1E8AE9_93.9%,#23A7F4_100%)] bg-clip-text text-transparent font-bold">
                    TEAM LEADER'S INFO:
                </p>
                <div className='responsive-margin flex flex-wrap w-[96%] md:w-full lg:w-[96%] sm:mb-6'>
                    <div className='w-full md:w-1/2 mb-3 sm:mb-0'>
                        <input
                            type='text'
                            placeholder='NAME *'
                            value={props.name}
                            onChange={e => {
                                let name = e.target.value;
                                name = name.replace(/[<>/'"`?\\]/g, "");
                                props.setName(name);
                                if (name.length === 0) props.setNameError(true);
                                else props.setNameError(false);
                            }}
                            className='w-[90%] ml-3 sm:py-2 py-3 pl-4 rounded-xl bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#DCF4FF_100%)] sm:placeholder:text-xl placeholder:font-bold placeholder-transparent placeholder:bg-gradient-text placeholder:bg-clip-text placeholder:italic shadow-[0px_4px_4px_0px_#00000040]'
                        />
                        {props.nameError && (
                            <p className="text-red-500 text-sm mt-1 ml-5">Please enter your name.</p>
                        )}
                    </div>
                    <div className='w-full md:w-1/2 mb-3 sm:mb-0'>
                        <input
                            type='text'
                            placeholder='CNIC NO. *'
                            value={props.cnicNo}
                            onChange={e => {
                                let cnic = e.target.value.replace(/[^0-9]/g, "").replace(/-/g, "");

                                if (cnic.length > 13) {
                                    cnic = cnic.slice(0, 13);
                                }

                                if (cnic.length > 5) cnic = cnic.slice(0, 5) + "-" + cnic.slice(5);
                                if (cnic.length > 13) cnic = cnic.slice(0, 13) + "-" + cnic.slice(13);

                                props.setCnicNo(cnic);

                                if (cnic.length !== 15) props.setCnicError(true);
                                else props.setCnicError(false);
                            }}
                            className='w-[90%] ml-3 py-3 pl-4 rounded-xl bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#DCF4FF_100%)] sm:py-2 sm:placeholder:text-xl placeholder:font-bold placeholder-transparent placeholder:bg-gradient-text placeholder:bg-clip-text placeholder:italic shadow-[0px_4px_4px_0px_#00000040]'
                        />
                        {props.cnicError && (
                            <p className="text-red-500 text-sm mt-1 ml-5">Please enter a valid cnic.</p>
                        )}
                    </div>
                </div>
                <div className='responsive-margin flex flex-wrap w-[96%] md:w-full lg:w-[96%] sm:mb-6'>
                    <div className='w-full md:w-1/2 mb-3 sm:mb-0'>
                        <input
                            type='email'
                            placeholder='EMAIL ADDRESS *'
                            value={props.emailAddress}
                            onChange={e => {
                                const email = e.target.value;
                                props.setEmailAddress(email);

                                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                                if (!emailRegex.test(email)) props.setEmailError(true);
                                else props.setEmailError(false);
                            }}
                            className={`w-[90%] ml-3 py-3 pl-4 rounded-xl bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#DCF4FF_100%)] sm:py-2 sm:placeholder:text-xl placeholder:font-bold placeholder-transparent placeholder:bg-gradient-text placeholder:bg-clip-text placeholder:italic shadow-[0px_4px_4px_0px_#00000040] ${props.emailError ? 'border-red-500' : ''}`}
                        />
                        {props.emailError && (
                            <p className="text-red-500 text-[13px] sm:text-sm mt-1 ml-5">Please enter a valid email address.</p>
                        )}
                    </div>
                    <div className='w-full md:w-1/2 mb-3 sm:mb-0'>
                        <input
                            type='number'
                            placeholder='WHATSAPP *'
                            value={props.whatsapp}
                            onChange={e => {
                                let num = e.target.value;
                                if (num.length > 11) num = num.slice(0, 11)
                                props.setWhatsapp(num);
                                if (num.length < 11) props.setWhatsappError(true);
                                else props.setWhatsappError(false);
                            }}
                            className='w-[90%] ml-3 py-3 pl-4 rounded-xl bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#DCF4FF_100%)] sm:py-2 sm:placeholder:text-xl placeholder:font-bold placeholder-transparent placeholder:bg-gradient-text placeholder:bg-clip-text placeholder:italic shadow-[0px_4px_4px_0px_#00000040]'
                        />
                        {props.whatsappError && (
                            <p className="text-red-500 text-[12px] sm:text-sm mt-1 ml-5">Please enter a valid whatsapp number.</p>
                        )}
                    </div>
                </div>
                <MembersList members={members} setMembers={setMembers} memberCount={memberCount} checkErrors={checkErrors} test={test}/>
                {/* <div className='responsive-margin w-full refer-btn'>
                    <input
                        type='text'
                        placeholder='REFERENCE CODE (IF ANY) *'
                        value={props.referenceCode}
                        onChange={e => props.setReferenceCode(e.target.value)}
                        className='w-[95%] md:w-[99%] lg:w-[95%] ml-3 py-3 pl-4 rounded-xl bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#DCF4FF_100%)] sm:py-2 sm:placeholder:text-xl placeholder:font-bold placeholder-transparent placeholder:bg-gradient-text placeholder:bg-clip-text placeholder:italic shadow-[0px_4px_4px_0px_#00000040]'
                    />
                </div> */}
            </div>
        </div>
    );
}

export default TeamInformation;