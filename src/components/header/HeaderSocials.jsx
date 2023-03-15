import React from 'react'
import {BsGithub, BsLinkedin, BsDiscord} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a href="https://www.github.com/Deas-Dose" target='_blank'><BsGithub /></a>
      <a href="https://www.linkedin.com/in/sohaib-farsi/" target='_blank'><BsLinkedin /></a>
      <a href="https://www.discordapp.com/users/and_rotate#8777" target='_blank'><BsDiscord /></a>
    </div>
  )
}

export default HeaderSocials