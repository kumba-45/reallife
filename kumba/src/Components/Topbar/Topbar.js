 import { React } from 'react';
 import {Link } from 'react-router-dom';
 import classes from './Topbar.module.css';
 import facebook from '../Icons/facebook.svg';
 import tweeter from  '../Icons/tweeter.svg';
 import youtube from  '../Icons/youtube.svg';
 import instagram from '../Icons/Instagram.svg';
 import search from '../Icons/Search.svg';
 const Topbar = () =>{
    return(
        <div className={classes.topbar} >
            <div className={classes.topleft}>
                <img  src={facebook} alt="facebook"/>
                <img  src={tweeter} alt="facebook"/>
                <img  src={youtube} alt="facebook"/>
                <img  src={instagram} alt="facebook"/>
            

            </div>
            <div className={classes.topcenter}>
            <nav>
                <ul>
                    <Link to="home"><li>Home</li></Link>
                    <Link to="About"><li>About</li></Link>
                    <Link to="Contact"><li>Contact</li></Link>
                    <Link to="Write"><li>Write</li></Link>
                    <Link to="Logout"><li>Logout</li></Link>
                </ul>
            </nav>

            </div>
            <div className={classes.topright}>
                <div className={classes.image}></div>
                <img src={search} alt="search"/>
                

            </div>

        </div>
    );

 };
 export default Topbar;