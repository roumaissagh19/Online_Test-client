import React from 'react'
import "./Sidbarteach.css"
import DashboardIcon from "@mui/icons-material/Dashboard";
import { PiStudentBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import { PiExamFill } from "react-icons/pi";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import { HiOutlineMenuAlt1 } from "react-icons/hi";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import { useState } from "react";
function Sidbarteach() {
    const [file, setFile] = useState("");
  return (
    <div className="sidebarteach">
    <div className="top">
      
        <img
              src={
                file
                  ? URL.createObjectURL(file)
                  : "https://icon-library.com/images/no-image-icon/no-image-icon-0.jpg"
              }
              alt=""
            />
         <span className="logo">roumaissa ghr</span>
    </div>
    <div className="center">
      <ul>
        <p className="title">MAIN</p>
        
        <li>
          <DashboardIcon className="icon" />
          <span>Dashboard</span>
        </li>
        
        <p className="title">LISTS</p>
         
          <li>
           < PiStudentBold  className="icon" />
            <span>Student</span>
          </li>
         
        
          <li>
            <  PiExamFill  className="icon" />
            <span>Exam</span>
          </li>
          <li>
            <  HiOutlineMenuAlt1 className="icon" />
            <span>result</span>
          </li>
        
         
         
        <p className="title">USEFUL</p>
        <li>
          <InsertChartIcon className="icon" />
          <span>Stats</span>
        </li>
        <li>
          <NotificationsNoneIcon className="icon" />
          <span>Notifications</span>
        </li>
        <p className="title">USER</p>
        <li>
          <AccountCircleOutlinedIcon className="icon" />
          <span>Profile</span>
        </li>
        <li>
          <ExitToAppIcon className="icon" />
          <span>Logout</span>
        </li>
      </ul>
    </div>
    <div className="bottom">
      <div
        className="colorOption"
        
      ></div>
      <div
        className="colorOption"
        
      ></div>
    </div>
    <hr />
    
    
  </div>
  )
}

export default Sidbarteach
