import React from 'react'
import "./Widget.css";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { PiExamFill } from "react-icons/pi";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";

const Widget = ({ type }) => {
    let data = {
        title: "Default Title",
        isnumber: false,
        link: "Default Link",
        icon: null,
    };

  //temporary
  const amount = 100;
  const diff = 30;

  switch (type) {
    case "teacher":
      data = {
        title: "teacher",
        isnumber: false,
        link: "See all teacher",
        icon: (
          < GiTeacher
            className="icon"
            style={{
              color: "crimson",
              backgroundColor: "rgba(255, 0, 0, 0.2)",
            }}
          />
        ),
      };
      break;
    case "student":
      data = {
        title: "student",
        isnumber: false,
        link: "See all student",
        icon: (
            < PiStudentBold 
              className="icon"
              style={{ 
                backgroundColor: "rgba(0, 128, 0, 0.2)", 
                color: "green" }}
            />
          ),
      };
      break;
    case "result":
      data = {
        title: "exams results",
        isnumber: true,
        link: "see all exams results",
        icon: (
            <PiExamFill  
              className="icon"
              style={{
                backgroundColor: "rgba(218, 165, 32, 0.2)",
                color: "goldenrod",
              }}
            />
          ),
      };
      break;
    default:
      break;
  }

  return (
    <div className="widget">
       <div className="left">
        <span className="title">{data.title}</span>
        <span className="counter">
          {data.isnumber } {amount}
        </span>
        <span className="link">{data.link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
          {diff} %
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default Widget;
