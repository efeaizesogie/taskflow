import React from 'react'
import Logo from './logo'
import Button from './Button'

const Navbar = () => {
  return (
    <nav className="w-full flex justify-between items-center bg-dark-bg text-text-dark px-16 md:px-20 py-5">
      <div className='flex gap-12 items-center '>
        <Logo/>

        <div className="hidden md:flex font-inter text-lg gap-4">
            <a href="#features" className=" hover:text-primary transition duration-300">Features</a>
            <a href="#pricing" className=" hover:text-primary transition duration-300">Pricing</a>
            <a href="#reviews" className=" hover:text-primary transition duration-300">Reviews</a>
            <a href="#contact" className=" hover:text-primary transition duration-300">Contact</a>
        </div>
        </div>

        <div className="hidden md:flex ml-auto gap-4">
            <Button variant="secondary" ><a href="#log-in">Log in</a></Button>
            <Button variant="primary" ><a href="#sign-up">Sign up</a></Button>
        </div>

        <div>
        </div>
    </nav>
  )
}

export default Navbar