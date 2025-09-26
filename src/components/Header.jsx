import React from 'react'
import Button from './Button'
import Navbar from './Navbar'

const Header = () => {
  return (
    <>
     <header className="w-full h-screen flex flex-col">
      <Navbar/>
      <div className='flex flex-col xl:flex-row justify-between items-center text-dark flex-1'>
      <div className='w-full xl:w-1/2 flex flex-col justify-center items-start text-left px-5 xl:px-20 py-16 xl:py-0 animate-[slideInLeft_1s_ease-out]'>
          <h1 className='text-4xl xl:text-6xl font-bold mb-6 font-poppins'>Organize your work. Simplify your life.</h1>
          <p className='text-base xl:text-lg mb-8 text-[#868686] w-full xl:w-[65%]'>TaskFlow helps teams and individuals manage tasks, track progress, and stay productive. We cut through the noise and help you focus on what matters.</p>
          <div className='flex gap-4'>
            <Button variant="primary"><a href="#sign-up">Get Started free</a></Button>
            <Button variant="ghost" ><a href="#features">Learn More</a></Button>
            </div>
        </div>

        <div className='w-full xl:w-1/2 h-64 xl:h-full bg-[url("/hero-img.png")] bg-cover bg-center bg-no-repeat grayscale sepia-[0.2] animate-[slideInRight_1s_ease-out]'>
        </div>
      </div>
        
    </header></>
   
  )
}

export default Header