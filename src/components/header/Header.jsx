import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './header.css';


const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h5> Hello I'm</h5>
            <h1>Mayank</h1>
            <h5>Fullstack Developer</h5>
            <CTA/>
            <HeaderSocials/>
            <a href="#contact" className="scroll__down"> Scroll Down</a>

        </div>
    </header>
  )
}

export default Header