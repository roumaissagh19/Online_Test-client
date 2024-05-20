import React from 'react'
 import bg from "../../Assets/bg.jpg"
 import './Logintch.css';
import LoginForm from '../Loginform/LoginForm';
 

 
const Logintch = () => {
  return (
    <div className="logintch-section-container" >
    <div className='login'>
     <LoginForm/>
    </div>
   
    <div className="logintch-section-image-container">
      <img className='imglogin' src={bg} alt="" />
    </div>
    
    
  </div>
  )
}

export default Logintch
