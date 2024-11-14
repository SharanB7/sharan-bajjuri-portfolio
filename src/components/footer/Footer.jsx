import React from 'react'
import './footer.css'
import { FaFacebookF } from 'react-icons/fa'
import { FiInstagram } from 'react-icons/fi'
import { SiLeetcode } from "react-icons/si";
import { FaRedditAlien, FaXTwitter } from "react-icons/fa6";
import { BsGithub } from 'react-icons/bs'

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'>Sharan</a>
      <ul className="permalinks">
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        {/* <li><a href='#testimonials'>Testimonials</a></li> */}
        <li><a href='#contact'>Contact</a></li>
      </ul>
      
      <div className="footer__socials">
        <a href='https://github.com/SharanB7' target='_blank'><BsGithub/></a>
        <a href='https://leetcode.com/u/sharanbajjuri/' target='_blank'><SiLeetcode/></a>
        <a href='https://instagram.com/sharanbajjuri' target='_blank'><FiInstagram/></a>
        <a href='https://www.reddit.com/user/The_Unique_Sher/' target='_blank'><FaRedditAlien/></a>
        <a href='https://x.com/BajjuriSharan' target='_blank'><FaXTwitter/></a>
        <a href='https://facebook.com/sharanbajjuri' target='_blank'><FaFacebookF/></a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Sharan Bajjuri. All rights reserved.</small>
      </div>
    </footer>
  )
}

export default Footer