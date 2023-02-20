import React from 'react'
import './services.css'
import {BsCheckCircleFill} from 'react-icons/bs'

const services = () => {
  return (
    <section id="services">

    <h5>What I offer</h5>
    <h2> Services</h2>

    <div className='container services_container'>
      <article className='service'>
<div className='service_head'>
  <h3>Frontend Design</h3>
</div>

<ul className='service_list'>
  <li>
<BsCheckCircleFill className='service_list-icon' />
<p>React</p>
  </li>
  <li>
<BsCheckCircleFill className='service_list-icon' />
<p>Angular</p>
  </li>
  <li>
<BsCheckCircleFill className='service_list-icon' />
<p>HTML/CSS</p>
  </li>
  <li>
<BsCheckCircleFill className='service_list-icon' />
<p>JavaScript</p>
  </li>
  <li>
  </li>
</ul>


      </article>
      <article className='service'>
<div className='service_head'>
  <h3>Backend </h3>
</div>

<ul className='service_list'>
  <li>
<BsCheckCircleFill className='service_list-icon' />
<p>Java</p>
  </li>
  <li>
<BsCheckCircleFill className='service_list-icon' />
<p>SpringBoot</p>
  </li>
  <li>
<BsCheckCircleFill className='service_list-icon' />
<p>Flask</p>
  </li>
  <li>
<BsCheckCircleFill className='service_list-icon' />
<p>python</p>
  </li>
  <li>
<BsCheckCircleFill className='service_list-icon' />
<p>Mobgodb</p>
  </li>
</ul>


      </article>
      <article className='service'>
<div className='service_head'>
  <h3>Content Creating and Video Editing</h3>
</div>

<ul className='service_list'>
  <li>
<BsCheckCircleFill className='service_list-icon' />
<p>Instagram and Facebook Reels</p>
  </li>
  <li>
<BsCheckCircleFill className='service_list-icon' />
<p>youtube Videos</p>
  </li>
  <li>
<BsCheckCircleFill className='service_list-icon' />
<p>Drone videos</p>
  </li>
  <li>
<BsCheckCircleFill className='service_list-icon' />
<p>vloging</p>
  </li>
  <li>
<BsCheckCircleFill className='service_list-icon' />
<p>Travel Videos</p>
  </li>
</ul>


      </article>
    </div>







    </section>
  )
}

export default services
