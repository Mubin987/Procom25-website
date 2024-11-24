import React, { useState } from 'react'
import ComingSoon from './Comingsoon';

const Home = () => {
    const [count, setCount] = useState(0)
  
    return (
      <div>
       <ComingSoon />
      </div>
    )
  }

export default Home;