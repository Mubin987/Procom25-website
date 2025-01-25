import {useState, useEffect, React} from 'react'
import axios from 'axios'
import Hero from '../components/Home/Hero'
import Feature from '../components/Home/Feature'
import OurLegacy from '../components/Home/OurLegacy'
import Competitions from '../components/Home/Competitions'
import Sponsors from '../components/Home/Sponsors'
import OurSpeakers from '@/components/Home/OurSpeakers'
import PanelDiscussion from '@/components/Home/PanelDiscussion'
const Home = () => {
  
  const [competitions, setCompetitions] = useState([])

  const black1heading = `Become the Part of `
  const blueheading = `PROCOM 25 `
  const black2heading = `Panel Discussion`
  const text = `Be a part of an inspiring and thought-provoking panel discussion where industry leaders, innovators, and visionaries come together to explore the future of [your focus area, e.g., technology, communication, or business]. This is your chance to share your insights, learn from diverse perspectives, and contribute to shaping the dialogue on critical topics that matter. Don’t miss the opportunity to network, collaborate, and leave your mark at Procom 25. Let your voice be heard—become a part of this transformative experience!`
  const image = `https://res.cloudinary.com/drrz1wz3s/image/upload/v1737753852/2_ilrp6l.jpg`





  useEffect(()=>{
    axios.get("https://procom25-server.vercel.app/competition")
    .then((res)=> {
      setCompetitions(res.data)
    })
  }, [])

  

  return (
    <div>
      <Hero pageType={"Home"} />
      <Feature />
      <OurLegacy />
      <Competitions competitions={competitions}/>
      <PanelDiscussion 
        black1={black1heading} 
        blue={blueheading} 
        black2={black2heading} 
        text={text} 
        image={image} 
      />
      {/* <OurSpeakers /> */}
      {/* <Sponsors /> */}
    </div>
  )
}

export default Home