import React from 'react'
import './LoginForm.css'
import { FaUserAlt } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import {useNavigate} from "react-router-dom"
import axios from "axios";
import { useState } from "react";
  
 
 const LoginForm = () => {

    const[admin , setAdmin] = useState({
        admin_name:"",
        admin_password:""
    });

   function handleInput(e){
         setAdmin({
             ...admin,
             [e.target.name] : e.target.value
         },[]);
   }
   const navigate=useNavigate();

    async function login(e){
        const value = await axios.get(" "); 

       //  console.log(value.data[0].admin_name);
       //  console.log(admin.admin_name);
        if(value.data[0].admin_name === admin.admin_name)
        {
           if(value.data[0].admin_password === admin.admin_password){
               alert("success");
               navigate("/AdminDashboard");
           }
           else{
               alert("Wrong Password");
           }
        }
        else{
            alert("Wrong Admin name");
        }
    }

   return (
    <div className='wrapper'>
    <form action="">
        <h1>Login</h1>
        <div className="input-box">
            <input type="text" onChange={(e) => handleInput(e)} placeholder="Email" required/>
            <FaUserAlt className='icon'/>
        </div>
        <div className="input-box">
            <input type="password" onChange={(e) => handleInput(e)} placeholder="Password" required/>
            <FaLock className='icon'/>
        </div>
        <div className="remember-forgot">
            <label><input type="checkbox" />Remember me</label>
            <a href="#">Forgot password?</a>
            
        </div>
        <button type='submit'>Login</button>
        
    </form>
</div>
)
   
 }
 
 export default LoginForm
 