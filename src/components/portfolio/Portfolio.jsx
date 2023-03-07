import React from 'react'
import './portfolio.css'
import sneakPeak from '../../assets/sneak_peak.jpg'

const portfolios = [{
  id: 1,
  image: sneakPeak,
  title: 'Youtube Video Downloader API',
  github: 'https://github.com/Deas-Dose/youtube_downloader_api',
  demo_title: 'Live Demo Unavailable Yet',
  demo: '#'
},
{
  id: 'private',
  image: sneakPeak,
  title: 'Private Project (in developement)',
  github: 'https://github.com/Deas-Dose',
  demo_title: 'Live Demo Unavailable Yet',
  demo: '#'
}]

const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>

      <div className="container portfolio__container">
        {
          portfolios.map(({id, image, title, github, demo_title, demo}) => {
            return(
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-img">
                  <img src={image} alt={title} className={id}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>Github</a>
                  <a href={demo} className="btn btn-primary">{demo_title}</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio