"use client"

import React, { useState, useRef } from 'react'
import Link from 'next/link'

const Navbar = () => {
  const [isDropdown, setisDropdown] = useState(false)
  const ref = useRef()

  const toggleDropdown = () => {
    setisDropdown(!isDropdown);
    // Toggle icon between hamburger and close
    ref.current.src = isDropdown ? "hamburger.png" : "cross.png";
  }

  const closeDropdown = () => {
    setisDropdown(false);
    ref.current.src = "hamburger.png";
  }

  const iconStyle = {
    transition: 'transform 0.3s ease, opacity 0.3s ease', // Smooth transition
    transform: isDropdown ? 'rotate(90deg)' : 'rotate(0deg)', // Rotate icon
    opacity: isDropdown ? '0.8' : '1', // Slightly faded when open
    filter: 'invert(0)', // Ensure the icon remains black
  };

  return (
    <>
      <nav className='bg-white flex justify-between items-center lg:px-20 px-4 md:h-20 h-[70px] w-full lg:text-base font-extrabold text-sm text-black shadow-md z-10 sticky top-0'>
        <Link href={"/"}>
          <div className="logoName flex items-center gap-3">
            <img className='lg:w-12 w-10 rounded-full' src="dp.jpg" alt="Profile Picture" />
            <p className='lg:text-lg text-sm font-bold hover:text-[#558dc9] transition-all'>Rupam Majee</p>
          </div>
        </Link>

        <ul className='lg:flex hidden lg:gap-16 gap-3 font-bold ml-auto text-sm'>
          <Link href={"/"}><li className='hover:text-[#558dc9] transition-colors duration-300'>HOME</li></Link>
          <Link href={"/#about"}><li className='hover:text-[#558dc9] transition-colors duration-300'>ABOUT</li></Link>
          <Link href={"/#projects"}><li className='hover:text-[#558dc9] transition-colors duration-300'>PROJECTS</li></Link>
          <Link href={"/#contact"}><li className='hover:text-[#558dc9] transition-colors duration-300'>CONTACT</li></Link>
        </ul>

        <span onClick={toggleDropdown}>
          <img ref={ref} src="hamburger.png" alt="Menu Icon" className='lg:hidden w-6' style={iconStyle} />
        </span>
      </nav>

      {isDropdown && (
        <div className={`dropdown w-full fixed top-[70px] left-0 z-40 font-bold text-black bg-white border border-gray-200 shadow-lg transform transition-transform duration-300 ease-in-out ${isDropdown ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <ul className='flex flex-col items-center'>
            <Link onClick={closeDropdown} className='flex items-center w-full border-b border-gray-200 hover:bg-gray-100 transition-all cursor-pointer p-4 transform duration-300 ease-in-out' href={"/"} passHref>
              <div className='flex items-center justify-center w-full'>
                <img className='w-7 h-7 mr-2' src="home.gif" alt="Home" />
                <span>HOME</span>
              </div>
            </Link>
            <Link onClick={closeDropdown} className='flex items-center w-full border-b border-gray-200 hover:bg-gray-100 transition-colors duration-300 cursor-pointer p-4' href={"/#about"} passHref>
              <div className='flex items-center justify-center w-full'>
                <img className='w-7 h-7 mr-2' src="about.gif" alt="About" />
                <span>ABOUT</span>
              </div>
            </Link>
            <Link onClick={closeDropdown} className='flex items-center w-full border-b border-gray-200 hover:bg-gray-100 transition-colors duration-300 cursor-pointer p-4' href={"/#projects"} passHref>
              <div className='flex items-center justify-center w-full relative left-3'>
                <img className='w-7 h-7 mr-2' src="projects.gif" alt="Projects" />
                <span>PROJECTS</span>
              </div>
            </Link>
            <Link onClick={closeDropdown} className='flex items-center w-full border-b border-gray-200 hover:bg-gray-100 transition-colors duration-300 cursor-pointer p-4' href={"/#contact"} passHref>
              <div className='flex items-center justify-center w-full relative left-2'>
                <img className='w-7 h-7 mr-2' src="contact.gif" alt="Contact" />
                <span>CONTACT</span>
              </div>
            </Link>
          </ul>
        </div>
      )}
    </>
  )
}

export default Navbar
