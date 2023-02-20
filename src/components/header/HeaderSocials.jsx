import React from 'react'

import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'

const HeaderSocials = () => {
  return (
    <div className='header_socials'>

    <a href="https://linkedin.com" rel="noopener noreferrer"><BsLinkedin /></a>
    <a href="https://github.com" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
    <a href="https://rupeshshrestha.com" target="_blank" rel="noopener noreferrer"><FiInstagram /></a>
      
    </div>
  )
}

export default HeaderSocials
