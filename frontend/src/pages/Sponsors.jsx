import Hero from '@/components/Home/Hero';
// import Hero from '@/components/Sponsors/Hero';
import SponsorMain from '@/components/Sponsors/SponsorMain';
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
  return (
    <div className="">
      <Hero pageType={"Sponsors"} />
      <SponsorMain sponsors={sponsors} />
    </div>
  )
}

export default Sponsors;