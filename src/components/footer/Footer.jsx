import React from 'react'
import './footer.css'
import {FaInstagram} from 'react-icons/fa'
import {RiFacebookBoxFill} from 'react-icons/ri'
import {BsTwitter} from 'react-icons/bs'
const footer = () => {
  return (
    <footer>
      <a href="#" className='footer_logo'>Rupesh Shrestha</a>
    <ul className='permalinks'>
      <li><a href="#">Home</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#experience">Experience</a></li>
      <li><a href="#services">Services</a></li>
      <li><a href="#portfolio">Portfolio</a></li>
      <li><a href="#testimonials">Testimonials</a></li>
      <li><a href="#Contact">Contact</a></li>
    </ul>

<div className='footer_socials'>
  <a href='https://www.facebook.com/rupesh.itu/' target="_blank" rel="noopener noreferrer"><RiFacebookBoxFill /></a>
  <a href='https://www.instagram.com/rtraveller_/' target="_blank" rel="noopener noreferrer"><FaInstagram/></a>
  <a href='https://twitter.com/Rupssth1773' target="_blank" rel="noopener noreferrer"><BsTwitter/></a>
</div>
<div classNAme='footer_copyright'>
<small>&copy; Rupesh Shrestha. 2023</small>


</div>







    </footer>




  )
}

export default footer
