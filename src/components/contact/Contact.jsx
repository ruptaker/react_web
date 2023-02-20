import React from 'react'
import './contact.css'
import {BiMessageAltCheck} from 'react-icons/bi'
import {AiFillLinkedin} from 'react-icons/ai'
import {FaWhatsapp} from 'react-icons/fa'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
//import emailjs from '@emailjs/browser';


const contact = () => {

  const form =useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mfdyftp', 'template_tt4y1t9', form.current,'TuXJwZLCJM8OPW5sy')
    e.target.reset()  
    
    .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <section id="contact">
   <h5> Get in Touch
   </h5>

   <h2>Contact Me</h2>

   <div className='container contact_container'>
    <div className='contact_options'>

      <article className='contact_option'>
      <BiMessageAltCheck  className="contact_option-icon"/>
      <h4>Email</h4>
      <h5>rshrestha9@lamar.edu</h5>
      <a href="mailto:rshrestha9@outlook.com" target="_blank">Send a Message</a>
      </article>
      <article className='contact_option'>
      <AiFillLinkedin className="contact_option-icon"/>
      <h4>linkedin</h4>
      <h5>rshrestha9/</h5>
      <a href="https://www.linkedin.com/in/rshrestha9/" target="_blank">View Profile</a>
      </article>
      <article className='contact_option'>
      <FaWhatsapp className="contact_option-icon"/>
      <h4>WhatsApp</h4>
      <h5>4094449238</h5>
      <a href="https://api.whatsapp.com/send?phone+14094449238" target="_blank">Send a Message</a>
      </article>
      
    </div>

 
    <form ref={form} onSubmit={sendEmail}>
      <input type="text" name='name' placeholder='Your Full Name' required/>
      <input type="email" name='email' placeholder='Your Email' required/>
      <textarea name="message" rows="7" placeholder="Your Message" required> 
      </textarea>

<button type='submit' className='btn btn-primary'>Send Message</button>

    </form>
   </div>
    </section>
  )
}

export default contact
