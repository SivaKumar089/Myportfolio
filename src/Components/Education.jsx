import React from 'react'

export const Education = () => {
    return (
        <>
            <h1 id='education' className='text-center text-5xl mt-10  bg-gradient-to-r from-blue-200 via-red-400 to-pink-600 bg-clip-text text-transparent'>My Education</h1>
            <div className=' mt-10 container mx-auto flex flex-col md:flex-row lg:flex-row justify-between items-center gap-5 '>
                <div>
                    <div className='mt-5 border-2 p-5 rounded'>
                        <p>2019</p>
                        <h1 className='text-blue-400 '>S.S.L.C</h1>
                        <p>S.S.H.N Hr Sec School,Muhavor</p>
                        <p className='text-gray-400'>Completed my S.S.L.C Course From State Board <span className='text-blue-500 hover:cursor-pointer hover:text-white transition delay-200 duration-350 ease-in-out'>with 73%</span></p>
                    </div>
                </div>

                <div>

                    <div className='mt-5 border-2 p-5 rounded '>

                        <p>2021</p>
                        <h1 className='text-blue-400'>S.S.L.C</h1>
                        <p>S.S.H.N Hr Sec School,Muhavor</p>
                        <p className='text-gray-400'>Completed my H.S.C Course From State Board <span className='text-blue-500 hover:cursor-pointer hover:text-white transition delay-200 duration-350 ease-in-out'>with 85%</span></p>
                    </div>
                </div>


                <div>
                    <div className='mt-5 border-2 p-5 rounded '>
                        <p>2021-2025</p>
                        <h1 className='text-blue-400'>B.E</h1>
                        <p>P.S.R Engineering College, Sivakasi</p>
                        <p className='text-gray-400'>Completed my B.E Degree From Anna Unversity <span className='text-blue-500 hover:cursor-pointer hover:text-white transition delay-200 duration-350 ease-in-out'>with 71%</span></p>
                    </div>
                </div>
            </div>




        </>

    )
}
