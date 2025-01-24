const SponsorSection = ({ title, sponsors }) => (
    <section className="mb-16 sponsor-section">
        <div className="flex items-center justify-center gap-4 mb-8">
            <div className="w-full border-t-4 border border-[#434242]" />
            <h2 className={`text-5xl whitespace-nowrap bg-[linear-gradient(90deg,_#434242_25.4%,_#2C2C2C_78.4%,_#161616_100%)] font-bold bg-clip-text text-transparent`}>
                {sponsors.category_title}
            </h2>
            <div className="w-full border-t-4 border border-[#434242]" />
        </div>
        <img src={sponsors.picture_url} alt={sponsors.category_title} />
    </section>
)

export default SponsorSection;