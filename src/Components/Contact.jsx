import React from 'react'

export const Contact = () => {
    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "a881511b-0e5c-4f66-aa28-3f1f2302b9e9");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
           alert(res.message)
        }
      };
    
    return (
        <>
            <h1 className='text-4xl md:text-5xl lg:text-5xl text-center my-5'>Get in touch</h1>
            <div id='contact' className='container mx-auto flex flex-col sm:flex-col md:justify-between  md:flex-row lg:flex-row'>
                <div className=' ml-2 leading-10 sm:w-180 md:w-180'>
                    <h1 className='text-5xl'>Let's talk</h1>

                    <p>I specialize in front-end development with React.js and Tailwind CSS, aiming to build responsive and user-friendly websites. Let's collaborate on exciting projects!</p>

                    <div className='flex flex-col'>
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
                </div>



                <div className=' border-2 p-2 flex flex-col  md:flex-row lg:flex-row mt-7 p-5 leading-10 md:w-150'>
                    <form onSubmit={onSubmit}>
                        <label htmlFor="name" className='block hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:text-gray-400 text-2xl mb-3'>Your Name:</label>
                        <input type="text" placeholder='Enter your Name' name='name' className='w-full lg:w-130  outline-none border-1 rounded-md px-5 py-2 text-xl focus:border-blue-500 ' />
                        <label htmlFor="email" className='block hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:text-gray-400 text-2xl my-3'>Your Email:</label>
                        <input type="email" placeholder='Enter your Email' name='email ' className='w-full outline-none border-1 rounded-md px-5 py-2 text-xl focus:border-blue-500'/>
                        <label htmlFor="message" className='block hover:cursor-pointer transition delay-150 duration-300 ease-in-out hover:text-gray-400 text-2xl my-3'>Write your msg</label>

                        <textarea name="message" placeholder='Enter your message' rows={8} className=' h-50 w-full outline-none border-1 rounded-md px-5 py-2 text-xl focus:border-blue-500'></textarea>
                        <button  className='bg-blue-400 px-4 py-1 rounded-sm hover:bg-blue-400 hover:cursor-pointer hover:text-black transition delay-200 duration-300 ease-in-out' type='submit'>Submit now</button>
                    </form>

                </div>
            </div>
        </>
    )
}
