import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full py-[100px] bg-violet-600 text-white flex justify-center items-center p-4'>
        <form method='POST' action="https://getform.io/f/08a09067-7232-46e7-80f7-db555529adab" className='flex flex-col max-w-[700px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-fuchsia-500'>Contact</p>
                <p className='text-white py-4'>Feel free to message me or email me at: jmarcetafedev@gmail.com</p>
            </div>
            <input className='outline-0 bg-[#ccd6f6] p-2' type="text" placeholder='Enter your name' name='name' />
            <input className='outline-0 my-4 p-2 bg-[#ccd6f6]' type="email" placeholder='Enter your email' name='email' />
            <textarea className='outline-0 bg-[#ccd6f6] p-2' name="message" rows="10" placeholder='Message'></textarea>
            <button className='pt-2 bg-fuchsia-500 border-fuchsia-500 text-white border-2 px-6 py-3 my-2  hover:bg-white hover:text-black hover:border-white'>
                Let's colaborate
            </button>
        </form>
    </div>
  )
}

export default Contact