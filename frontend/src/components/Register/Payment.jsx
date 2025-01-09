import RegisterHeading from "../ui/register-headings";

const Payment = () => {
    return (
        <div className="relative pl-10 mt-16">
            <RegisterHeading heading={"payment"} />
            <div className='responsive-upload absolute left-4 top-7 md:left-6 flex w-[80%]'>
                <div className="w-full border-t-4 border-dashed border-themeBlue mt-3 " />
                <div className=" flex flex-col items-center rounded-lg bg-white p-6 pt-3 ml-3 cursor-pointer drop-shadow-lg">
                    <div className='w-60 '>
                        <label htmlFor="file-input" className=" flex flex-col items-center cursor-pointer ">
                            <span className="italic block text-center text-base bg-[linear-gradient(270deg,#0D32C5_0%,#1768DB_37.9%,#1E8AE9_93.9%,#23A7F4_100%)] bg-clip-text text-transparent font-bold">
                                UPLOAD PAYMENT RECEIPT
                            </span>
                            <div className='my-3'><img src='./src/assets/upload_symbol.png' width={40} height={40} /></div>
                            <span className="italic text-[8px] bg-[linear-gradient(270deg,#0D32C5_0%,#1768DB_37.9%,#1E8AE9_93.9%,#23A7F4_100%)] bg-clip-text text-transparent font-bold">
                                *DRAG AND DROP YOUR IMAGE OR CLICK THE BUTTON
                            </span>
                            <span className='italic text-[8px] bg-[linear-gradient(270deg,#0D32C5_0%,#1768DB_37.9%,#1E8AE9_93.9%,#23A7F4_100%)] bg-clip-text text-transparent font-bold'>
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
            <div className="absolute top-[29px] left-[-1%] flex h-7 w-7 items-center justify-center rounded-full bg-gradient-text font-bold text-white text-xl z-10">
                4
            </div>
            <div className="mt-4 bg-[linear-gradient(270deg,#0D32C5_0%,#1768DB_37.9%,#1E8AE9_93.9%,#23A7F4_100%)] bg-clip-text text-transparent font-bold">
                <p className="text-sm italic">
                    PLEASE PAY YOUR FEES IN THE FOLLOWING ACCOUNT!
                    <br />
                    BANK NAME: <span className="font-medium text-black not-italic">NAYAPAY</span>
                    <br />
                    ACCOUNT TITLE: <span className="font-medium text-black not-italic">MUHAMMAD SHAHMIR RAZA</span>
                    <br />
                    ACCOUNT NUMBER: <span className="font-medium text-black not-italic">03188409943</span>
                </p>
            </div>
        </div>
    );
}

export default Payment;