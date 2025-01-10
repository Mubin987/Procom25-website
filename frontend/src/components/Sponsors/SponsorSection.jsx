const SponsorSection = ({ title, sponsors }) => (
    <section className="mb-16">
        <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-full border-t-4 border-dashed border-themeBlue " />
            <h2 className={`text-5xl italic whitespace-nowrap bg-[linear-gradient(270deg,#0D32C5_0%,#1768DB_37.9%,#1E8AE9_93.9%,#23A7F4_100%)] font-bold bg-clip-text text-transparent
        `}>
                {title}
            </h2>
            <div className="w-full border-t-4 border-dashed border-themeBlue " />
        </div>
        <div className="grid grid-cols-5 gap-x-5 gap-y-5 justify-items-center max-w-full mx-auto p-5">
            {sponsors.map((sponsor, index) => (
                <div
                    key={index}
                    className="rounded-lg p-4 w-full h-28 flex items-center justify-center shadow-md bg-white"
                >
                    <img
                        src={sponsor.logo}
                        alt={`${sponsor.name} logo`}
                        className="object-contain max-w-full max-h-full rounded-lg w-[400px] h-[300px]"
                    />
                </div>
            ))}
        </div>
    </section>
)

export default SponsorSection;