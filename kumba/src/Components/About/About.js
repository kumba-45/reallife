import React from "react";
import allu from "../Images/allu.webp";
import classes from './about.module.css';
const About = () => {
  return (
    <div className={classes.about}>
      <div >
        <img className={classes.allu}  src={allu} alt="allu" />
      </div>
      <div className={classes.bio}>
        <p>
          Allu Arjun is Tollywood actor who is from Chiranjeevi's family. He has
          acted in as many as 20 films and bagged Filmfare South and Nandi
          Awards. The actor made his debut in Telugu industry with his first
          movie Gangotri in 2003. The actor shot to fame with hit movies like
          Arya, Bunny and Parugu. Forbes India placed Allur Arjun in the Top 50
          India 2015 Celeb 100 list. The actor is the son of producer Allu
          Aravind and NIrmala and the grandson of Allu Rama Lingaiah. In 2011,
          the actor married Sneha Reddy. The Hyderabad-born actor is also a
          producer, model, dancer and a playback singer. He is the first Telugu
          actor of this generation to receive an award for work in the
          neighbouring film industry. By this award, Bunny created a new record
          in Tollywood industry.
        </p>
      </div>
    </div>
  );
};

export default About;
