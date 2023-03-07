import React, {useEffect, useState} from 'react'
import './skills.css'
import {BsFillPatchCheckFill} from 'react-icons/bs'

const Skills = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(window.matchMedia('(min-width: 1024px)').matches);

  useEffect(() => {
    const elements = document.querySelectorAll('#hkr');

    const handleHover = (event) => {
      const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      let iter = 0;
      let interval = setInterval(() => {
        event.target.innerText = event.target.dataset.value
          .split('')
          .map((letter, index) => {
            if ((index < iter) || (event.target.dataset.value[index] === ' ')) {
              return event.target.dataset.value[index];
            }
            return letters[Math.floor(Math.random() * 26)];
          })
          .join(''); 
        if(iter >= event.target.dataset.value.length) {
          clearInterval(interval);
        }
        iter += 1 / 3;
      }, 20);
    };

    if (isLargeScreen) {
      elements.forEach(element => {
        element.addEventListener("mouseover", handleHover);
        return () => element.removeEventListener("mouseover", handleHover);
      });
    }

    const handleResize = () => {
      setIsLargeScreen(window.matchMedia('(min-width: 1024px)').matches);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      elements.forEach(element => {
        element.removeEventListener("mouseover", handleHover);
      });
      window.removeEventListener('resize', handleResize);
    };
  }, [isLargeScreen]);

  
  
  

  return (
    <section id="skills">
      <h5>What skills do I have?</h5>
      <h2>Experience</h2>

      <div className="container experience__container">


        <div className="experience__frontend">
          <h3>Frontend Developement</h3>

          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>CSS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>JS</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>


        <div className="experience__backend">
          <h3>Backend Developement</h3>

          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python Django</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Python Flask</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>PHP</h4>
                <small className='text-light'>Noob</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>MangoDB</h4>
                <small className='text-light'>Basic</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__cybsec">
          <h3 id='hkr' data-value='Penetration Testing'>Penetration Testing</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4 id='hkr' data-value='Websites'>Websites</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4 id='hkr' data-value='APIs'>APIs</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4 id='hkr' data-value='Android Apps'>Android Apps</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4 id='hkr' data-value='Active Directory Network'>Active Directory Network</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience__fde">
          <h3>Fluid Dynamics and Energy</h3>
          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Heat Transfer</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Thermodynamics</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Fluid Mechanics</h4>
                <small className='text-light'>Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className='experience__details-icon' />
              <div>
                <h4>Renewable Energy</h4>
                <small className='text-light'>Beginner</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills