import React from "react";
import Posts from "../Posts/Posts";
import Header from "../../Header/Header";
import Sidebar from "../Sidebar/Sidebar";
import classes from './home.module.css';
function Home() {
  return (
    <div className={classes.home}>
      <Header />
      <div className={classes.sidebar}>
        <Posts />
        <Sidebar />
      </div>
    </div>
  );
}

export default Home;
