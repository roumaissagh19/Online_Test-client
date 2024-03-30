import React from "react";
 
import AboutBackgroundImage from "../../Assets/about-background-image.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
       <div className=" circle2">
        </div>
       
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <h2 className="primary-subheading">About</h2>
        <h1 className="primary-heading">
          exama oline 
        </h1>
        <p className="primary-text">
           bla bla bla bla bla bala 
        </p>
        <p className="primary-text">
          the best

        </p>
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
