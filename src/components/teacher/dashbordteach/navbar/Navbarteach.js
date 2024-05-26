import React from 'react'
 
 
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
 
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
 
 import"./Navbarteach.css"
 
const Navbarteach = () => {
   

  return (
    <div className="Navbarteach">
      <div className="wrappe">
        <div className="Search">
          <input type="text" placeholder="Search..." />
          <SearchOutlinedIcon />
        </div>
        <div className="items">
          
          <div className="item">
            <DarkModeOutlinedIcon
              className="icon"
              
            />
          </div>
          <div className="item">
            <FullscreenExitOutlinedIcon className="icon" />
          </div>
          <div className="item">
            <NotificationsNoneOutlinedIcon className="icon" />
            <div className="counter">1</div>
          </div>
          <div className="item">
            <ChatBubbleOutlineOutlinedIcon className="icon" />
            <div className="counter">2</div>
          </div>
          <div className="item">
             
          </div>
          <div className="item">
             
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbarteach;
