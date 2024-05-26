import React from 'react'
import { RiBarChartGroupedFill } from "react-icons/ri";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"; 
import { Link } from 'react-router-dom';
import"./WidgetSt.css"
const WidgetSt = ({ type }) => {
    let data = {
        title: "Default Title",
        isnumber: false,
        link: "Default Link",
        icon: null,
    };

  //temporary
  const amount = 5;
   

  switch (type) {
    case "licence1":
      data = {
        title: "licence1",
        isnumber: false,
        link: "See all groupe",
        icon: (
          < RiBarChartGroupedFill 
            className="icon"
            style={{ 
                backgroundColor: "rgba(0, 128, 0, 0.2)", 
                color: "green" }}
          />
        ),
      };
      break;
    case "licence2":
      data = {
        title: "licence2",
        isnumber: false,
        link: "See all groupe",
        icon: (
            < RiBarChartGroupedFill 
              className="icon"
              style={{ 
                backgroundColor: "rgba(0, 128, 0, 0.2)", 
                color: "green" }}
            />
          ),
      };
      break;
    case "licence3":
      data = {
        title: "licence3",
        isnumber: true,
        link: "see all groupe",
        icon: (
            < RiBarChartGroupedFill  
              className="icon"
              style={{ 
                backgroundColor: "rgba(0, 128, 0, 0.2)", 
                color: "green" }}
            />
          ),
      };
      break;
      case "master1":
        data = {
          title: "master1",
          isnumber: true,
          link: "see all groupe",
          icon: (
              < RiBarChartGroupedFill
                className="icon"
                style={{
                  backgroundColor: "rgba(218, 165, 32, 0.2)",
                  color: "goldenrod",
                }}
              />
            ),
        };
        break;
        case "master2":
            data = {
              title: "master 2",
              isnumber: true,
              link: "see all groupe",
              icon: (
                  <RiBarChartGroupedFill  
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
        <Link to="/groupe" style={{ textDecoration: "none" }}> 
        <span className="link">{data.link}</span>
        </Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
           
        </div>
        {data.icon}
      </div>
    </div>
  );
};

export default WidgetSt;
