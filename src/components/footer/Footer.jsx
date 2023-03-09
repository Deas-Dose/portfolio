import React from 'react'
import './footer.css'
import {BsGithub, BsLinkedin, BsDiscord} from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">Soheyb FARSI</a>

      <ul className="permalinks">
        <li><a href="#header"> Home </a></li>
        <li><a href="#About"> About </a></li>
        <li><a href="#Skills"> Skills </a></li>
        <li><a href="#Portfolio"> Portfolio </a></li>
        <li><a href="#Contact"> Contact </a></li>
      </ul>

      <div className="footer__socials">
        <a href="https://www.github.com/Deas-Dose" target='_blank'><BsGithub/> </a>
        <a href="https://www.linkedin.com/" target='_blank'><BsLinkedin/> </a>
        <a href="https://www.discordapp.com/users/soh__\Fa#8777" target='_blank'><BsDiscord/> </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Soheyb FARSI, All Rights Reserved</small>
      </div>
    </footer>
  )
}

export default Footer