import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';
import { useAuth } from '../../AuthContext';
import { useUser } from '../../UserContext';

import user_icon from '../Media/user_icon.png';
import password_icon from '../Media/password_icon.png';
import email_icon from '../Media/email_icon.png';

const LoginSignup = () => {
  const [action, setAction] = useState('Login');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const { setUser } = useUser();

  const handleSignup = () => {
    // Check if any required field is empty
    if (!username || !email || !password) {
      setSuccessMessage('Please fill in all fields.');
      return;
    }
  
    // Get existing user data from local storage
    const existingUserData = JSON.parse(localStorage.getItem('userData')) || [];
  
    // Ensure that existingUserData is an array
    const userDataArray = Array.isArray(existingUserData) ? existingUserData : [existingUserData];
  
    // Check if the username is already taken
    const isUsernameTaken = userDataArray.some((user) => user.username === username);
  
    if (isUsernameTaken) {
      setSuccessMessage('Username is already taken. Please choose another.');
      return;
    }
  
    // Save user information to local storage
    const userData = [...userDataArray, { username, email, password }];
    localStorage.setItem('userData', JSON.stringify(userData));
  
    // Show success message
    setSuccessMessage('Account created successfully!');
  
    setUser(username);
    // Change action back to "Login" after signup
    setAction('Login');
  
    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const handleLogin = () => {
    // Check if any required field is empty
    if (!email || !password) {
      setSuccessMessage('Please fill in all fields.');
      return;
    }
  
    // Get existing user data from local storage
    const existingUserData = JSON.parse(localStorage.getItem('userData')) || [];
  
    // Check if the user exists in local storage
    const user = existingUserData.find(
      (u) => u.email === email && u.password === password
    );
  
    if (!user) {
      setSuccessMessage('Invalid credentials. Please try again.');
      return;
    }
  
    setUser(user.username);
  
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
      {successMessage && <div className="success-message">{successMessage}</div>}
      <div className="inputs">
        {action === 'Login' ? (
          <div></div>
        ) : (
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
      {action === 'Sign Up' ? (
        <div></div>
      ) : (
        <div className="forgot-password">
          Forgot Password? <span>Click Here!</span>
        </div>
      )}
      <div className="submit-container">
        {action === 'Login' ? (
          <div className="submit gray" onClick={() => setAction('Sign Up')}>
            Sign Up
          </div>
        ) : (
          <div className="submit" onClick={handleSignup}>
            Create
          </div>
        )}
        <div className={action === 'Sign Up' ? 'submit gray' : 'submit'} onClick={handleLogin}>
          Login
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;


