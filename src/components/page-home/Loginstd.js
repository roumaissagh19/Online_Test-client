import React from 'react'
 import pg from "../../Assets/pg.jpg"
 import './Loginstd.css';
import LoginFormstd from '../Loginform/LoginFormstd';
 

const Loginstd = () => {
  return (
    <div className="login-section-container">
    <div className='login'>
      <LoginFormstd/>
    </div>
   
    <div className="login-section-image-container">
      <img className='imglogin' src={pg} alt="" />
    </div>
    
    
  </div>
  )
}

export default Loginstd