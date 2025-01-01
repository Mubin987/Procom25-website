import React from 'react'
import Hero from '../components/Home/Hero'
import Feature from '../components/Home/Feature'
import OurLegacy from '../components/Home/OurLegacy'
import Competitions from '../components/Home/Competitions'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Feature />
      <OurLegacy />
      <Competitions />
    </div>
  )
}

export default Home