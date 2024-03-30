import React from "react";
import login from "../../Assets/pick-meals-image.png";
import ChooseMeals from "../../Assets/choose-image.png";
import DeliveryMeals from "../../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: login,
      title: "login",
      text: "First, you must log in to ensure that you belong to this exam",
    },
    {
      image: ChooseMeals,
      title: "do test",
      text: "Secondly, welcome, and we wish you success in passing your exam. You will find it in the room you belong to ",
    },
    {
      image: DeliveryMeals,
      title: " note",
      text: "Finally, you can view your results",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
        Dear student, here are the next steps to pass the exam
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
