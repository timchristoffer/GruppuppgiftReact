import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css'
import { useAuth } from '../../AuthContext';

import user_icon from '../Media/user_icon.png';
import password_icon from '../Media/password_icon.png';
import email_icon from '../Media/email_icon.png';

const LoginSignup = () => {
  const [action, setAction] = useState("Login");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSignup = () => {
    // Check if any required field is empty
    if (!username || !email || !password) {
      setSuccessMessage("Please fill in all fields.");
      return;
    }
  
    // Save user information to local storage
    const userData = { username, email, password };
    localStorage.setItem('userData', JSON.stringify(userData));
  
    // Additional logic if needed
  
    // Show success message
    setSuccessMessage("Account created successfully!");
  
    // Change action back to "Login" after signup
    setAction("Login");
  
    setTimeout(() => {
      setSuccessMessage("");
    }, 3000);
  };
  
  const handleLogin = () => {
    // Check if any required field is empty
    if (!email || !password) {
      setSuccessMessage("Please fill in all fields.");
      return;
    }
    login();
  
    setTimeout(() => {
      // Navigate to the "Home" page
      navigate('/home');
    }, 2000);
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      {successMessage && (
        <div className="success-message">
          {successMessage}
        </div>
      )}
      <div className="inputs">
        {action === "Login" ? <div></div> : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
        )}
        <div className="input">
          <img src={email_icon} alt="" />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
      </div>
      {action === "Sign Up" ? <div></div> : (
        <div className="forgot-password">
          Forgot Password? <span>Click Here!</span>
        </div>
      )}
      <div className="submit-container">
        {action === "Login" ? (
          <div className="submit gray" onClick={() => setAction("Sign Up")}>
            Sign Up
          </div>
        ) : (
          <div className="submit" onClick={handleSignup}>
            Create
          </div>
        )}
        <div
          className={action === "Sign Up" ? "submit gray" : "submit"}
          onClick={handleLogin}
        >
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
