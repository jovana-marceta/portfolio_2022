import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi';

const Hero = () => {
  return (
    <div name='home' className='w-full h-screen text-white bg-hero-cover bg-cover bg-no-repeat bg-center'>
        <div className='max-w-[1240px] mx-auto px-4 flex flex-col justify-center h-full'>
        <p>Hello world, I am</p>
        <h1 className='text-4xl sm:text-7xl font-bold'>
            Jovana Marceta
        </h1>
        <h2 className='text-4xl sm:text-7xl font-bold'>
            <span className='text-fuchsia-500'>Passionate</span> Web Developer
        </h2>
        <p className='text-white py-4 max-w-[900px]'> Developer
        I am a passionate Web Developer💻, with focus on building unique, modern, maintainable and responsive websites for all of Your needs. My goals are to make an impact on the world and create a unique visual experience and help Your business to grow 🚀. I am a dedicated, positive, and hardworking individual, who always strives to achieve the highest standard possible, at any given task.
        </p>
        <div>
            <button className='bg-fuchsia-500 border-fuchsia-500 text-white group border-2 px-6 py-3 my-2 flex items-center hover:bg-white hover:text-black hover:border-white'>
            Hire me
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