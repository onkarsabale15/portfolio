import React from 'react'
import './Contact.css'
import emailjs from '@emailjs/browser'
import { useRef } from "react";
import { useState } from 'react';
import {themeContext} from '../../Context'
import {useContext} from 'react'
function Contact() {
    const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;
    const form = useRef();
    const [done, setDone] = useState(false)
  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_lyump6g', 'template_sh1l9wv', form.current, 'xuVDRiAR2ds2IQi2R')
      .then((result) => {
          console.log(result.text);
          setDone(true)
      }, (error) => {
          console.log(error.text);
      });
  };
  return (
    <div className="contact-form">
        <div className="w-left">
            <div className="awesome">
                <span style={{color:darkMode? 'white':''}}>Get in touch</span>
                <span>Contact me</span>
                <div className="blur s-blur1" style={{background:'#abf1ff94'}}>
                </div>
            </div>
        </div>
        <div className="c-right" id='Contact'>
            <form ref = {form} onSubmit={sendEmail}>
                <input type="text" name='user_name' className='user' placeholder='Name'/>
                <input type="email" name='user_email' className='user' placeholder='Email'/>
                <textarea name="message" className='user' placeholder='Message'/>
                <input type="submit" value='Send' className='button'/>
                <span>{done && 'Thanks For Contacting me!'}</span>
                <div className="blur c-blur1"
                style={{background:"var(--purple)"}}>
                </div>
            </form>
        </div>
    </div>
  )
}
export default Contact