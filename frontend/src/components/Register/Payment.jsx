import React, { useState } from "react";
import RegisterHeading from "../ui/register-headings";

const Payment = () => {
    return (
        <div className="relative pl-10 mt-16 font-lemonmilk">
            <RegisterHeading heading={"payment"} textSize='text-2xl' />
            <div className='absolute left-4 top-7 md:left-6 flex w-[90%] sm:w-[80%]'>
                <div className="w-full border-t-4 border-dashed border-themeBlue mt-3 " />
                <div className="flex flex-col items-center rounded-lg bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#DCF4FF_100%)] p-6 pt-3 ml-3 cursor-pointer drop-shadow-lg">
                    <div className='lg:w-60'>
                        <label htmlFor="file-input" className=" flex flex-col items-center cursor-pointer ">
                            <span className="italic block text-center sm:text-base bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] bg-clip-text text-transparent font-bold">
                                UPLOAD PAYMENT RECEIPT
                            </span>
                            <div className='my-3'><img src='./src/assets/upload_symbol.png' className='w-[30px] sm:w-[40px] h-[30px] sm:h-[40px]' /></div>
                            <span className="italic text-[7px] sm:text-[8px] bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] bg-clip-text text-transparent font-bold">
                                *DRAG AND DROP YOUR IMAGE OR CLICK THE BUTTON
                            </span>
                            <span className='italic text-[7px] sm:text-[8px] bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] bg-clip-text text-transparent font-bold'>
                                BELOW TO SELECT FILE. *
                            </span>
                        </label>
                        <input
                            id="file-input"
                            type="file"
                            required
                            className="hidden"
                            onChange={(e) => console.log(e.target.files)}
                        />
                    </div>
                </div>
            </div>
            <div className="absolute top-[29px] left-[-1%] flex h-7 w-7 items-center justify-center rounded-full bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%)] font-bold text-white text-xl z-10">
            <span className="bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#D0EFFF_63.77%,_#A7E2FF_100%)] bg-clip-text text-transparent font-bold">4</span>
            </div>
            <div className="mt-4 bg-[linear-gradient(180deg,_#199DDF_0%,_#145BD5_100%)] w-[50%] sm:w-full bg-clip-text text-transparent font-bold">
                <p className="text-[13px] sm:text-sm italic">
                    PLEASE PAY YOUR FEES IN THE FOLLOWING ACCOUNT!
                    <br />
                    BANK NAME: <span className="font-medium text-black opacity-70 not-italic">NAYAPAY</span>
                    <br />
                    ACCOUNT TITLE: <span className="font-medium text-black opacity-70 not-italic">MUHAMMAD SHAHMIR RAZA</span>
                    <br />
                    ACCOUNT NUMBER: <span className="font-medium text-black opacity-70 not-italic">03188409943</span>
                </p>
            </div>
        </div>
    );
}

export default Payment;
