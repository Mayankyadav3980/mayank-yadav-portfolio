import React, { useEffect, useRef } from 'react'
import CTA from './CTA'
import HeaderSocials from './HeaderSocials'
import './header.css';
import { init }  from 'ityped';
import AOS from 'aos';
import 'aos/dist/aos.css';


const Header = () => {
  const textRef = useRef();
  AOS.init();
  useEffect(() =>{
  
      init(textRef.current, 
        { showCursor: false, 
          backSpeed:70, 
          backDelay:1200,
          strings: ['Fullstack Developer' ] })
  },[])
  return (
    <header data-aos="fade-in">
        <div className="container header__container">
            <h3> Hello I'm</h3>
            <h1>Mayank Yadav</h1>
            <h3 ><span id='itype' ref={textRef}> </span></h3>
            <CTA/>
            <HeaderSocials/>
            <a href="#contact" className="scroll__down"> Scroll Down</a>

        </div>
    </header>
  )
}

export default Header