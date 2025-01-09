import RegisterHeading from "../ui/register-headings";

const TeamInformation = ({ props }) => {
    return (
        <div className="relative pl-10 mt-24">
            <RegisterHeading heading={"team information"} textSize='text-2xl' />
            <div className='absolute left-4 top-7 md:left-6 flex w-[90%] items-center'>
                <div className="w-full border-t-4 border-dashed border-themeBlue " />
                <input
                    type='text'
                    placeholder='TEAM NAME *'
                    required
                    value={props.teamName}
                    onChange={e => props.setTeamName(e.target.value)}
                    className='w-[76%] sm:w-[60%] ml-3 py-3 pl-4 rounded-xl bg-white sm:py-2 sm:placeholder:text-xl placeholder:font-bold placeholder-transparent placeholder:bg-gradient-text placeholder:bg-clip-text placeholder:italic drop-shadow-xl'
                />
            </div>
            <div className="absolute top-[38px] left-[-1%] flex h-7 w-7 items-center justify-center rounded-full bg-gradient-text font-bold text-white text-xl z-10">
                3
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
                <div className='responsive-margin flex flex-wrap w-[96%] mb-6'>
                    <div className='w-full md:w-1/2'>
                        <input
                            type='text'
                            placeholder='NAME *'
                            required
                            value={props.name}
                            onChange={e => props.setName(e.target.value)}
                            className='w-[90%] ml-3 sm:py-2 py-3 pl-4 rounded-xl bg-white sm:placeholder:text-xl placeholder:font-bold placeholder-transparent placeholder:bg-gradient-text placeholder:bg-clip-text placeholder:italic drop-shadow-xl'
                        />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <input
                            type='number'
                            placeholder='CNIC NO. *'
                            required
                            value={props.cnicNo}
                            onChange={e => props.setCnicNo(e.target.value)}
                            className='responsive-btn-1 w-[90%] ml-3 py-3 pl-4 rounded-xl bg-white sm:py-2 sm:placeholder:text-xl placeholder:font-bold placeholder-transparent placeholder:bg-gradient-text placeholder:bg-clip-text placeholder:italic drop-shadow-xl'
                        />
                    </div>
                </div>
                <div className='responsive-margin flex flex-wrap w-[96%] mb-6'>
                    <div className='w-full md:w-1/2'>
                        <input
                            type='email'
                            placeholder='EMAIL ADDRESS *'
                            required
                            value={props.emailAddress}
                            onChange={e => props.setEmailAddress(e.target.value)}
                            className='responsive-btn-1 w-[90%] ml-3 py-3 pl-4 rounded-xl bg-white sm:py-2 sm:placeholder:text-xl placeholder:font-bold placeholder-transparent placeholder:bg-gradient-text placeholder:bg-clip-text placeholder:italic drop-shadow-xl'
                        />
                    </div>
                    <div className='w-full md:w-1/2'>
                        <input
                            type='number'
                            placeholder='WHATSAPP *'
                            required
                            value={props.whatsapp}
                            onChange={e => props.setWhatsapp(e.target.value)}
                            className='responsive-btn-1 w-[90%] ml-3 py-3 pl-4 rounded-xl bg-white sm:py-2 sm:placeholder:text-xl placeholder:font-bold placeholder-transparent placeholder:bg-gradient-text placeholder:bg-clip-text placeholder:italic drop-shadow-xl'
                        />
                    </div>
                </div>
                <div className='w-full refer-btn'>
                    <input
                        type='text'
                        placeholder='REFERENCE CODE (IF ANY) *'
                        value={props.referenceCode}
                        onChange={e => props.setReferenceCode(e.target.value)}
                        className='responsive-btn-2 w-[91%] ml-3 py-3 pl-4 rounded-xl bg-white sm:py-2 sm:placeholder:text-xl placeholder:font-bold placeholder-transparent placeholder:bg-gradient-text placeholder:bg-clip-text placeholder:italic drop-shadow-xl'
                    />
                </div>
            </div>
        </div>
    );
}

export default TeamInformation;