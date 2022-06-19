import React from 'react'
import {MdBusinessCenter} from 'react-icons/md'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-violet-600 text-white'>
       <div className='flex flex-col justify-center items-center w-full h-full'>
            <div className='max-w-[1240px] w-full px-4 grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                    <p className='text-4xl font-bold inline border-b-4 border-fuchsia-500'>Experience</p>
                </div>
                <div>
                </div>
            </div>
            <div className='max-w-[1240px] w-full px-4 grid sm:grid-cols-2 gap-8 px-4 mb-10'>
                <div className='sm:text-right text-4xl font-bold'>
                    <p>Hi, I'm Joavna, nice to meet you, please take a look around</p>
                </div>
                <div>
                    <p>I wrote my first HTML and CSS piece of code during high school. I will never forget that fantastic feeling after building a simple page (and yeah, I too had felt like I hack NASA lmao 😄). The same year, I watched Mr. Robot and Silicon Valley that gave me a huge programming boost. I started learning and exploring the world of UI design and front-end development. I continue my journey at Higher Education Technical School of Professional Studies. The rest is history.</p>
                </div>
            </div>
           
            <div className='max-w-[1240px] w-full px-4 grid sm:grid-cols-2 gap-8 px-4 mb-10'>
                <div>
                    <div className='border-b-4 border-fuchsia-500 mb-4'>
                        <h3 className='text-2xl font-bold '> <MdBusinessCenter className='inline'/> UX/UI Web Designer &#38; Frontend Developer</h3>
                        <h4 className='text-2xl text-fuchsia-500 font-bold mb-[10px]'>Adacta: dec 2021 - present</h4>
                    </div>
                    <ul>
                        <li className='px-0'>
                        • Apply design thinking, design methods, tools and processes to generate new ideas and concepts
                        </li>
                        <li className='px-0'>
                        • Communicate the user experience at various stages of the design process with wireframes, flow diagrams, mock-ups, and prototypes
                        </li>
                        <li className='px-0'>
                        • Iterate, prototype, and arrive at comprehensive but simple solutions
                        </li>
                        <li className='px-0'>
                        • Develop, test, maintain and improve the software. Finding issues and fixing them with clean and meticulous code
                        </li>
                        <li className='px-0'>
                        • Manage individual project priorities, deadlines, and deliverables
                        </li>
                    </ul>
                </div>
                <div>
                    <div className='border-b-4 border-fuchsia-500 mb-4'>
                            <h3 className='text-2xl font-bold '> <MdBusinessCenter className='inline'/> Frontend Developer</h3>
                            <h4 className='text-2xl text-fuchsia-500 font-bold mb-[10px]'>Vega IT: jan 2020 - july 2020</h4>
                        </div>
                        <ul>
                            <li className='px-0'>
                            • Creating pixel-perfect front-end pages and components for various web platforms
                            </li>
                            <li className='px-0'>
                            • Optimizing pages for various devices and browsers
                            </li>
                            <li className='px-0'>
                            • Writing clean, consistent, and well-maintainable front-end code
                            </li>
                            <li className='px-0'>
                            • Maintaining a high level of quality and attention to detail regarding the front-end code and website usability
                            </li>
                        </ul>
                    </div>
             </div>
            <div className='max-w-[1240px] w-full px-4 grid sm:grid-cols-2 gap-8 px-4'>
            <div>
                    <div className='border-b-4 border-fuchsia-500 mb-4'>
                        <h3 className='text-2xl font-bold '> <MdBusinessCenter className='inline'/>Frontend Developer - Internship</h3>
                        <h4 className='text-2xl text-fuchsia-500 font-bold mb-[10px]'>LibraFire: dec 2020 - jan 2021</h4>
                    </div>
                    <ul>
                        <li className='px-0'>
                        • Creating pixel-perfect front-end pages and components for various web platforms
                        </li>
                        <li className='px-0'>
                        • Optimizing pages for various devices and browsers
                        </li>
                    </ul>
                </div>
                <div>
                    <div className='border-b-4 border-fuchsia-500 mb-4'>
                            <h3 className='text-2xl font-bold '> <MdBusinessCenter className='inline'/> Frontend Developer - Internship</h3>
                            <h4 className='text-2xl text-fuchsia-500 font-bold mb-[10px]'>PopArt Studio: sep 2021 - oct 2021</h4>
                        </div>
                        <ul>
                            <li className='px-0'>
                            • Creating custom WordPress themes
                            </li>
                            <li className='px-0'>
                            • Custom Fields plugin
                            </li>
                            <li className='px-0'>
                            • Custom WP queries, post types, and taxonomies
                            </li>
                        </ul>
                </div>
            </div>
       </div>
    </div>
  )
}

export default About

// bg-gradient-to-b from-violet-600 to-fuchsia-600