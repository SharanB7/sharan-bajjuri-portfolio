import React from 'react'
import './portfolio.css'
import multicloud from '../../assets/portfolio/multi-cloud.jpg'
import appearanceTransfer from '../../assets/portfolio/appearance-transfer.jpg'
import facerecognition from '../../assets/portfolio/face-recognition.png'
import credit from '../../assets/portfolio/credit.png'
import pacman from '../../assets/portfolio/pacman.png'
import axisketcher from '../../assets/portfolio/axisketcher.png'
import interactive from '../../assets/portfolio/interactive.png'

const data = [
  {
    id: 1,
    image: multicloud,
    title: 'Cloud Mart',
    github: 'https://github.com/SharanB7/Cloud-Mart',
  },
  {
    id: 2,
    image: appearanceTransfer,
    title: 'Single Shot Appearance Transfer',
    github: 'https://github.com/SharanB7/Single-Shot-Appearance-Transfer',
  },
  {
    id: 3,
    image: facerecognition,
    title: 'Face Recognition System',
    github: 'https://github.com/SharanB7/Face-Recognition-System',
  },
  {
    id: 4,
    image: credit,
    title: 'Credit Card Default Detection',
    github: 'https://github.com/SharanB7/Predictive-Modeling-for-Credit-Card-Default-Detection',
  },
  {
    id: 5,
    image: pacman,
    title: 'Pac-Man AI Suite',
    github: 'https://github.com/SharanB7/Pac-Man-AI-Suite',
  },
  {
    id: 6,
    image: axisketcher,
    title: 'AxiSketcher',
    github: 'https://github.com/SharanB7/AxiSketcher',
  },
  {
    id: 7,
    image: interactive,
    title: 'Interactive Character Analysis',
    github: 'https://github.com/SharanB7/D3-Interactive-Character-Analysis',
  },
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work</h5>
      <h2>Portfolio</h2>
      <div className="container portfolio__container">
        {
          data.map(({ id, image, title, github, demo }) => {
            return (
              <article key={id} className="portfolio__item">
                <div className="portfolio__item-image">
                  <img src={image} alt={title}/>
                </div>
                <h3>{title}</h3>
                <div className="portfolio__item-cta">
                  <a href={github} className='btn'>GitHub</a>
                  {/* <a href={demo} className='btn btn-primary' target='_blank'>Live Demo</a> */}
                </div>
              </article>
            );
          })
        }

      </div>
    </section>
  )
}

export default Portfolio