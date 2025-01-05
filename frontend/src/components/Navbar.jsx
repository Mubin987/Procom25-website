import React, { useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Register', path: '/register' },
    { name: 'Modules', path: '/modules' },
    { name: 'Sponsors', path: '/sponsors' },
  ];

  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-[4px] w-12 my-[3px] rounded-full ${isOpen ? "bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#D0EFFF_65.4%,_#A7E2FF_100%)]" : "bg-themeBlue"} transition ease transform duration-300`;

  const location = useLocation();

  return (
    <nav className="bg-transparent py-5 px-4 flex w-full absolute top-0 z-50">
      <div className="w-full flex justify-between sm:justify-end items-center">
        {/* Hamburger Menu */}
        <div className={`block ${isOpen ? "fixed" : "relative"} sm:hidden z-50`}>
          <button
            className="flex flex-col rounded justify-center items-center group"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div
              className={`${genericHamburgerLine} ${isOpen
                ? "rotate-45 translate-y-[8px]"
                : ""
                }`}
            />
            <div
              className={`${genericHamburgerLine} ${isOpen ? "opacity-0" : ""
                }`}
            />
            <div
              className={`${genericHamburgerLine} ${isOpen
                ? "-rotate-45 -translate-y-3 "
                : ""
                }`}
            />
          </button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:block">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={`${location.pathname === link.path
                ? "underline decoration-4"
                : "hover:text-themeBlue hover:underline hover:decoration-4"
                } text-lg text-themeBlue font-semibold mx-4 md:mx-5 transition duration-200`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Logo */}
        <Link to="/">
          <img
            className="w-8 mx-4"
            src="/Procom-Logo.png"
            alt="Procom Logo"
            width={1000}
            height={1000}
          />
        </Link>
      </div>

      {/* Mobile Navigation Overlay */}
      <div
        className={`fixed inset-0 bg-[linear-gradient(360deg,_#1F95ED_0%,_#0E3AC8_100%)] z-40 flex flex-col gap-4 items-center justify-center transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
          }`}
      >
        <Link to="/" onClick={() => setIsOpen(false)}>
          <img
            className="w-12 mb-8"
            src="/Procom-Logo-Lite.png"
            alt="Procom Logo"
            width={1000}
            height={1000}
          />
        </Link>
        <div className='flex flex-col justify-center items-center gap-2'>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => `
    text-3xl bg-[linear-gradient(90deg,_#FFFFFF_14.9%,_#D0EFFF_65.4%,_#A7E2FF_100%)] bg-clip-text text-transparent font-semibold mx-4 md:mx-5 transition duration-200 
    ${isActive ? "underline underline-offset-4 decoration-[linear-gradient(90deg,_#FFFFFF_14.9%,_#D0EFFF_65.4%,_#A7E2FF_100%)] decoration-[3px]" : ""}
    hover:underline hover:underline-offset-4 hover:decoration-[linear-gradient(90deg,_#FFFFFF_14.9%,_#D0EFFF_65.4%,_#A7E2FF_100%)] hover:decoration-[3px]
  `}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

      </div>
    </nav>
  );
};

export default Navbar;
