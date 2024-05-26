import React from 'react'
import { MdEditSquare } from "react-icons/md";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp"; 
import { MdDelete } from "react-icons/md"; 
import { Link } from 'react-router-dom';
import "./WidgetG.css"
const WidgetG = ({ type }) => {
    let data = {
        title: "Default Title",
        isnumber: false,
        link: "Default Link",
        icon: null,
    };

  //temporary
  const amount = 25;
   

  switch (type) {
    case "groupe1":
      data = {
        title: "groupe1",
        isnumber: false,
        link: "See all student",
        icon: (
          < MdDelete
            className="icon"
            style={{ 
                
                color: "red" }}
            

          />
          
        ),
        iconn: (
            <MdEditSquare
               
              style={{ 
                  
                  color: "green" }}
              
  
            />
          ),
       
        
      };
      break;
    case "groupe2":
      data = {
        title: "groupe2",
        isnumber: false,
        link: "See all student",
        icon: (
            <  MdDelete
              className="icon"
              style={{ 
                
                color: "red" }}
            />
          ),
          iconn: (
            <MdEditSquare
               
              style={{ 
                  
                  color: "green" }}
              
  
            />
          ),
      };
      break;
    case "groupe3":
      data = {
        title: "groupe3",
        isnumber: true,
        link: "see all student",
        icon: (
            <  MdDelete
              className="icon"
              style={{ 
                
                color: "red" }}
            />
          ),
          iconn: (
            <MdEditSquare
               
              style={{ 
                  
                  color: "green" }}
              
  
            />
          ),
      };
      break;
      case "groupe4":
        data = {
          title: "groupe 4",
          isnumber: true,
          link: "see all student",
          icon: (
              <  MdDelete
                className="icon"
                style={{
                    
                    color: "red",
                }}
              />
            ),
            iconn: (
                <MdEditSquare
                   
                  style={{ 
                      
                      color: "green" }}
                  
      
                />
              ),
        };
        break;
        case "groupe5":
            data = {
              title: "groupe5",
              isnumber: true,
              link: "see all student",
              icon: (
                  < MdDelete 
                    className="icon"
                    style={{
                        
                        color: "red",
                    }}
                  />
                ),
                iconn: (
                    <MdEditSquare
                       
                      style={{ 
                          
                          color: "green" }}
                      
          
                    />
                  ),
                  
            };
            break;
            case "groupe6":
                data = {
                  title: "groupe6",
                  isnumber: true,
                  link: "see all student",
                  icon: (
                      < MdDelete 
                        className="icon"
                        style={{
                            
                            color: "red",
                        }}
                      />
                    ),
                    iconn: (
                        <MdEditSquare
                           
                          style={{ 
                              
                              color: "green" }}
                          
              
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
        <Link to="/etudent" style={{ textDecoration: "none" }}> 
        <span className="link">{data.link}</span>
        </Link>
      </div>
      <div className="right">
        <div className="percentage positive">
          <KeyboardArrowUpIcon />
           
        </div>
        <div className='iconn'>
        {data.iconn}
        {data.icon}
        </div>
      </div>
    </div>
  );
};

export default WidgetG;
