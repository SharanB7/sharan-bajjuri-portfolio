import React from 'react'
import { BsGithub } from 'react-icons/bs'
import { FaRedditAlien, FaLinkedinIn } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import { MdOutlineEmail } from 'react-icons/md'


const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=sharanb@asu.edu" target='_blank'><MdOutlineEmail/></a>
        <a href='https://linkedin.com/in/sharan-bajjuri' target='_blank'><FaLinkedinIn/></a>
        <a href='https://github.com/SharanB7' target='_blank'><BsGithub/></a>
        <a href='https://leetcode.com/u/sharanbajjuri/' target='_blank'><SiLeetcode/></a>
        <a href='https://www.reddit.com/user/The_Unique_Sher/' target='_blank'><FaRedditAlien/></a>
    </div>
  )
}

export default HeaderSocials