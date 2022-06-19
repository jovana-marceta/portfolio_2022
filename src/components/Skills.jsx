import React from 'react'
import HTML from '../assets/html.png'
import CSS from '../assets/css.png'
import Sass from '../assets/sass.png'
import JavaScript from '../assets/javascript.png'
import ReactLogo from '../assets/react.png'
import Github from '../assets/github.png'
import Tailwind from '../assets/tailwind.png'

const Skills = () => {
  return (
    <div name='skills' className='bg-violet-600 text-white'>
        <div className='max-w-[1240px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-fuchsia-500'>Skills</p>
                <p className='py-4'>Below is a list of my skills. I am trying to stay up with the newest trends in the industry and to keep learning and becoming a better version of myself. When we improve our lives, we can improve others too. I am always willing to learn new things and cooperate with other enthusiastic individuals.</p>
            </div>

            <div className='w-full grid gried-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[bg-fuchsia-500] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon" />
                    <p className='my-4'>HTML</p>
                </div>
                <div className='shadow-md shadow-[bg-fuchsia-500] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="CSS icon" />
                    <p className='my-4'>CSS</p>
                </div>
                <div className='shadow-md shadow-[bg-fuchsia-500] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={JavaScript} alt="JS icon" />
                    <p className='my-4'>JavaScript</p>
                </div>
                <div className='shadow-md shadow-[bg-fuchsia-500] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={ReactLogo} alt="React icon" />
                    <p className='my-4'>React</p>
                </div>
                <div className='shadow-md shadow-[bg-fuchsia-500] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Github} alt="Github icon" />
                    <p className='my-4'>Github</p>
                </div>
                <div className='shadow-md shadow-[bg-fuchsia-500] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon" />
                    <p className='my-4'>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[bg-fuchsia-500] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Sass} alt="Sass icon" />
                    <p className='my-4'>Sass</p>
                </div>
            </div>
        </div>
    </div>

  )
}

export default Skills