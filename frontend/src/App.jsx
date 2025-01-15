import './App.css'
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer, Navbar } from './components';

function App() {

  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Footer />
    </>
  )
}

export default App
