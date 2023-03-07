import React from 'react'
import './nav.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBook, BiMessageSquareDetail} from 'react-icons/bi'
import {BsClipboardCheck} from 'react-icons/bs'
import { useState } from 'react'

const Nav = () => {
  const [activeNav, setActive] = useState('#');



  return (
    <nav>
      <a href="#header" onClick={() => setActive('#')} className={activeNav === '#' ? 'active' : ''}><AiOutlineHome /></a>
      <a href="#about" onClick={() => setActive('#about')} className={activeNav === '#about' ? 'active' : ''}><AiOutlineUser /></a>
      <a href="#skills" onClick={() => setActive('#skills')} className={activeNav === '#skills' ? 'active' : ''}><BiBook /></a>
      <a href="#portfolio" onClick={() => setActive('#portfolio')} className={activeNav === '#portfolio' ? 'active' : ''}><BsClipboardCheck /></a>
      <a href="#contact" onClick={() => setActive('#contact')} className={activeNav === '#contact' ? 'active' : ''}><BiMessageSquareDetail /></a>
    </nav>
  )
}

export default Nav