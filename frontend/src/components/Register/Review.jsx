import RegisterHeading from "../ui/register-headings";

const Review = () => {
    return (
        <div className="relative pl-10 mt-28">
            <RegisterHeading heading={"review"} textSize='text-2xl' />
            <div className='absolute left-4 top-7 md:left-6 flex w-[80%] items-center'>
                <div className="w-full border-t-4 border-dashed border-themeBlue " />
                <button type='submit' className='w-[30%] ml-3 text-[13px] sm:text-[22px] bg-blue-500 hover:bg-blue-600 text-lg bg-[linear-gradient(90deg,_#218EF1_0%,_#1865DD_50%,_#0E3AC8_100%)] [box-shadow:6px_4px_11.7px_0px_#00000040] font-bold text-white px-6 py-1 rounded-full'>
                    Submit
                </button>
            </div>
            <div className="absolute top-[33px] left-[-1%] flex h-7 w-7 items-center justify-center rounded-full bg-gradient-text font-bold text-white text-xl z-10">
                5
            </div>
            <div className="mt-4 w-[50%] sm:w-full bg-[linear-gradient(270deg,#0D32C5_0%,#1768DB_37.9%,#1E8AE9_93.9%,#23A7F4_100%)] bg-clip-text text-transparent font-bold">
                <p className="text-[13px] sm:text-sm italic">
                    PLEASE REVIEW YOUR INFORMATION <br/> AND CLICK SUBMIT!
                </p>
            </div>
        </div>
    );
}

export default Review;