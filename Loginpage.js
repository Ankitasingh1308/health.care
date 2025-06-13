import React from 'react';
import './Loginpage.css';
import { Link } from 'react-router-dom';

function LoginPage() {
  return (
    <div className="login-container">
      <div className="login-box">
        <h1>Welcome Back</h1>
        <input type="text" placeholder="Aadhaar Number" />
        <input type="text" placeholder="OTP" />
        <input type="password" placeholder="Password" />
        <button className="login-btn">LOGIN</button>
        <p>Don't have an account? <Link to="/register">Register</Link></p>
      </div>
    </div>
  );
}

export default LoginPage;