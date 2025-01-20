import {useState, useEffect, React} from 'react'
import axios from 'axios'
import Hero from '../components/Home/Hero'
import Feature from '../components/Home/Feature'
import OurLegacy from '../components/Home/OurLegacy'
import Competitions from '../components/Home/Competitions'
import Sponsors from '../components/Home/Sponsors'

const Home = () => {
  
  const [competitions, setCompetitions] = useState([])

  useEffect(()=>{
    axios.get("http://localhost:3000/competition")
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
      {/* <Sponsors /> */}
    </div>
  )
}

export default Home