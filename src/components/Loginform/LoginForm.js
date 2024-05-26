import React, { useState, useEffect } from 'react';
import './LoginForm.css'; // Import your CSS file
import { FaUserAlt, FaLock } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const LoginForm = () => {

  const INITIAL_STATE = {
    admin_name: "",
    admin_password: "",
  };

  const [admin, setAdmin] = useState(INITIAL_STATE);
  const navigate = useNavigate();

  const handleInput = (e) => {
    setAdmin({
      ...admin,
      [e.target.name]: e.target.value,
    });
  };

  const [error, setError] = useState(null); // State for error handling

  const login = async (e) => {
    e.preventDefault(); // Prevent default form submission behavior

    try {
      const response = await axios.get("your_api_endpoint"); // Replace with your actual API endpoint
      const validAdmin = response.data.find(
        (user) => user.admin_name === admin.admin_name
      );

      if (validAdmin) {
        if (validAdmin.admin_password === admin.admin_password) {
          setError(null); // Clear any previous errors
          alert("Login successful!");
          navigate("/AdminDashboard"); // Navigate to the dashboard
        } else {
          setError("Incorrect password");
        }
      } else {
        setError("Invalid username");
      }
    } catch (error) {
      console.error("Login error:", error);
      setError("An error occurred. Please try again later."); // Generic error message for user
    }
  };

  useEffect(() => {
    // Optional: Reset form or error state on component unmount
    return () => {
      setAdmin(INITIAL_STATE);
      setError(null);
    };
  }, []); // Empty dependency array ensures it runs only once

  return (
    <div className='wrapper'>
      <form onSubmit={login}>
        <h1>Login</h1>

        {error && <div className="error-message">{error}</div>}

        <div className="input-box">
          <input
            type="text"
            onChange={handleInput}
            placeholder="Email"
            name="admin_name"
            required
          />
          <FaUserAlt className='icon' />
        </div>
        <div className="input-box">
          <input
            type="password"
            onChange={handleInput}
            placeholder="Password"
            name="admin_password"
            required
          />
          <FaLock className='icon' />
        </div>

        <div className="remember-forgot">
          <label><input type="checkbox" />Remember me</label>
          <a href="#">Forgot password?</a>
        </div>

        <button type='submit'>Login</button>
      </form>

      {/* Optional: Display a loading indicator while fetching data */}
    </div>
  );
};

export default LoginForm;
