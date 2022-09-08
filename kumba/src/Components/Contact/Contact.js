import React from 'react'
import classes from './contact.module.css';
const Contact = () => {
  return (
    <div  >
      <div className={classes.contact}>
        <h2>Contact Us</h2>
        <p> Hello I' am Kumba Srikanth i was born at Guntur Andhra Pradesh, my father name is
           venakteswaralu my mother name is nagendram <br/>i have one elder brother he got the recently 
           bank job my father occupition farmer my mother house wife </p>
      </div>
      <div>
        <div>
          <div>Location</div>
          <div>phone number</div>
          <div>email</div>
        </div>
        <div>
          <h2>Send message</h2>
          <form>
            <input  type="text" placeholder='Full Name'/>
            <input  type="eamil" placeholder='eamil'/>
            <textarea>Enter your message</textarea> 
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
