import React from 'react'

export const Footer = () => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      };
    return (
        <>
            <div className='flex flex-col  sm:flex-row justify-around mt-5  leading-10 mx-auto bg-gray-600 p-4  mx-2'>
                <div className=''>
                    <h1 className='text-4xl hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:text-gray-400'>Siva Kumar</h1>
                    <div>
                        <span className='hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:text-gray-400'><i class="fa-solid fa-envelope"></i></span>
                        <span className='ml-3 hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:text-gray-400'>kumarsiva200426@gmail.com</span>
                    </div>
                    <div>
                        <span className='hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:text-gray-400'><i class="fa-solid fa-phone"></i></span>
                        <span className='ml-3 hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:text-gray-400'>+91 9342474302</span>
                    </div>
                    <div>
                        <span className='hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:text-gray-400'><i class="fa-solid fa-location-dot"></i></span>
                        <span className='ml-3 hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:text-gray-400'>Tamil Nadu,India</span>
                    </div>

                </div>

                <div>
                    <ul className='flex gap-50 sm:gap-10 '>
                        <div className='float-start'>

                        <li onClick={() => scrollToSection('home')} className=' mt-2 text-md hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:text-gray-400'>home</li>
                        <li onClick={() => scrollToSection('about')} className=' mt-2 text-md hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:text-gray-400'>About Me</li>
                        <li onClick={() => scrollToSection('education')} className='mt-2 text-md hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:text-gray-400'>Education</li>
                        </div>
                        <div className='float-right'>

                        <li onClick={() => scrollToSection('skills')} className='mt-2 text-md hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:text-gray-400'>Skills</li>
                        <li onClick={() => scrollToSection('myworks')} className='mt-2 text-md hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:text-gray-400'>My Works</li>
                        <li onClick={() => scrollToSection('contact')} className=' mt-2 text-md hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:text-gray-400'>Contact</li>
                        </div>
                    </ul>
                </div>
                <div className='flex flex-row justify-center sm:flex-col'>
                    <div className='flex'>

                    <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                        <path fill="#E65100" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#FF6D00" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M24,25v-4h8.6l-0.7,11.5L24,35.1v-4.2l4.1-1.4l0.3-4.5H24z M32.9,17l0.3-4H24v4H32.9z"></path><path fill="#EEE" d="M24,30.9v4.2l-7.9-2.6L15.7,27h4l0.2,2.5L24,30.9z M19.1,17H24v-4h-9.1l0.7,12H24v-4h-4.6L19.1,17z"></path>
                    </svg>

                    <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                        <path fill="#0277BD" d="M41,5H7l3,34l14,4l14-4L41,5L41,5z"></path><path fill="#039BE5" d="M24 8L24 39.9 35.2 36.7 37.7 8z"></path><path fill="#FFF" d="M33.1 13L24 13 24 17 28.9 17 28.6 21 24 21 24 25 28.4 25 28.1 29.5 24 30.9 24 35.1 31.9 32.5 32.6 21 32.6 21z"></path><path fill="#EEE" d="M24,13v4h-8.9l-0.3-4H24z M19.4,21l0.2,4H24v-4H19.4z M19.8,27h-4l0.3,5.5l7.9,2.6v-4.2l-4.1-1.4L19.8,27z"></path>
                    </svg>
                    <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="48" height="48" viewBox="0 0 48 48">
                        <path fill="#ffd600" d="M6,42V6h36v36H6z"></path><path fill="#000001" d="M29.538 32.947c.692 1.124 1.444 2.201 3.037 2.201 1.338 0 2.04-.665 2.04-1.585 0-1.101-.726-1.492-2.198-2.133l-.807-.344c-2.329-.988-3.878-2.226-3.878-4.841 0-2.41 1.845-4.244 4.728-4.244 2.053 0 3.528.711 4.592 2.573l-2.514 1.607c-.553-.988-1.151-1.377-2.078-1.377-.946 0-1.545.597-1.545 1.377 0 .964.6 1.354 1.985 1.951l.807.344C36.452 29.645 38 30.839 38 33.523 38 36.415 35.716 38 32.65 38c-2.999 0-4.702-1.505-5.65-3.368L29.538 32.947zM17.952 33.029c.506.906 1.275 1.603 2.381 1.603 1.058 0 1.667-.418 1.667-2.043V22h3.333v11.101c0 3.367-1.953 4.899-4.805 4.899-2.577 0-4.437-1.746-5.195-3.368L17.952 33.029z"></path>
                    </svg>
                    </div>
                    <div className='flex'>

                    <svg className='ml-2' xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="50" height="50" viewBox="0 0 48 48">
                        <linearGradient id="iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1" x1="21.861" x2="25.703" y1="8.237" y2="36.552" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#00c1e0"></stop><stop offset="1" stop-color="#009bb8"></stop></linearGradient><path fill="url(#iOmQfjoCC4Hw6zVwRjSDha_x7XMNGh2vdqA_gr1)" d="M24,9.604c-5.589,0-9.347,2.439-11.276,7.318c-0.2,0.505,0.417,0.92,0.816,0.551 c2.035-1.882,4.322-2.505,6.86-1.871c1.826,0.456,3.131,1.781,4.576,3.247C27.328,21.236,30.051,24,36,24 c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551c-2.035,1.882-4.322,2.506-6.86,1.872 c-1.825-0.456-3.13-1.781-4.575-3.247C32.672,12.367,29.948,9.604,24,9.604L24,9.604z M12,24c-5.589,0-9.348,2.44-11.276,7.319 c-0.2,0.505,0.417,0.92,0.816,0.551c2.035-1.882,4.322-2.506,6.86-1.871c1.825,0.457,3.13,1.781,4.575,3.246 c2.353,2.388,5.077,5.152,11.025,5.152c5.589,0,9.348-2.44,11.276-7.319c0.2-0.505-0.417-0.92-0.816-0.551 c-2.035,1.882-4.322,2.506-6.86,1.871c-1.826-0.456-3.131-1.781-4.576-3.246C20.672,26.764,17.949,24,12,24L12,24z"></path>
                    </svg>
                    <img className='ml-2' src="src/assets/react.svg" alt="" />
                   
                    </div>
                </div>
            </div>
                <p className='m-0 text-center text-sm mb-10'>Disign By <span className='twxt-sm text-yellow-300 hover:cursor-pointer hover:text-white transition delay-150 duration-300 ease-in-out'>Siva kumar.k</span></p>
        </>
    )
}
