const Note = () => {
    return (
        <div className="rounded-lg p-4 text-white mt-12 flex justify-center w-[91%]">
            <div className='w-full md:w-[41%] bg-[linear-gradient(270deg,#0D32C5_0%,#1768DB_37.9%,#1E8AE9_93.9%,#23A7F4_100%)] px-16 py-4 rounded-xl'>
                <p className="text-xs sm:text-sm font-medium">
                    Note:
                    <br />
                    Free transport will be provided to all the participants. Participants wanting
                    accommodation should email first at pr@nuceskhi.acm.org.
                    <br />
                    Accommodation will be paid.
                </p>
            </div>
        </div>
    );
}

export default Note;