import React from 'react'
import Hero from '../components/Home/Hero'
import Feature from '../components/Home/Feature'
import OurLegacy from '../components/Home/OurLegacy'
import Competitions from '../components/Home/Competitions'
import Sponsors from '../components/Home/Sponsors'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Feature />
      <OurLegacy />
      <Competitions />
      <Sponsors />
    </div>
  )
}

export default Home