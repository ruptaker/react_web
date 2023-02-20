import React from 'react'
import './experience.css'
import {BsFillCloudCheckFill} from 'react-icons/bs'
const Experience = () => {
  return (
    <section id="experience">
    <h5> What skills I Have</h5>
    <h2> SKills </h2>
    
    
    <div className='container skill_container'>
      <div className='skill_frontend'>
      
          <h3> Frontend Development</h3>

          <div className='experience_content'>
            <article className="experience_detail">
            <BsFillCloudCheckFill />
            <div>
              <h4> HTML</h4>
              <small className='text-light'> Experienced</small>
            </div>
             </article>
             <article className="experience_detail">
            <BsFillCloudCheckFill />
            <div>
            <h4> CSS</h4>
            <small className='text-light'> Experienced</small>
            </div>
             </article>
             <article className="experience_detail">
            <BsFillCloudCheckFill />
            <div>
            <h4> JavaScript</h4>
            <small className='text-light'> Experienced</small>
            </div>
             </article>
             <article className="experience_detail">
            <BsFillCloudCheckFill />
            <div>
            <h4>React</h4>
            <small className='text-light'>Intermediate</small>
            </div>
             </article>
             <article className="experience_detail">
            <BsFillCloudCheckFill />
            <div>
            <h4>Angular</h4>
            <small className='text-light'> Intermediate</small>
            </div>
             </article>
          </div>
      
    </div>

    <div className='skill_backend'>
    <h3> Backend Development</h3>
    <div className='experience_content'>
            <article className="experience_detail">
            <BsFillCloudCheckFill />
            <div>
            <h4> Java</h4>
            <small className='text-light'> Experienced</small>
            </div>
             </article>
             <article className="experience_detail">
            <BsFillCloudCheckFill />
            <div>
            <h4>Node Js</h4>
            <small className='text-light'> Experienced</small>
            </div>
             </article>
             <article className="experience_detail">
            <BsFillCloudCheckFill />
            <div>
            <h4>SpringBoot</h4>
            <small className='text-light'> Experienced</small>
            </div>
             </article>
             <article className="experience_detail">
            <BsFillCloudCheckFill />
            <div>
            <h4>NoSQl</h4>
            <small className='text-light'>Intermediate</small>
            </div>
             </article>
             <article className="experience_detail">
            <BsFillCloudCheckFill />
            <div>
            <h4>Hibernate</h4>
            <small className='text-light'> Intermediate</small>
            </div>
             </article>
          </div>
          </div>
    </div>
    </section>
  )
}

export default Experience
