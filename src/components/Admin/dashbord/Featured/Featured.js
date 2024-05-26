import React from 'react'
import MoreVertIcon from "@mui/icons-material/MoreVert";
 
import "./Featured.css"
function Featured() {
  return (
    <div className="featured">
         <div className="top">
        <h1 className="title">Total result</h1>
        <MoreVertIcon fontSize="small" />
      </div>
        <div className="bottom">
        <div className="featuredChart">
         
        </div>
        
        </div>
    </div>
  )
}

export default Featured