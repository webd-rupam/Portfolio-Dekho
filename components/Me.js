"use client"

import React from 'react';
import Link from 'next/link';
import { Typewriter } from 'react-simple-typewriter';

const Me = () => {
  return (
<div className="relative inset-0 min-h-[92vh] md:min-h-[90vh] w-full flex items-center justify-center bg-gradient-to-r from-[#0f1f0f] via-[#002c1e] to-[#328977]">
  


  
      
      <div className='hidden md:block socialbox absolute left-0 shadow-custom-full'>
        <ul className='flex flex-col justify-around items-center bg-white w-[50px] h-64 shadow-custom-full'>
          <a href="https://www.linkedin.com/in/rupam-majee-0811a6288/" target="_blank" rel="noopener noreferrer">
            <li className='transition-transform duration-300 transform hover:scale-110 active:scale-90'>
              <img className='w-7' src="linkedin.png" alt="LinkedIn" />
            </li>
          </a>

          <a href="https://github.com/webd-rupam" target="_blank" rel="noopener noreferrer">
            <li className='transition-transform duration-300 transform hover:scale-110 active:scale-90'>
              <img className='w-7' src="github.png" alt="GitHub" />
            </li>
          </a>

          <a href="https://x.com/webd_rupam" target="_blank" rel="noopener noreferrer">
            <li className='transition-transform duration-300 transform hover:scale-110 active:scale-90'>
              <img className='w-6' src="x.png" alt="X" />
            </li>
          </a>

          <a href="https://www.instagram.com/rupam.ctl/" target="_blank" rel="noopener noreferrer">
            <li className='transition-transform duration-300 transform hover:scale-110 active:scale-90'>
              <img className='w-7' src="insta.png" alt="Instagram" />
            </li>
          </a>
        </ul>
      </div>

      {/* Text Content */}
      <div className="text-center max-w-7xl mx-auto md:px-8 lg:px-40 px-4 flex flex-col justify-center h-full relative">
        <div className="text-2xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight">
          <span className='text-orange-500'>HI,</span>
        <Typewriter
                words={[' IM RUPAM MAJEE']}
                cursor
                cursorStyle=""
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
                
              />
          
        </div>

        <p className='mt-9 text-lg md:text-xl lg:text-xl text-gray-200 md:px-10'>
          A result-oriented web developer specializing in building and managing impactful websites and web-solutions.
        </p>

        <Link href={"#projects"}>
        <button
    type="button"
    className="relative transition-transform duration-500 ease-in-out transform hover:translate-y-1 mt-14 md:mt-16 text-white bg-gradient-to-r from-[#6adf68] to-[#117495] focus:ring-4 focus:outline-none focus:ring-[#00e0c2] font-semibold rounded-lg text-base md:text-lg px-8 md:px-12 lg:px-16 py-3 md:py-4 text-center shadow-lg"
  >
    VIEW PROJECTS
  </button>
        </Link>
      </div>

      {/* Down Arrow Animation */}
      <div className="absolute bottom-6 md:bottom-8 lg:bottom-12 left-1/2 transform -translate-x-1/2">
        <div className="animate-bounce">
          <div className="w-6 h-6 md:w-8 md:h-8 border-b-4 border-r-4 border-gray-400 rotate-45"></div>
        </div>
      </div>
    </div>
  );
}

export default Me;
