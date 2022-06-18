import React from 'react'
import HeroImage from '../assets/heroImg.png'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen bg-gradient-to-b from-violet-600 to-fuchsia-600 text-white'>
    <div className='max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full'>
      <p>Hello world, I am</p>
      <h1 className='text-4xl sm:text-7xl font-bold'>
        Jovana Marceta
      </h1>
      <h2 className='text-4xl sm:text-7xl font-bold'>
        Passionate Web Developer
      </h2>
      <p className='text-white py-4 max-w-[900px]'>
      I am a passionate Web Developer💻, with focus on building unique, modern, maintainable and responsive websites for all of Your needs. My goals are to make an impact on the world and create a unique visual experience and help Your business to grow 🚀. I am a dedicated, positive, and hardworking individual, who always strives to achieve the highest standard possible, at any given task.
      </p>
      <div>
        <button className='text-black group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:border-bg-white'>
          View Work
          <span className='group-hover:rotate-90 duration-300'>
            <HiArrowNarrowRight className='ml-3 ' />
          </span>
        </button>
      </div>
    </div>
  </div>
  )
}

export default Hero