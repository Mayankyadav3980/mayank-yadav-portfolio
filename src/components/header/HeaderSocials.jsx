import React from 'react'
import { BsLinkedin } from 'react-icons/bs'
import { BsGithub } from 'react-icons/bs'
import { HiMail } from 'react-icons/hi'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
        <a href="https://www.linkedin.com/in/mayank-yadav-93661416b/" target='_blank'><BsLinkedin /></a>
        <a href="https://github.com/Mayankyadav3980" target='_blank'><BsGithub/></a>
        <a href="mailto:ymayank501@gmail.com" target='_blank'><HiMail/></a>
    </div>
  )
}

export default HeaderSocials