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
        <div className="container mx-auto px-4 py-16 w-full">
            {sponsorsByType["GOLD"] && (
                <SponsorSection title="Gold Sponsors" sponsors={sponsorsByType["GOLD"]} />
            )}
            {sponsorsByType["SILVER"] && (
                <SponsorSection title="Silver Sponsors" sponsors={sponsorsByType["SILVER"]} />
            )}
            {sponsorsByType["PARTNER"] && (
                <SponsorSection title="Our Partners" sponsors={sponsorsByType["PARTNER"]} />
            )}
        </div>
    );
}

export default SponsorMain;