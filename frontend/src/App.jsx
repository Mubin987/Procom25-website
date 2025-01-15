import './App.css'
import { Outlet, ScrollRestoration } from "react-router-dom";
import { Footer, Navbar } from './components';
import { Toaster } from './components/ui/toaster';

function App() {

  return (
    <>
      <Navbar />
      <ScrollRestoration />
      <Outlet />
      <Toaster />
      <Footer />
    </>
  )
}

export default App
