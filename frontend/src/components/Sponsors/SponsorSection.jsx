const SponsorSection = ({ title, sponsors }) => (
    <section className="mb-16 sponsor-section">
        <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-full border-t-4 border border-[#434242]" />
            {/* <Heading1 text={ title} /> */}
            <h2 className={`text-5xl italic whitespace-nowrap bg-[linear-gradient(90deg,_#434242_25.4%,_#2C2C2C_78.4%,_#161616_100%)] font-bold bg-clip-text text-transparent`}>
                {title}
            </h2>
            <div className="w-full border-t-4 border border-[#434242]" />
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
                        className="object-contain max-w-full max-h-full rounded-lg w-[400px] h-[300px] blur-sm"
                    />
                </div>
            ))}
        </div>
    </section>
)

export default SponsorSection;