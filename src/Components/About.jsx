import React from 'react'

export const About = () => {
  return (
      <>
       <div id='about' className='mt-15 container mx-auto  transition-all duration-700 ease-in-out'>
          <div className='text-center flex flex-col items-center'>
             <h1 className='text-4xl'>What I do</h1>
             <p className='text-gray-400   hover:cursor-pointer hover:text-white transition delay-100 duration-150 ease-in-out mt-3 border-2 mx-2 lg:w-200 px-4 py-2 rounded'>i am a skilled and passionate web designer with experiences in creating visually appealing and user -friendly websites. i have  string understading of design and a keep eye for details. i am praficient in HTML,CSS,Javascript,React Js, and Tailwind CSS as well as working an website developer</p>
          </div>

          <div className='mt-10 cursor-pointer'>
            <div className='flex justify-between items-center border-2 px-5 py-2 mx-2 border-gray-500 rounded gap-5'> 
                <img src="/UI.jpg" alt="Ui"  className='w-40 h-25'/>
                <div>
                    <h1 className='lg:text-3xl'>UI/UX design </h1>
                    <p className='sm:text-sm lg:text-xl'>UI design focuses on creating visually appealing and user-friendly interfaces for digital products, ensuring seamless interaction between users and the application </p>
                </div>
            </div>
            <div className='flex justify-between items-center border-2 px-5 py-2 mx-2 border-gray-500 rounded gap-5 mt-5'> 
                <img src="/web.jpg" alt="" className='w-40 h-25' />
                <div>
                    <h1 className='lg:text-3xl'>Website design </h1>
                    <p className='sm:text-sm lg:text-xl'>Website design is the process of planning, creating, and styling a website’s layout, colors, fonts, and interactive elements to ensure both aesthetics and functionality. </p>
                </div>
            </div>
          </div>
       </div>
      </>
  )
}
