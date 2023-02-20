import React from 'react'
import './about.css'
import ME from '../../assets/me-about.jpg'
import {FaAward} from 'react-icons/fa'
import {AiOutlineFundProjectionScreen} from 'react-icons/ai'
import {HiOutlineOfficeBuilding} from 'react-icons/hi'

const about = () => {
  return (
    <section id="about">
    <h5> Get to know</h5>
    <h2> About Me</h2>
 

    <div className='container about_container'>
      <div className="about_me">
        <div className='about_me-image'>
               <img src ={ME} alt="About Image" />

        </div>
      </div>



      <div className='about_content'>
        <div className='about_cards'>
          <article className='about_card'>
          <FaAward className='about_icon' />
            <h6>Experience</h6>
            <small> 2+ years experience</small>
          </article>
          <article className='about_card'>
          <HiOutlineOfficeBuilding className='about_icon' />
            <h6>Clients</h6>
            <small>Companies</small>
          </article>
          <article className='about_card'>
          <AiOutlineFundProjectionScreen className='about_icon' />
            <h6>Projects</h6>
            <small>Different Projects</small>
          </article>
        </div>


        <p>
          Computer science gave me a new vision in life that's why I pursued myself to study Master's in Computer Science. 
          Although it was a new challenge for me, I started working hard and learning programming language.
         During a short period, I managed to learn python, java, HTML, CSS, and javascript.
          They say where there is a will, there is a way. This is an industry where you learn every day. 
          Every time there are new things to put on and new things to discover. Due to this never-ending relation
           between Learning and inventions, Computer science is just a subject for me. 


        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>
      </div>
    </div>





    </section>
  )
}

export default about
