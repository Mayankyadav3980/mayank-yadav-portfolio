import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { IoLogoTwitter } from 'react-icons/io' 

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Mayank Yadav</a>

      <ul className="permalinks">
        <li><a href="#">Home</a></li>
        <li><a href="#about"> About</a></li>
        <li><a href="#experience"> Experience</a></li>
        <li><a href="#portfolio"> Portfolio</a></li>
        <li><a href="#contact"> Contacts</a></li>
         </ul>

         <div className="footer__socials">
        <a href="https://www.linkedin.com/in/mayank-yadav-93661416b/" target='_blank'> <BsLinkedin/></a>
        <a href="https://github.com/Mayankyadav3980" target='_blank'><BsGithub/></a>
        <a href="https://twitter.com/MayankR94099717" target='_blank'><IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Mayank Yadav. All rights reserved</small>
      </div>

    </footer>
  )
}

export default Footer