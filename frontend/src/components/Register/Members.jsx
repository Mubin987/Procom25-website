import { useEffect } from "react";

const Members = ( props ) => {
    useEffect(() => {
        props.setOptional(props.isOptional)
    }, [props.isOptional])
    return (
        <div className=' md:max-w-full lg:max-w-[100%]'>
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
                            if (name.length === 0 && !props.isOptional) props.setNameError(true);
                            else props.setNameError(false);
                        }}
                        className='w-[90%] ml-3 sm:py-2 py-3 pl-4 rounded-xl bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#DCF4FF_100%)] sm:placeholder:text-xl placeholder:font-bold placeholder-transparent placeholder:bg-gradient-text placeholder:bg-clip-text placeholder:italic shadow-[0px_4px_4px_0px_#00000040]'
                    />
                    {props.nameError && !props.isOptional && (
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

                            if (cnic.length !== 15 && !props.isOptional) props.setCnicError(true);
                            else props.setCnicError(false);
                        }}
                        className='w-[90%] ml-3 py-3 pl-4 rounded-xl bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#DCF4FF_100%)] sm:py-2 sm:placeholder:text-xl placeholder:font-bold placeholder-transparent placeholder:bg-gradient-text placeholder:bg-clip-text placeholder:italic shadow-[0px_4px_4px_0px_#00000040]'
                    />
                    {props.cnicError && !props.isOptional && (
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
                            if (!emailRegex.test(email) && !props.isOptional) props.setEmailError(true);
                            else props.setEmailError(false);
                        }}
                        className={`w-[90%] ml-3 py-3 pl-4 rounded-xl bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#DCF4FF_100%)] sm:py-2 sm:placeholder:text-xl placeholder:font-bold placeholder-transparent placeholder:bg-gradient-text placeholder:bg-clip-text placeholder:italic shadow-[0px_4px_4px_0px_#00000040] ${props.emailError ? 'border-red-500' : ''}`}
                    />
                    {props.emailError && !props.isOptional && (
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
                            if (num.length < 11 && !props.isOptional) props.setWhatsappError(true);
                            else props.setWhatsappError(false);
                        }}
                        className='w-[90%] ml-3 py-3 pl-4 rounded-xl bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#DCF4FF_100%)] sm:py-2 sm:placeholder:text-xl placeholder:font-bold placeholder-transparent placeholder:bg-gradient-text placeholder:bg-clip-text placeholder:italic shadow-[0px_4px_4px_0px_#00000040]'
                    />
                    {props.whatsappError && !props.isOptional && (
                        <p className="text-red-500 text-[12px] sm:text-sm mt-1 ml-5">Please enter a valid whatsapp number.</p>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Members;