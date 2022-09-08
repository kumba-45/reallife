import React from 'react';
import classes from './Header.module.css';
import head from '../Images/header.jpg';


function Header() {
  return (
    <div className={classes.head}>
        <div className={classes.header_title}>
            <span className={classes.header_sm}>React & node</span>
            <span className={classes.header_bg}>Blog</span>
            </div>

           
            <img  className={classes.header_image }   src={head} alt="body"/>
            


        </div>
      
    
  )
}

export default Header;
