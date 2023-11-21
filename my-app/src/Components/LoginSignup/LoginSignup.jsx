import React from 'react'
import './LoginSignup.css'

import user_icon from '../Media/user_icon.png'
import password_icon from '../Media/password_icon.png'
import email_icon from '../Media/email_icon.png'

const LoginSignup = () => {
  return (
    <div className="container">
      <div className="header">
        <div className="text">Sign Up</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        <div className="input">
          <img src={user_icon} alt=""/>
          <input type="text" placeholder="Username"/>
        </div>
        <div className="input">
          <img src={email_icon} alt=""/>
          <input type="email" placeholder="Email"/>
        </div>
        <div className="input">
          <img src={password_icon} alt=""/>
          <input type="password" placeholder="Password"/>
        </div>
      </div>
      <div className="forgot-password">Forgot Password? <span>Click Here!</span></div>
      <div className="submit-container">
        <div className="submit">Sign Up</div>
        <div className="submit">Login</div>
      </div>
    </div>
  )
}

export default LoginSignup