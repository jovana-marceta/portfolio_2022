import React, {useState} from 'react'
import { FaBars, FaTimes, FaGithub, FaLinkedin, FaAffiliatetheme, FaFacebook } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo.png'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [nav, setNav] = useState(false)
  const handleClick = () => setNav(!nav)

  return (
    <div className='fixed w-full h-[80px] flex justify-between items-center px-8 lg:px-20 bg-purple-600 bg-opacity-50'>
      <div>
        <img src={Logo} alt="Logo" style={{width: '70px'}} />
      </div>

      {/* menu */}
      <ul className='hidden md:flex'>
        <li>
          <Link to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li>
          <Link to="experience" smooth={true} duration={500}>
          Experience
          </Link>
        </li>
        <li>
          <Link to="skills" smooth={true} duration={500}>
          Skills
          </Link>
        </li>
        <li>
          <Link to="projects" smooth={true} duration={500}>
          Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} duration={500}>
          Contact
          </Link>
        </li>
      
      </ul>
     
      {/* hamburger */}
      <div onClick={handleClick} className='md:hidden z-10'>
        {!nav ?  <FaBars className='text-white'/> : <FaTimes className='text-white'/>}
      </div>

      {/* mobile menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-violet-600 flex flex-col justify-center items-center' }>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl'>
         <Link onClick={handleClick} to="experience" smooth={true} duration={500}>
          Experience
          </Link>
        </li>
        <li className='py-6 text-4xl'>
          <Link onClick={handleClick} to="skills" smooth={true} duration={500}>
          Skills
          </Link>
        </li>
        <li className='py-6 text-4xl'>
        <Link onClick={handleClick} to="projects" smooth={true} duration={500}>
          Projects
          </Link>
        </li>
        <li onClick={handleClick} className='py-6 text-4xl'>
        <Link to="contact" smooth={true} duration={500}>
          Contact
          </Link>
        </li>
      </ul>

      {/* social icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-blue-600'>
            <a className='flex justify-between items-center w-full text-gray-300'
               href="https://www.linkedin.com/in/jovanamarceta/</li>" target='_blank'>
              Linkedin <FaLinkedin size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
            <a className='flex justify-between items-center w-full text-gray-300'
               href="https://github.com/jovana-marceta" target='_blank'>
              Github <FaGithub size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-red-600'>
            <a className='flex justify-between items-center w-full text-gray-300'
               href="/">
              Email <HiOutlineMail size={30} />
            </a>
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-300 bg-green-600'>
            <a className='flex justify-between items-center w-full text-gray-300'
               href="https://github.com/jovana-marceta/resume/blob/master/Jovana%20Marčeta%20CV.pdf" target="_blank">
              Resume <BsFillPersonLinesFill size={30} />
            </a>
          </li>
        </ul>
      </div>
    </div>
  )
}

export default Navbar