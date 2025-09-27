import React, { useState, useEffect } from 'react'
import Logo from './logo'
import Button from './Button'

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
  }

  const handleMenuClick = (href) => {
    closeMenu()
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'unset'
    }
    return () => {
      document.body.style.overflow = 'unset'
    }
  }, [isMenuOpen])

  return (
    <>
    <nav className="w-full flex justify-between items-center bg-dark-bg text-text-dark px-5 md:px-20 py-5 relative z-50  ">
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

        <button 
          onClick={toggleMenu}
          className="md:hidden w-8 h-8 flex items-center justify-center transition-transform duration-300 hover:scale-110"
        >
          <img 
            src={isMenuOpen ? "/close_md.svg" : "/menu_alt.svg"} 
            alt={isMenuOpen ? "Close menu" : "Open menu"}
            className="w-6 h-6 transition-opacity duration-300"
          />
        </button>
    </nav>

    {/* Mobile Menu Overlay */}
    <div className={`fixed inset-0 bg-dark-bg z-40 md:hidden transition-all duration-500 ease-in-out ${
      isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
    }`}>
      <div className={`flex flex-col items-center justify-center h-full space-y-8 transform transition-all duration-500 ease-in-out ${
        isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
      }`}>
        <a 
          href="#features" 
          onClick={() => handleMenuClick('#features')}
          className="text-text-dark text-2xl hover:text-primary transition-all duration-300 transform hover:scale-110"
        >
          Features
        </a>
        <a 
          href="#pricing" 
          onClick={() => handleMenuClick('#pricing')}
          className="text-text-dark text-2xl hover:text-primary transition-all duration-300 transform hover:scale-110"
        >
          Pricing
        </a>
        <a 
          href="#reviews" 
          onClick={() => handleMenuClick('#reviews')}
          className="text-text-dark text-2xl hover:text-primary transition-all duration-300 transform hover:scale-110"
        >
          Reviews
        </a>
        <a 
          href="#contact" 
          onClick={() => handleMenuClick('#contact')}
          className="text-text-dark text-2xl hover:text-primary transition-all duration-300 transform hover:scale-110"
        >
          Contact
        </a>
        
        <div className="flex flex-col gap-4 mt-8">
          <Button variant="secondary" onClick={closeMenu}>
            <a href="#log-in">Log in</a>
          </Button>
          <Button variant="primary" onClick={closeMenu}>
            <a href="#sign-up">Sign up</a>
          </Button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Navbar