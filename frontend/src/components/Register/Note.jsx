const Note = () => {
    return (
        <div className="rounded-lg p-4 text-white mt-12 flex justify-center mx-auto font-montserrate">
            <div className='w-full lg:w-[41%] bg-[linear-gradient(90deg,_#1F95ED_0%,_#2169D4_100%);] px-8 py-4 rounded-xl'>
                <p className="text-xs sm:text-sm font-medium">
                    Note:
                    <br />
                    Free transport will be provided to all the participants.
                    <br />
                    Participants wanting accomodation should email first at procom.net@nu.edu.pk
                    Accommodation will be paid.
                </p>
            </div>
        </div>
    );
}

export default Note;