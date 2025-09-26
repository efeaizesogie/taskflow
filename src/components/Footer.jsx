import React  from 'react'
import Logo from './logo'
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const Footer = () => {
    const currentYear = new Date().getFullYear();
    const [footerRef, footerVisible] = useScrollAnimation();
  return (
    <section 
    ref={footerRef}
    className={`w-full flex flex-col justify-between items-center bg-dark-bg text-text-dark px-5 md:px-20 py-12 md:py-20 transition-all duration-700 ${
      footerVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
    }`}
    >
        <div className='w-full flex flex-col md:flex-row justify-center md:justify-between items-center gap-12 md:gap-0 '>
            <Logo/>
            <div className="flex md:flex-row flex-col font-inter text-lg gap-4 text-center">
                <a href="#features" className=" hover:text-primary transition duration-300">Features</a>
                <a href="#pricing" className=" hover:text-primary transition duration-300">Pricing</a>
                <a href="#reviews" className=" hover:text-primary transition duration-300">Reviews</a>
                <a href="#contact" className=" hover:text-primary transition duration-300">Contact</a>
            </div>
            <div className="flex  font-inter text-lg gap-4">
                <a href="#features" className=" text-text-dark transition duration-300" ><img src='/facebook.svg' alt='facebook' /></a>
                <a href="#pricing" className=" text-text-dark transition duration-300"><img src='/instagram.svg' alt='instagram' /></a>
                <a href="#reviews" className=" text-text-dark transition duration-300"><img src='/x.svg' alt='x' /></a>
                <a href="#contact" className=" text-text-dark transition duration-300"><img src='/linkedIn.svg' alt='linkedln' /></a>
                <a href="#contact" className=" text-text-dark transition duration-300"><img src='/youtube.svg' alt='youtube' /></a>
            </div>
        </div>

        <div className='w-full h-[1px] bg-text-dark mt-12 md:mt-40 mb-6 md:mb-8' />
        
        <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-4">
            <p className='text-sm'>&copy; {currentYear} TaskFlow. All rights reserved.</p>

            <a href="#privacy" className=" hover:text-primary transition duration-300 text-sm underline">Privacy policy</a>
            <a href="#terms" className=" hover:text-primary transition duration-300 text-sm underline">Terms of service</a>
            <a href="#cookies" className=" hover:text-primary transition duration-300 text-sm underline">Cookies settings</a>
        </div>
    </section>
  )
}

export default Footer