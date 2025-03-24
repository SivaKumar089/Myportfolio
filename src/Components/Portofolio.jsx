import React from 'react'
import { Navbar } from './Navbar'
import { Hero } from './Hero'
import { About } from './About'
import { Education } from './Education'
import { MyWorks } from './MyWorks'
import { Skills } from './Skills'
import { Contact } from './Contact'
import { Footer } from './Footer'

export const Portofolio = () => {
  return (
     <>
     <div className='sm:w-full md:w-full lg:w-full'>
       <Navbar />
       <Hero />
       <About />
       <Education />
       <Skills />
       <MyWorks />
       <Contact />
       <Footer />
     </div>
     </>
  )
}
