import React from 'react'
import './about.css'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'
import me from '../../assets/me1.jpg'

const About = () => {
  return (
    <section id="about">
      <h5>Get To know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={me} alt="Me Placeholder" />
          </div>
        </div>


        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ years idle experience</small>
            </article>
            <article className="about__card">
              <FiUsers className='about__icon' />
              <h5>Clients</h5>
              <small>Only my own projects </small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>+3 projects and more on the way</small>
            </article>
          </div>

          
          <p>
            I'm Soheyb FARSI, a student majoring in Fluid Dynamics and Energy Transfer, currently taking my Master's degree after getting my Bachelor's degree in July 2022 majoring in Energy Transfer and basic Fluid Mechanics. I'm so interested in programming, and more specificaly web developement with Python and JavaScript, I'm also very interested in cyber security, I like to solve HackTheBox machines, and I'm a member in MicroClub which is the first IT club in Algeria, the club is located at University of Science and Technology Houari Boumedian, which is where i study.
          </p>
          
          <a href="#contact" className='btn btn-primary'>Let's talk</a>
          
        </div>
      </div>
    </section>
  )
}

export default About