import { React, useState } from "react";
import { Link } from "react-router-dom";
import classes from "./Topbar.module.css";
import facebook from "../Icons/facebook.svg";
import tweeter from "../Icons/tweeter.svg";
import youtube from "../Icons/youtube.svg";
import instagram from "../Icons/Instagram.svg";
import search from "../Icons/Search.svg";
const Topbar = () => {
  const [login, setLogin] = useState(false);
  const [logout, setLogout] =useState(false);

  const loginchangeHandler = () => {
    setLogin(true);
    
  };
  const logoutchangeHandler = () =>{
    setLogout(true)

  };

  return (
    <div className={classes.topbar}>
      <div className={classes.topleft}>
        <img src={facebook} alt="facebook" />
        <img src={tweeter} alt="facebook" />
        <img src={youtube} alt="facebook" />
        <img src={instagram} alt="facebook" />
      </div>
      <div className={classes.topcenter}>
        <nav>
          <ul>
            <Link to="home">
              <li>Home</li>
            </Link>
            <Link to="About">
              <li>About</li>
            </Link>
            <Link to="Contact">
              <li>Contact</li>
            </Link>
            <Link to="Write">
              <li>Write</li>
            </Link>
          </ul>
        </nav>
      </div>
      <div className={classes.topright}>
        <nav>
          <ul>
            <Link to="registration">
              <li onClick={loginchangeHandler}>Login</li>
            </Link>

         { login ? <Link to="login">
              <li onClick={logoutchangeHandler}>Registration</li>
            </Link> : null}
          </ul>
        </nav>
       { logout ? <div className={classes.profile}> <div className={classes.image}></div>
        <img src={search} alt="search" /> </div> :null } 
      </div> 
    </div>
  );
};
export default Topbar;
