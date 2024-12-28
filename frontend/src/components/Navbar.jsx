import React from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
    { name: 'Register', path: '/register' },
    { name: 'Modules', path: '/modules' },
    { name: 'Sponsors', path: '/sponsors' },
  ];

  const location = useLocation();

  return (
    <nav className="bg-transparent py-5 px-4 flex w-full absolute top-0 z-50">
      <div className="w-full flex justify-end items-center">
        <div>
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={`${location.pathname === link.path
                ? 'underline decoration-4'
                : 'hover:text-themeBlue hover:underline hover:decoration-4'
                } text-lg text-themeBlue font-semibold mx-5 transition duration-200`}
            >
              {link.name}
            </NavLink>
          ))}
        </div>
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
    </nav>
  );
};

export default Navbar;
