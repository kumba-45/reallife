import React from 'react';
import classes from './registration.module.css';
import reg from '../Images/rejster.jfif';


const  Registration = () =>{
  return (
    <div className={classes.reg}>
        <div>
        <img  className={classes.img} src={reg} alt="reg"/>


        </div>
        <h2 className={classes.header}>Registration</h2>
        <div className={classes.form_reg}>
            
            <form className={classes.form_register}>
            <label>User Name
            </label>
            <input  type="text" placeholder="enter your username..."/>
            <label>Email
            </label>
            <input  type="email" placeholder="enter your email..."/>
            <label>Password</label>
            <input  type="password" placeholder='enter your password...'/>
            <button className={classes.reg_button}>Login</button>
            </form>
            <button className={classes.register}>Register</button>
        
            </div>
            
        
        
      
    </div>
  )
}

export default Registration;
