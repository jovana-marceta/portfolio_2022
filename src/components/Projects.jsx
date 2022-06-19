import React from 'react'
import Project1 from '../assets/codetonix.png' 
import Project2 from '../assets/bern.png' 
import Project3 from '../assets/lingua.png' 
import Project4 from '../assets/minisoft.png' 
import Project5 from '../assets/perfect.png' 
import Project6 from '../assets/mona.png' 

const Projects = () => {
  return (
    <div name='skills' className='w-full h-full bg-violet-600 text-white'>
    <div className='max-w-[1240px] mx-auto p-4 flex flex-col justify-center w-full'>
        <div>
            <p className='text-4xl font-bold inline border-b-4 border-fuchsia-500'>Projects</p>
            <p className='py-4'>Check out some of my personal projects.</p>
        </div>

        {/* Container */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
            {/* Item */}
            <div style={{backgroundImage: `url(${Project1})`}}
            className='shadow-lg shadow-[bg-fuchsia-500] group container flex justify-center items-center mx-auto content-div'>
                {/* hover */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        CodeTonix
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Project2})`}}
            className='shadow-lg shadow-[bg-fuchsia-500] group container flex justify-center items-center mx-auto content-div'>
                {/* hover */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                       Bernhardt
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Project3})`}}
            className='shadow-lg shadow-[bg-fuchsia-500] group container flex justify-center items-center mx-auto content-div'>
                {/* hover */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Lingua Language School
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Project4})`}}
            className='shadow-lg shadow-[bg-fuchsia-500] group container flex justify-center items-center mx-auto content-div'>
                {/* hover */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Minisoft
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Project5})`}}
            className='shadow-lg shadow-[bg-fuchsia-500] group container flex justify-center items-center mx-auto content-div'>
                {/* hover */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Perfect Match
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
            <div style={{backgroundImage: `url(${Project6})`}}
            className='shadow-lg shadow-[bg-fuchsia-500] group container flex justify-center items-center mx-auto content-div'>
                {/* hover */}
                <div className='opacity-0 group-hover:opacity-100'>
                    <span className='text-2xl font-bold text-white tracking-wider'>
                        Mona
                    </span>
                    <div className='pt-8 text-center'>
                        <a href="/">
                            <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Demo</button>
                        </a>
                        <a href="/">
                            <button className='text-center px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Code</button>
                        </a>
                    </div>
                </div>
            </div>
        </div>

    </div>
</div>
  )
}


export default Projects


