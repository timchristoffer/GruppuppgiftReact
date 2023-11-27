import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginSignup.css';
import { useAuth } from '../../AuthContext';
import { useUser } from '../../UserContext';

import user_icon from '../Media/user_icon.png';
import password_icon from '../Media/password_icon.png';
import email_icon from '../Media/email_icon.png';
import logo from '../Media/logo.png';

const LoginSignup = () => {
  const [action, setAction] = useState('Login');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();
  const { setUser } = useUser();

  useEffect(() => {
    // Set the local state if email is available in the context
    if (email) {
      setEmail(email);
    }
  }, [email]);

  const clearFormFields = () => {
    setUsername('');
    setEmail('');
    setPassword('');
  };

  const handleSignup = () => {
    if (!username || !email || !password) {
      setSuccessMessage('Please fill in all fields.');
      return;
    }

    const lowercaseEmail = email.toLowerCase();
    const existingUserData = JSON.parse(localStorage.getItem('allUsers')) || [];

    if (existingUserData.some((user) => user.email === lowercaseEmail)) {
      setSuccessMessage('Email is already registered. Please use another.');
      return;
    }

    const newUser = { id: Date.now(), username, email: lowercaseEmail, password };
    const updatedUserData = [...existingUserData, newUser];

    localStorage.setItem('allUsers', JSON.stringify(updatedUserData));

    setSuccessMessage('Account created successfully!');
    setUser(username, email);
    setAction('Login');

    clearFormFields();

    setTimeout(() => {
      setSuccessMessage('');
    }, 3000);
  };

  const handleLogin = () => {
    if (!email || !password) {
      setSuccessMessage('Please fill in all fields.');
      return;
    }

    const lowercaseEmail = email.toLowerCase();

    const existingUserData = JSON.parse(localStorage.getItem('allUsers')) || [];

    const user = existingUserData.find(
      (u) => u.email === lowercaseEmail && u.password === password
    );

    if (!user) {
      setSuccessMessage('Invalid credentials. Please try again.');
      return;
    }

    setUser(user.username, email);
    login();

    clearFormFields();

    setTimeout(() => {
      navigate('/home');
    }, 2000);
  };

  return (
    <div className="main-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" className="logo" />
      </div>
      <div className="login-container">
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
    </div>
  );
};

export default LoginSignup;