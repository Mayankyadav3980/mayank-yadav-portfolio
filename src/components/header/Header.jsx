import React from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './header.css';


const Header = () => {
  return (
    <header>
        <div className="container header__container">
            <h3> Hello I'm</h3>
            <h1>Mayank Yadav</h1>
            <h3>Fullstack Developer</h3>
            <CTA/>
            <HeaderSocials/>
            <a href="#contact" className="scroll__down"> Scroll Down</a>

        </div>
    </header>
  )
}

export default Header