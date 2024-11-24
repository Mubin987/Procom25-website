import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import Modules from './components/Modules';
import Sponsor from './components/Sponsor';


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Router future={{ v7_startTransition: true, v7_relativeSplatPath: true }}>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/sponsor" element={<Sponsor />} />
          <Route path="/modules" element={<Modules />} />
        </Routes>
      </div>
    </Router>
    <div>Hello World</div>
    </>
  );
}

export default App
