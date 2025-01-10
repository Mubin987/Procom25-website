import React from 'react'

const sponsors = [
  // Gold Sponsors
  { name: "Gold Sponsor 1", logo: "./src/assets/sponsor-service.svg", type: "GOLD" },
  { name: "Gold Sponsor 2", logo: "./src/assets/sponsor-service.svg", type: "GOLD" },
  { name: "Gold Sponsor 3", logo: "./src/assets/sponsor-service.svg", type: "GOLD" },
  { name: "Gold Sponsor 4", logo: "./src/assets/sponsor-service.svg", type: "GOLD" },
  { name: "Gold Sponsor 5", logo: "./src/assets/sponsor-service.svg", type: "GOLD" },
  { name: "Gold Sponsor 6", logo: "./src/assets/sponsor-service.svg", type: "GOLD" },
  // Silver Sponsors
  { name: "Silver Sponsor 1", logo: "./src/assets/sponsor-service.svg", type: "SILVER" },
  { name: "Silver Sponsor 2", logo: "./src/assets/sponsor-service.svg", type: "SILVER" },
  { name: "Silver Sponsor 3", logo: "./src/assets/sponsor-service.svg", type: "SILVER" },
  // Partners
  { name: "Partner 1", logo: "./src/assets/sponsor-service.svg", type: "PARTNER" },
  { name: "Partner 2", logo: "./src/assets/sponsor-service.svg", type: "PARTNER" },
  { name: "Partner 3", logo: "./src/assets/sponsor-service.svg", type: "PARTNER" },
]

const SponsorSection = ({ title, sponsors }) => (
  <section className="mb-16">
    <div className="flex items-center justify-center gap-4 mb-8">
      <div className="h-px bg-blue-300 w-full" />
      <h2 className="text-4xl font-semibold text-blue-800 whitespace-nowrap">
        {title}
      </h2>
      <div className="h-px bg-blue-300 w-full" />
    </div>
    <div className="grid grid-cols-3 gap-5 justify-items-center max-w-2xl mx-auto">
      {sponsors.map((sponsor, index) => (
        <div
          key={index}
          className="rounded-lg p-4 w-full aspect-square flex items-center justify-center"
        >
          <img
            src={sponsor.logo}
            alt={`${sponsor.name} logo`}
            className="object-contain max-w-full max-h-full rounded-lg w-[300px] h-[200px]"
          />
        </div>
      ))}
    </div>
  </section>
)

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
        <div className="flex flex-col justify-between items-center mb-16 py-20 border-b border-blue-200">
          <h1 className="text-5xl font-bold text-blue-800">
            Our Proud Sponsors
          </h1>
          <button 
            className="className='w-[30%] text-[13px] sm:text-[20px] ml-auto mt-14 bg-blue-500 hover:bg-blue-600 text-lg bg-[linear-gradient(90deg,_#218EF1_0%,_#1865DD_50%,_#0E3AC8_100%)] [box-shadow:6px_4px_11.7px_0px_#00000040] font-bold text-white px-5 py-3 rounded-full"
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