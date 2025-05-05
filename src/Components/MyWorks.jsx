import React from 'react'

export const MyWorks = () => {
    return (
        <>
            <div id='myworks' className='mt-10 '>
                <h1 className='text-center text-4xl '>MyWorks</h1>

                <div className='container mx-auto flex flex-col md:flex-row lg:flex-row justify-between items-center gap-5'>

                    <div className='mt-5  border-2 border-blue-500 p-5 rounded'>
                        <img src="/SubMenu.jpeg" alt="SubMenu" className='w-150 h-70  md:w-200 lg:w-200 '/>
                    </div>
                    <div>
                        <h1 className='text-4xl text-center'>SubMenu</h1>
                        <p className='text-2xl text-gray-400 '>Project Description:</p>
                        <p className='pl-5 leading-8 text-xl'>Designed and implemented a responsive submenu using TailWind. Ensured smooth navigation and seamless user experience</p>
                        <h3 className='text-gray-400 mt-2 underline'>Technology Used:</h3>
                        <ul className='pl-5  text-xl'>
                            <li className='m-2 hover:cursor-pointer hover:text-gray-500 inline' >HTML<img src="/html.png" alt="html" className='inline w-7 h-6 ml-2 rounded-full' /></li>
                            <li className='m-2 hover:cursor-pointer hover:text-gray-500'>Tailwind CSS<img src="/tailwind.png" alt="tailwind" className='inline w-7 h-6 ml-2 rounded-full' /></li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center gap-5 mt-5'>

                    <a href="https://github.com/SivaKumar089/SubMenu.git" target="_blank" rel="noopener noreferrer" className='bg-gray-500 px-3 py-2 text-xl rounded-xl hover:cursor-pointer hover:text-black hover:bg-gray-200 transition delay-100 duration-300 ease-in-out  '>Get Code<img src="/git.jpg" alt="git" className='inline w-7 h-7 ml-2 rounded-full' /></a>
                    <a href="https://www.linkedin.com/posts/sivakumar-k-208208288_tailwindcss-frontenddevelopment-webdevelopment-activity-7305075736061644800-cNc2?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEXMTygBRWy-I8Ex-ob68uPpxT_0EL-9rck&utm_campaign=copy_link" target="_blank" rel="noopener noreferrer" className='bg-blue-500 px-3 py-2 text-xl rounded-xl hover:cursor-pointer hover:text-black hover:bg-blue-400 transition delay-100 duration-300 ease-in-out'>View Post<img src="Linkedin.png" alt="Linkedin" className='inline w-7 h-7 ml-2 rounded-full' /></a>
                </div>
            </div>


            <div className='mt-10 '>
               

                <div className='container mx-auto flex flex-col md:flex-row lg:flex-row justify-between items-center gap-5'>

                    <div className='mt-5  border-2 border-blue-500 p-5 rounded mx-2'>
                        <img src="/QuizApp.jpeg" alt="Quiz App" className=' w-150 h-70 md:w-200 lg:w-200' />
                    </div>
                    <div>
                        <h1 className='text-4xl text-center'>Quiz APP</h1>
                        <p className='text-2xl text-gray-400 '>Project Description:</p>
                        <p className='pl-5 leading-8 text-xl'>Designed and implemented a responsive submenu using TailWind. Ensured smooth navigation and seamless user experience</p>
                        <h3 className='text-gray-400 mt-2 underline'>Technology Used:</h3>
                        <ul className='pl-5  text-xl'>
                            <li className='m-2 hover:cursor-pointer hover:text-gray-500 inline' >React<img src="/react.png" alt="html" className='inline w-7 h-6 ml-2 rounded-full' /></li>
                            <li className='m-2 hover:cursor-pointer hover:text-gray-500'>Tailwind CSS<img src="/tailwind.png" alt="tailwind" className='inline w-7 h-6 ml-2 rounded-full' /></li>
                        </ul>
                    </div>
                </div>
                <div className='flex justify-center gap-5 mt-5'>

                    <a href="https://github.com/SivaKumar089/QuizApp.git" target="_blank" rel="noopener noreferrer" className='bg-gray-500 px-3 py-2 text-xl rounded-xl hover:cursor-pointer hover:text-black hover:bg-gray-200 transition delay-100 duration-300 ease-in-out  '>Get Code<img src="/git.jpg" alt="git" className='inline w-7 h-7 ml-2 rounded-full' /></a>
                    <a href="https://www.linkedin.com/posts/sivakumar-k-208208288_react-tailwindcss-axios-activity-7302381279193284611-tD3b?utm_source=social_share_send&utm_medium=android_app&rcm=ACoAAEXMTygBRWy-I8Ex-ob68uPpxT_0EL-9rck&utm_campaign=copy_link" target="_blank" rel="noopener noreferrer" className='bg-blue-500 px-3 py-2 text-xl rounded-xl hover:cursor-pointer hover:text-black hover:bg-blue-400 transition delay-100 duration-300 ease-in-out'>View Post<img src="/Linkedin.png" alt="Linkedin" className='inline w-7 h-7 ml-2 rounded-full' /></a>
                </div>
            </div>

        </>
    )
};
