import React from 'react'
import "./Footer.css"
import {BsLinkedin} from "react-icons/bs"
import {IoLogoWhatsapp} from "react-icons/io"
import {MdEmail} from "react-icons/md"

const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Giux</a>

      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#portfolio">Portfolio</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://www.linkedin.com/in/giu-dev/" target="_blank"><BsLinkedin/></a>
        <a href={`https://api.whatsapp.com/send?phone=922276249`} target="_blank"><IoLogoWhatsapp/></a>
        <a href="mailto:albertogiusepp@gmail.com" target="_blank"><MdEmail/></a>
      </div>

      <div className="footer__copyright">
          <small>&copy; Giux, All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer