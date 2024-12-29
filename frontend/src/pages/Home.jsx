import React from 'react'
import Hero from '../components/Home/Hero'
import Carousel from '../components/Home/carousel/Carousel'

const Home = () => {
  return (
    <div>
      <Hero/>
      <Carousel slides={[
        "https://picsum.photos/800/400",
        "https://picsum.photos/800/401",
        "https://picsum.photos/800/402",
      ]} />
    </div>
  )
}

export default Home