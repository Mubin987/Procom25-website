import './App.css'
import { Link, Outlet } from "react-router-dom";
import { Footer, Navbar } from './components';

function App() {

  return (
    <>
      <Navbar />
      <Outlet />
      {/* <Footer /> */}
    </>
  )
}

export default App
