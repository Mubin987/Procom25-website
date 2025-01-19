import {useState, useEffect, React} from 'react'
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
      console.log(res.data)
    })
  }, [])


  return (
    <div>
      <Hero pageType={"Home"} />
      <Feature />
      <OurLegacy />
      <Competitions />
      <Sponsors />
    </div>
  )
}

export default Home