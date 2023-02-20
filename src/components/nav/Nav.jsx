import React from 'react'
import './nav.css'
import {FcHome} from 'react-icons/fc'
import {FcAbout} from 'react-icons/fc'
import {MdCastForEducation} from 'react-icons/md'
import {MdDesignServices} from 'react-icons/md'
import {FcContacts} from 'react-icons/fc'
import { useState } from 'react'


const nav = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
     <a href="#" onClick={() => setActiveNav('#')} className={activeNav === '#' ? 'active' : ''}><FcHome /></a>
     <a href="#about" onClick={() => setActiveNav('#about')} className={activeNav === '#about' ? 'active' : ''}><FcAbout /></a>
     <a href="#experience" onClick={() => setActiveNav('#experience')} className={activeNav === '#experience' ? 'active' : ''} ><MdCastForEducation /></a>
     <a href="#portfolio" onClick={() => setActiveNav('#services')} className={activeNav === '#portfolio' ? 'active' : ''}><MdDesignServices /></a>
     <a href="#contact" onClick={() => setActiveNav('#contact')} className={activeNav === '#contact' ? 'active' : ''}><FcContacts /></a>
    </nav>
  )
}

export default nav
