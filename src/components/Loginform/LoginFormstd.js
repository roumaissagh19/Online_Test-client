
import React from 'react'
import './LoginFormstd.css'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";

function LoginFormstd() {
  return (
    <div className='wrappers'>
        <form action="">
            <h1>Login</h1>
            <div className="input-boxs">
                <input type="text" placeholder="Email" required/>
                <FaUserAlt className='icons'/>
            </div>
            <div className="input-boxs">
                <input type="password" placeholder="Password" required/>
                <FaLock className='icons'/>
            </div>
            <div className="remember-forgotss">
                <label><input type="checkbox" />Remember me</label>
                <a  >Forgot password?</a>
                
            </div>
            <button type='submit'>Login</button>
            
        </form>
    </div>
  )
}
 export default LoginFormstd