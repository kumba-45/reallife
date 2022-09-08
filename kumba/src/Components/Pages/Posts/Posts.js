import React from "react";
import classes from "./post.module.css";
import hyderabad from "../../Images/hyderabad.jfif";
import goa from "../../Images/goa.jfif";
import madeikeri from "../../Images/madikeri.jfif";
import manali from "../../Images/manali.jfif";
import taj from "../../Images/tajmahal.webp";

const Posts = () => {
  const Images = [
    {
      id :1,
      title : "Hyderabad",
      img : hyderabad ,
      description : "Hyderabad is the capital of southern India's Telangana state. A major center for the technology industry, it's home to many upscale restaurants and shops"
      
    },
    {
      id :2,
      title : "Goa",
      img : goa ,
      description : "Hyderabad is the capital of southern India's Telangana state. A major center for the technology industry, it's home to many upscale restaurants and shops"
      
      
    },
    {
      id:3,
      title : "Madeikeri",
      img : madeikeri ,
      description : "Hyderabad is the capital of southern India's Telangana state. A major center for the technology industry, it's home to many upscale restaurants and shops"
      
    },
    {
      id:4,
      title : "Manali",
      img : manali,
      description : "Hyderabad is the capital of southern India's Telangana state. A major center for the technology industry, it's home to many upscale restaurants and shops"
      
    },
    {
      id : 5,
      title : "Taj Mahal",
      img : taj,
      description : "Hyderabad is the capital of southern India's Telangana state. A major center for the technology industry, it's home to many upscale restaurants and shops"
      
    }

  ];
  return (
    <div className={classes.post}>
      <div className={classes.post_box}>
        {Images.map((item) => (
          <ul className={classes.posts_box}>
            <img className={classes.post_image} src={item.img} alt="photo" />
            <ul className={classes.title_description}>
            <p className={classes.post_title}>{item.title}</p>
            <span className={classes.post_description}>{item.description}</span>
            </ul>
          </ul>
        ))}
      </div>
    </div>
  );
};

export default Posts;
