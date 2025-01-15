import RegisterHeading from "../ui/register-headings";

const TeamInformation = ({ props }) => {
    return (
        <div className="relative pl-10 mt-24 font-lemonmilk">
            <RegisterHeading heading={"team information"} textSize='text-2xl' />
            <div className='absolute left-4 top-7 md:left-6 flex w-[80%] items-center'>
                <div className="w-full border-t-4 border-dashed border-themeBlue " />
                <input
                    type='text'
                    placeholder='TEAM NAME *'
                    required
                    value={props.teamName}
                    onChange={e => {
                        const teamName = e.target.value;
                        props.setTeamName(teamName);
                        if (teamName.length === 0) props.setTeamNameError(true);
                        else props.setTeamNameError(false);
                    }}
                    className='w-[74%] sm:w-[60%] ml-3 py-3 pl-4 rounded-xl bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#DCF4FF_100%)] sm:py-2 sm:placeholder:text-xl placeholder:font-bold placeholder-transparent placeholder:bg-gradient-text placeholder:bg-clip-text placeholder:italic shadow-[0px_4px_4px_0px_#00000040]'
                />
                {props.teamNameError && (
                    <p className="absolute right-4 -bottom-7 font-bold italic text-base text-red-600">Please enter your team name.</p>
                )}
            </div>
            <div className="absolute top-[38px] left-[-1%] flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] font-bold text-white text-xl z-10">
                <span className="bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#D0EFFF_63.77%,_#A7E2FF_100%)] bg-clip-text text-transparent font-bold">3</span>
            </div>
            <div className="mt-5 sm:mt-7 bg-[linear-gradient(270deg,#0D32C5_0%,#1768DB_37.9%,#1E8AE9_93.9%,#23A7F4_100%)] bg-clip-text text-transparent font-bold">
                <p className="text-[13px] sm:text-base max-w-[50%] italic">
                    ENTER YOUR TEAM'S ACCURATE INFORMATION!
                </p>
            </div>
            <div className='ml-5 max-w-[86%]'>
                <p className="text-xl max-w-[50%] italic mt-5 mb-2 ml-2 bg-[linear-gradient(270deg,#0D32C5_0%,#1768DB_37.9%,#1E8AE9_93.9%,#23A7F4_100%)] bg-clip-text text-transparent font-bold">
                    TEAM LEADER'S INFO:
                </p>
                <div className='flex flex-wrap w-[96%] sm:mb-6'>
                    <div className='w-full md:w-1/2 mb-3 sm:mb-0'>
                        <input
                            type='text'
                            placeholder='NAME *'
                            required
                            value={props.name}
                            onChange={e => {
                                const name = e.target.value;
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
                            type='number'
                            placeholder='CNIC NO. *'
                            required
                            value={props.cnicNo}
                            onChange={e => {
                                const cnic = e.target.value;
                                props.setCnicNo(cnic);
                                if (cnic.length !== 13) props.setCnicError(true);
                                else props.setCnicError(false);
                            }}
                            className='w-[90%] ml-3 py-3 pl-4 rounded-xl bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#DCF4FF_100%)] sm:py-2 sm:placeholder:text-xl placeholder:font-bold placeholder-transparent placeholder:bg-gradient-text placeholder:bg-clip-text placeholder:italic shadow-[0px_4px_4px_0px_#00000040]'
                        />
                        {props.cnicError && (
                            <p className="text-red-500 text-sm mt-1 ml-5">Please enter a valid cnic.</p>
                        )}
                    </div>
                </div>
                <div className='flex flex-wrap w-[96%] sm:mb-6'>
                    <div className='w-full md:w-1/2 mb-3 sm:mb-0'>
                        <input
                            type='email'
                            placeholder='EMAIL ADDRESS *'
                            required
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
                            <p className="text-red-500 text-sm mt-1 ml-5">Please enter a valid email address.</p>
                        )}
                    </div>
                    <div className='w-full md:w-1/2 mb-3 sm:mb-0'>
                        <input
                            type='number'
                            placeholder='WHATSAPP *'
                            required
                            value={props.whatsapp}
                            onChange={e => {
                                const num = e.target.value;
                                props.setWhatsapp(num);
                                if (num.length === 0) props.setWhatsappError(true);
                                else props.setWhatsappError(false);
                            }}
                            className='w-[90%] ml-3 py-3 pl-4 rounded-xl bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#DCF4FF_100%)] sm:py-2 sm:placeholder:text-xl placeholder:font-bold placeholder-transparent placeholder:bg-gradient-text placeholder:bg-clip-text placeholder:italic shadow-[0px_4px_4px_0px_#00000040]'
                        />
                        {props.whatsappError && (
                            <p className="text-red-500 text-sm mt-1 ml-5">Please enter a valid whatsapp number.</p>
                        )}
                    </div>
                </div>
                <div className='w-full refer-btn'>
                    <input
                        type='text'
                        placeholder='REFERENCE CODE (IF ANY) *'
                        value={props.referenceCode}
                        onChange={e => props.setReferenceCode(e.target.value)}
                        className='w-[95%] ml-3 py-3 pl-4 rounded-xl bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#DCF4FF_100%)] sm:py-2 sm:placeholder:text-xl placeholder:font-bold placeholder-transparent placeholder:bg-gradient-text placeholder:bg-clip-text placeholder:italic shadow-[0px_4px_4px_0px_#00000040]'
                    />
                </div>
            </div>
        </div>
    );
}

export default TeamInformation;