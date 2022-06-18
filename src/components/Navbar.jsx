import React from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-8 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="Logo" style={{width: '65px'}} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>Home</li>
        <li>About</li>
        <li>Experience</li>
        <li>Skills</li>
        <li>Projects</li>
        <li>Contacts</li>
      </ul>
     
      {/* hamburger */}
      <div className='md:hidden z-10'>
        <FaBars />
      </div>

      {/* mobile menu */}
      <ul className='hidden absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'>
        <li className='py-6 text-4xl'>Home</li>
        <li className='py-6 text-4xl'>About</li>
        <li className='py-6 text-4xl'>Experience</li>
        <li className='py-6 text-4xl'>Skills</li>
        <li className='py-6 text-4xl'>Projects</li>
        <li className='py-6 text-4xl'>Contacts</li>
      </ul>

      {/* social icons */}
      <div className='hidden'></div>


    </div>
  )
}

export default Navbar