import Hero from '@/components/Home/Hero';
import SponsorSection from '@/components/Sponsors/SponsorSection';
import { useState, useEffect } from 'react';
import axios from 'axios';
import React from 'react'


const Sponsors = () => {

  const [sponsors, setSponsors] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/sponsors-optimized")
    .then((s) => {
      setSponsors(s.data)
    })
  }, [])


  return (
    <div className="">
      <Hero pageType={"Sponsors"} />
      <div  className="container mx-auto px-4 py-16 w-full my-20 font-lemonmilk">
      {
                sponsors.map( (s, index) => (
                    <SponsorSection key={index} sponsors={s}/>
                ))
            }
      </div>
    </div>
  )
}

export default Sponsors;