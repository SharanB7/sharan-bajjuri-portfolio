import React from 'react'
import './about.css'
import ME from '../../assets/IMG_4995.png'
import {FaAward} from'react-icons/fa'
import {FiUsers} from'react-icons/fi'
import {VscFolderLibrary} from'react-icons/vsc'

const about = () => {
  return (
    <section id='about'>
      <h5>Get to know</h5>
      <h2>About Me</h2>

      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="About Image"/>
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
          <a href="#services" className="about__card">
            <article>
              <FaAward className='about__icon'/>
              <h5>Experience</h5>
              <small>2+ Years</small>
            </article>
          </a>

          <a href="#portfolio" className="about__card">
            <article>
              <VscFolderLibrary className='about__icon'/>
              <h5>Projects</h5>
              <small>6+ Completed</small>
            </article>
          </a>
          </div>
          <p>
            A Computer Science Master's student at Arizona State University, graduating in May 2025. With over two years of full-stack development experience, I specialize in building scalable web applications using Java, Spring Boot, SQL, AWS, React, and JavaScript. Passionate about AI/ML, I integrate intelligent, data-driven solutions into my projects. I'm seeking full-time positions starting in May as a Full-Stack Developer, Backend Developer, or AI/ML Engineer. Outside of coding, I enjoy hiking, cycling, and playing cricket, table tennis, and volleyball.
          </p>

          <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>
      </div>
    </section>
  )
}

export default about