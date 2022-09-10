import React from 'react'
import classes from './contact.module.css';
const Contact = () => {
  return (
    <div className={classes.contact_back}  >
      <div className={classes.contact}>
        <h2>Contact Us</h2>
        <p> Hello I' am Kumba Srikanth i was born at Guntur Andhra Pradesh, my father name is
           venakteswaralu my mother name is nagendram <br/>i have one elder brother he got the recently 
           bank job my father occupition farmer my mother house wife </p>
      </div>
      <div className={classes.details}>
        <div className={classes.personal_details}>
          <p>1-53/A karlapudi (post), Amaravathi (m.d) <br/>Guntur(d.t), Andhra Pradesh 522016</p>
          <h6>9951046539</h6>
          <h3>Kumbasrikanth8@gmail.com</h3>
        </div>
        <div className={classes.sendmessage}>
          <h2>Send message</h2>
          <form>
            <input  type="text" placeholder='Full Name'/>
            <input  type="eamil" placeholder='eamil'/>
            <textarea placeholder='enter your message'></textarea> 
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact;
