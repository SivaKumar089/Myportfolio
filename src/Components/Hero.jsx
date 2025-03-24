import React from 'react'

export const Hero = () => {
    return (
        <>
            <div id='home' className='z-1 flex flex-col lg:flex-row md:flex-row   justify-around items-center'>
                <div className=" sm:w-full lg:w-200 sm:mt-10 lg:mt-0 pl-2">
                    <p className='text-2xl leading-10 '>Hello</p>
                    <h1 className='lg:text-7xl font-serif text-4xl w-100 inline lg:w-200'>I'm <span className='text-yellow-200'>Siva Kumar</span> </h1>
                    <p className='text-4xl lg:text-5xl mt-2'> Web Developer</p>
                    <p className="text-xl w-full md:w-150 lg:w-170  leading-relaxed mt-2">
                        I specialize in building responsive and user-friendly websites using
                        <span className="text-yellow-300 font-medium hover:text-blue-400  transition delay-150 duration-300 ease-in-out cursor-pointer"> React.js</span>,
                        <span className="text-yellow-300 font-medium hover:text-blue-400  transition delay-150 duration-300 ease-in-out cursor-pointer"> Tailwind CSS</span>,
                        and modern web technologies. I love crafting seamless digital experiences.
                    </p>
                </div>
                <div>
                    <img src="./siva.png" alt="siva" className=' w-70 md:w-80 lg:w-100 ' />
                </div>
            </div>
        </>
    )
}
