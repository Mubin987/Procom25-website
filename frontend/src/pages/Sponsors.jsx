import SponsorSection from '@/components/Sponsors/SponsorSection';
import React from 'react'

const sponsors = [
  // Gold Sponsors
  { name: "Gold Sponsor 1", logo: "./src/assets/imperium.png", type: "GOLD" },
  { name: "Gold Sponsor 2", logo: "./src/assets/imperium.png", type: "GOLD" },
  { name: "Gold Sponsor 3", logo: "./src/assets/imperium.png", type: "GOLD" },
  { name: "Gold Sponsor 4", logo: "./src/assets/imperium.png", type: "GOLD" },
  { name: "Gold Sponsor 5", logo: "./src/assets/imperium.png", type: "GOLD" },
  { name: "Gold Sponsor 6", logo: "./src/assets/imperium.png", type: "GOLD" },
  { name: "Gold Sponsor 2", logo: "./src/assets/imperium.png", type: "GOLD" },
  { name: "Gold Sponsor 3", logo: "./src/assets/imperium.png", type: "GOLD" },
  { name: "Gold Sponsor 4", logo: "./src/assets/imperium.png", type: "GOLD" },
  { name: "Gold Sponsor 5", logo: "./src/assets/imperium.png", type: "GOLD" },
  // Silver Sponsors
  { name: "Silver Sponsor 1", logo: "./src/assets/folio3.png", type: "SILVER" },
  { name: "Silver Sponsor 2", logo: "./src/assets/folio3.png", type: "SILVER" },
  { name: "Silver Sponsor 3", logo: "./src/assets/folio3.png", type: "SILVER" },
  // Partners
  { name: "Partner 1", logo: "./src/assets/folio3.png", type: "PARTNER" },
  { name: "Partner 2", logo: "./src/assets/folio3.png", type: "PARTNER" },
  { name: "Partner 3", logo: "./src/assets/folio3.png", type: "PARTNER" },
]

const Sponsors = () => {
  const sponsorsByType = sponsors.reduce((acc, sponsor) => {
    if (!acc[sponsor.type]) {
      acc[sponsor.type] = [];
    }
    acc[sponsor.type].push(sponsor);
    return acc;
  }, {});

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100">
      <div className="container mx-auto px-4 py-16 w-full">
        <div className="relative flex flex-col justify-between items-center mb-16 pt-20 pb-28 border-blue-200">
          <h1 className="text-7xl bg-[linear-gradient(270deg,#0D32C5_0%,#1768DB_37.9%,#1E8AE9_93.9%,#23A7F4_100%)] bg-clip-text text-transparent font-bold">
            Our Proud Sponsors
          </h1>
          <button 
            className="absolute -bottom-6 right-0 className='w-[30%] text-[13px] sm:text-[20px] bg-blue-500 hover:bg-blue-600 text-lg bg-[linear-gradient(90deg,_#218EF1_0%,_#1865DD_50%,_#0E3AC8_100%)] [box-shadow:6px_4px_11.7px_0px_#00000040] font-bold text-white px-5 py-3 rounded-full"
          >
            Become a Sponsor
          </button>
        </div>

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
    </div>
  )
}

export default Sponsors;