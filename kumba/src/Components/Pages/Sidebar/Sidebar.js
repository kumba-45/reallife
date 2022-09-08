import React from "react";
import classes from "./sidebar.module.css";
import jai from "../../Images/jaibhim.webp";
import facebook from "../../Icons/facebook.svg";
import youtube from "../../Icons/youtube.svg";
import instagram from "../../Icons/Instagram.svg";
const a = ["Life", "Style", "Tech"];
const b = ["Music", "Sport", "Cinema"];

function Sidebar() {
  return (
    <div className={classes.sidebar}>
      <div className={classes.sidebar_about}>
        <span className={classes.sidebar_aboutme}>About Me</span>
        <img className={classes.profile} src={jai} alt="jai" />
        <p className={classes.sidebar_description}>
          Bhimrao Ramji Ambedkar (14 April 1891 to 6 December 1956) was an
          Indian jurist, economist, social reformer and political leader who
          headed the committee drafting the Constitution of India from the
          Constituent Assembly debates, served as Law and Justice minister in
          the first cabinet of Jawaharlal Nehru, and inspired the Dalit Buddhist
          movement after renouncing Hinduism.
        </p>

        <span className={classes.sidebar_aboutme}>Categories</span>

        <div className={classes.sidebar_list}>
          <div className={classes.sidebar_cat_list}>
            <ul>
              {a.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
          <div>
            <ul>
              {b.map((item) => (
                <li>{item}</li>
              ))}
            </ul>
          </div>
        </div>
        <span className={classes.sidebar_aboutme}>Follow us</span>
        <div className={classes.sidebar_follow}>
          <img className={classes.sidebar_icon} src={facebook} alt="facebook" />
          <img
            className={classes.sidebar_icon}
            src={instagram}
            alt="instagram"
          />
          <img className={classes.sidebar_icon} src={youtube} alt="youtube" />
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
