import React from 'react';
import Background from '../assets/background-ela.jpeg';
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='relative bg-cover h-[90vh]' style={{ backgroundImage: `url(${Background})` }}>
      <Link to='/story'> 
        <button className='absolute top-1/2 left-1/2 transform -translate-x-1/2 translate-y-1/2 text-2xl md:text-4xl bg-transparent border border-black text-black py-3 px-6 rounded-full hover:bg-pink-200 hover:text-white transition duration-300'>
          Clique aqui para conhecer nossa história
          <svg className='inline-block w-6 h-6 md:w-8 md:h-8 ml-2' viewBox='0 0 24 24'>
            <path
              fill='currentColor'
              d='M12 21.35L4.53 17.47C2.54 16.42 2 14.5 2.77 13.04c1.25-2.23 3.71-3.15 6.07-2.28l1.66.72c1.08.47 2.28.47 3.36 0l1.66-.72c2.36-.87 4.82.05 6.07 2.28.77 1.37.23 2.99-1.32 3.54L12 21.35z'
            />
          </svg>
        </button>
      </Link>      
    </div>
  );
}
