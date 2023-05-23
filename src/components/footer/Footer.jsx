import React from 'react'
import './footer.css'
import {BsGithub, BsLinkedin, BsDiscord} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Soheyb FARSI</a>

      <ul className="permalinks">
        <li><a href="#header"> Home </a></li>
        <li><a href="#about"> About </a></li>
        <li><a href="#skills"> Skills </a></li>
        <li><a href="#portfolio"> Portfolio </a></li>
        <li><a href="#contact"> Contact </a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.github.com/Deas-Dose" target='_blank'><BsGithub/> </a>
        <a href="https://www.linkedin.com/in/sohaib-farsi/" target='_blank'><BsLinkedin/> </a>
        <a href="https://www.discordapp.com/users/and_rotate#0001" target='_blank'><BsDiscord/> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Soheyb FARSI, All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer