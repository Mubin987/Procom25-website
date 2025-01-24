


const Speaker = ({name, desc, img})=> {

    return(
        <div className="mx-3 my-12 flex max-w-sm gap-x-4 rounded-xl bg-white shadow-lg outline outline-black/5 dark:bg-slate-800 dark:shadow-none dark:-outline-offset-1 dark:outline-white/10">
            <img className=" max-w-1/2 shrink-0 sm:h-full md:h-full lg:h-full xl:h-full rounded-xl" src={img} alt={`${name} image`} />
            <div className="overflow-hidden">
                <div className="text-xl font-medium text-black dark:text-white">{name}</div>
                <p className="text-gray-500 dark:text-gray-400">{desc}</p>
                {/* <p class="mt-2 text-gray-500 dark:text-gray-400">Ultricies massa malesuada viverra cras lobortis. Tempor orci hac ligula dapibus mauris sit ut eu. Eget turpis urna maecenas cras. Nisl dictum.</p> */}
            </div>
        </div>
    )


}

export default Speaker