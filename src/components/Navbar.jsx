import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import Hamburger from 'hamburger-react';
import Logo from '../assets/us-icon.png';

export default function Navbar() {
  const [isOpen, setOpen] = useState(false);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const handleToggle = () => setOpen(!isOpen);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setOpen(false);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const isLargeScreen = windowWidth >= 1024;

  return (
    <nav className='bg-pink-300 h-20 w-full flex justify-between items-center' style={{ fontSize: '30px'}}>
      <div className='flex items-center'>
        <img src={Logo} alt='Logo' className='ml-4' style={{ height: '150px', width: '300px' }}  />
        <label className='text-black leading-[80px] md:leading[80px] ml-2 md:ml-4 md:text-4x1 text-3x1'>
          Our love
        </label>
      </div>
      {isLargeScreen ? (
        <ul className='flex space-x-4 mr-10'>
          <li>
            <Link to='/projeto-amor' className="hover:text-white hover:bg-pink-500">Home</Link>
          </li>
          <li>
            <Link to='/story' className="hover:text-white hover:bg-pink-500">Our story</Link>
          </li>
          <li>
            <Link to='/memories' className="hover:text-white hover:bg-pink-500">Good memories</Link>
          </li>
          <li>
            <Link to='/future' className="hover:text-white hover:bg-pink-500">Our future</Link>
          </li>
        </ul>
      ) : (
        <Hamburger toggled={isOpen} toggle={handleToggle} />
      )}
      <ul
        className={`${
          isLargeScreen
            ? 'hidden'
            : isOpen
            ? 'fixed top-0 left-0 w-screen h-screen flex flex-col justify-center items-center text-white bg-pink-200'
            : 'hidden'
        }`}
      >
        <li className='my-2 hover:text-black hover:bg-pink-700'>
          <Link to='/projeto-amor' onClick={() => setOpen(false)}>
            Home
          </Link>
        </li>
        <li className='my-2 hover:text-black hover:bg-pink-700'>
          <Link to='/story' onClick={() => setOpen(false)}>
            Our story
          </Link>
        </li>
        <li className='my-2 hover:text-black hover:bg-pink-700'>
          <Link to='/memories' onClick={() => setOpen(false)}>
            Good memories
          </Link>
        </li>
        <li className='my-2 hover:text-black hover:bg-pink-700'>
          <Link to='/future' onClick={() => setOpen(false)}>
            Our future
          </Link>
        </li>
      </ul>
    </nav>
  );
}
