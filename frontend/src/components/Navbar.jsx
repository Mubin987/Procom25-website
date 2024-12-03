import React from 'react';
import { NavLink, useLocation } from 'react-router-dom';

const Navbar = () => {
  const firstHalfLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about-us' },
  ];
  const secondHalfLinks = [
    { name: 'Register', path: '/register' },
    { name: 'Modules', path: '/modules' },
    { name: 'Sponsors', path: '/sponsors' },
  ];

  const location = useLocation();

  return (
    <nav className='flex justify-between'>
      <div className='flex justify-center gap-[42px] items-end flex-1'>
        {firstHalfLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className='text-lg font-semibold leading-[28.98px] group flex items-center flex-col'
          >
            {link.name}
            <div
              className={`${location.pathname === link.path ? 'block' : 'hidden'
                } group-hover:block bg-[#2169D4] w-[80%] relative h-[2px]`}
            ></div>
            <div
              className={`${location.pathname !== link.path ? 'block' : 'hidden'
                } group-hover:hidden bg-transparent w-[80%] relative h-[2px]`}
            ></div>
          </NavLink>
        ))}
      </div>
      <div
        className='flex justify-center items-center'
        style={{
          width: '350px',
          height: '60px',
          clipPath: 'polygon(0 0, 100% 0, 80% 100%, 20% 100%)',
          backgroundColor: '#0E3BC8',
        }}
      >
        <img src="/procom-home-logo.png" alt="Procom '25 logo" className='w-24' />
      </div>
      <div className='flex justify-center gap-[42px] items-end flex-1 pt-2'>
        {secondHalfLinks.map((link) => (
          <NavLink
            key={link.name}
            to={link.path}
            className='text-lg font-semibold leading-[28.98px] group flex items-center flex-col'
          >
            {link.name}
            <div
              className={`${location.pathname === link.path ? 'block' : 'hidden'
                } group-hover:block bg-[#2169D4] w-[80%] relative h-[2px]`}
            ></div>
            <div
              className={`${location.pathname !== link.path ? 'block' : 'hidden'
                } group-hover:hidden bg-transparent w-[80%] relative h-[2px]`}
            ></div>
          </NavLink>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
