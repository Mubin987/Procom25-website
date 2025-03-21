import './App.css'
import './locomotive-scroll.css'
import axios from 'axios';
import { Outlet, ScrollRestoration, useLocation } from "react-router-dom";
import { Footer, Navbar } from './components';
import { useState, useEffect, useLayoutEffect, useRef } from 'react';
import gsap from 'gsap';
import { Toaster } from './components/ui/toaster';

function App() {
  const comp = useRef(null);


  useLayoutEffect(() => {
    const body = document.body;
    body.style.overflow = 'hidden';

    let ctx = gsap.context(() => {
      const t1 = gsap.timeline({
        onComplete: () => {
          body.style.overflow = 'auto';
        }
      });

      t1.from('#logo1', {
        opacity: 0,
        y: '+=30',
        stagger: 0.5,
      })
        .to('#logo1', {
          opacity: 0,
          y: '-=30',
          delay: 0.7,
          stagger: 0.5,
        })
        .to('#intro-slider', {
          yPercent: '-100',
          duration: 1,
        });
    }, comp);

    return () => {
      ctx.revert();
      body.style.overflow = 'auto';
    };
  }, []);

  function ScrollToHash() {
    const { hash } = useLocation();

    useEffect(() => {
      if (hash) {
        const element = document.getElementById(hash.substring(1)); // Remove '#' from hash
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    }, [hash]);

    return null;
  }

  return (
    <div className='relative' ref={comp}>
      <div
        id='intro-slider'
        className='h-screen absolute top-0 left-0 z-[100] flex flex-col gap-10 tracking-tight w-full justify-center items-center p-10 bg-black/60 backdrop-blur-md shadow-[0_8px_32px_0_rgba(31,38,135,0.37)]'
        style={{
          backgroundBlendMode: 'overlay',
        }}
      >
        <img id='logo1' src="/procom-home-logo.png" alt="procom logo" className='sm:w-1/3' />
      </div>
      <div id='welcome'>
        <Navbar />
        <ScrollToHash />
        <ScrollRestoration />
        <Outlet />
        <Toaster />
      <Footer />
      </div>
    </div>
  );
}

export default App;
