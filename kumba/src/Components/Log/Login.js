import React from "react";
import classes from "./login.module.css";
import Sidebar from "../Pages/Sidebar/Sidebar";
import login from "../Images/login.jpg";
import profile from "../Icons/profile.svg";

const Login = () => {
  return (
    <div className={classes.login}>
      <div className={classes.login_body}>
        <div className={classes.update_delete}>
          <span className={classes.update}>Update Your Account</span>
          <span className={classes.delete}>Delete Account</span>
        </div>
        <div className={classes.profile}>
          <span>Profile Picture</span>
          <div className={classes.profileinput}>
            <img className={classes.profile_image} src={login} alt="login" />
            <label className={classes.profile_input_label} htmlFor="inputfile">
              {
                <img
                  className={classes.profile_import}
                  src={profile}
                  alt="profile "
                />
              }{" "}
            </label>
          </div>
        </div>
        <input type="file" id="inputfile" style={{ display: "none" }} />
        <form className={classes.form}>
          <label>Username :</label>
          <input type="text" placeholder="Username" />

          <label>Email :</label>
          <input type="email" placeholder="abcd@gmail.com" />
          <label>Password :</label>
          <input type="password" placeholder="password"  />
          <button className={classes.formbutton}>Update</button>
        </form>
      </div>

      <Sidebar />
    </div>
  );
};

export default Login;
