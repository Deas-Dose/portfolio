import React, {useRef} from 'react'
import './contact.css'
import {AiOutlineMail} from 'react-icons/ai'
import {RxDiscordLogo} from 'react-icons/rx'
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_oj1l5jk', 'template_f5it6it', form.current, 'awFgUUm9EHXvKuf3Z')
    
    e.target.reset();
  };


  return (
    <section id="contact">
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <AiOutlineMail className='contact__option-icon' />
            <h4>Email</h4>
            <h5>ssohaibfarsi@proton.me</h5>
            <a href="mailto:ssohaibfarsi@proton.me" target='_blank'>Send a message</a>
          </article>
          <article className="contact__option">
            <RxDiscordLogo className='contact__option-icon' />
            <h4>Discord</h4>
            <h5>and_rotate#0001</h5>
            <a href="https://www.discordapp.com/users/and_rotate#0001" target='_blank'>DM me</a>
          </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Your Full Name' required/>
          <input type="email" name='email' placeholder='Your Email' required/>
          <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
          <button type='submit' className='btn btn-primary'>Send Message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact