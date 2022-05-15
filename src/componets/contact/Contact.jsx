import React from 'react'
import "./Contact.css"
import {MdEmail} from "react-icons/md"
import {ImLinkedin} from "react-icons/im"
import {BsGithub} from "react-icons/bs"
import {ImWhatsapp} from "react-icons/im"
import  { useRef } from 'react';
import emailjs from '@emailjs/browser';

const {PHONE_NUMBER, EMAIL_SERVICE_ID, TEMPLATE_SERVICE_ID, PUBLIC_KEY} = process.env


const Contact = () => {
  const form = useRef();
  
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm("service_x13b9ju", "template_zdkz01m",  form.current, "M-Qkyci830QPzlOwZ")
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset()
      alert("Email Send")
  };

  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className='contact__option'>
            <MdEmail className='contact__option-icon'/>
            <h4>Email</h4>
            <h5>albertogiusepp@gmail.com</h5>
            <a href="mailto:albertogiusepp@gmail.com" target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <ImLinkedin className='contact__option-icon'/>
            <h4>Linkedin</h4>
            <h5>https://www.linkedin.com/in/giu-dev/</h5>
            <a href="https://www.linkedin.com/in/giu-dev/" target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <BsGithub className='contact__option-icon'/>
            <h4>GitHub</h4>
            <h5>https://github.com/Giuxpro</h5>
            <a href="https://github.com/Giuxpro" target="_blank">Send a Message</a>
          </article>
          <article className='contact__option'>
            <ImWhatsapp/>
            <h4>WhatsApp</h4>
            <h5>Let's Talk</h5>
            <a href={`https://api.whatsapp.com/send?phone=922276249`} target="_blank">Send a Message</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required />
          <input type="email" name='email' placeholder='Your Email' required />
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact