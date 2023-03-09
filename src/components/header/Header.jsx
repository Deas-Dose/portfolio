import React from 'react'
import './header.css'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import logo from '../../assets/logo.jpg'

const Header = () => {
  return (
    <header id='header'>
      <div className="container header__container">
        {/* Intro to me */}
        <h5>Hello, I'm </h5>
        <h1>Soheyb FARSI</h1>
        <h5 className="text-light">Fullstack Developer + Fluids and Energy Engineer</h5>

        {/* Buttons */}
        <CTA />
        
        {/* Socials */}
        <HeaderSocials />
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>

        {/* Contact me section _ jump to */}
        <a href="#contact" className="scroll__down">Scroll Down</a>

      </div>
    </header>
  )
}

export default Header