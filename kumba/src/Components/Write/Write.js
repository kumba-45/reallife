import React from "react";
import file from "../Icons/File.svg";
import classes from "./write.module.css";
import write from "../Images/write.jpg";

const Write = () => {
  return (
    <div className={classes.write_back}>
      <div className={classes.write_image}>
        <img className={classes.write_photo} src={write} alt="write_photo" />
      </div>
      <div className={classes.form}>
        <form>
          <div className={classes.label_input}>
            <label className={classes.label} htmlFor="fileinput">
              {<img className={classes.img} src={file} alt="file" />}
            </label>
            <input style={{ display: "none" }} type="file" id="fileinput" />
            <input
              className={classes.input_title}
              type="text"
              placeholder="Title"
              autoFocus={true}
            />
          </div>
          <div>
            <textarea
              className={classes.input_story}
              type="text"
              placeholder="Tell Your Story"
            ></textarea>
          </div>
        </form>
      </div>
      <button className={classes.button}>Publish</button>
    </div>
  );
};

export default Write;
