import SponsorSection from "./SponsorSection";

const SponsorMain = ({ sponsors }) => {
    const sponsorsByType = sponsors.reduce((acc, sponsor) => {
        if (!acc[sponsor.type]) {
            acc[sponsor.type] = [];
        }
        acc[sponsor.type].push(sponsor);
        return acc;
    }, {});

    return (
        <div className="container mx-auto px-4 py-16 w-full my-20 font-lemonmilk">
            {sponsorsByType["GOLD"] && (
                <SponsorSection title="GOLD SPONSORS" sponsors={sponsorsByType["GOLD"]} />
            )}
            {sponsorsByType["SILVER"] && (
                <SponsorSection title="SILVER SPONSORS" sponsors={sponsorsByType["SILVER"]} />
            )}
            {sponsorsByType["PARTNER"] && (
                <SponsorSection title="OUR PARTNERS" sponsors={sponsorsByType["PARTNER"]} />
            )}
        </div>
    );
}

export default SponsorMain;