import React from "react";
/*import BannerBackground from "../Assets/home-banner-background.png";*/
import BannerImage from "../../Assets/home-banner-image.png";
import Navbar from "./Navbar";
import { FiArrowRight } from "react-icons/fi";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <div className="home-banner-container">
        <div className="home-text-section">
          <h1 className="primary-heading">
             oline exama
          </h1>
          <p className="primary-text">
          The best place for exams is here
          </p>
          <button className="secondary-button">
             <FiArrowRight />{"lear mor "}
          </button>
        </div>
        <div className="home-image-section">
          <img src={BannerImage} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
