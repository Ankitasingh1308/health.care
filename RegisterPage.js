import React from 'react';
import './RegisterPage.css';
import { Link } from 'react-router-dom';

function RegisterPage() {
  return (
    <div className="register-container">
      <div className="register-box">
        <div className="left-section">
          <h2>Register Your Account</h2>

          <label>As Patient</label>
          <input type="text" placeholder="Aadhaar Number" />
          <a href="#" className="otp-link">Generate OTP</a>
          <input type="text" placeholder="OTP" />
          <a href="#" className="otp-link">Resend OTP</a>
          <input type="password" placeholder="Password" />
          <button className="register-btn">Register</button>

          <hr />

          <label>As Doctor</label>
          <input type="text" placeholder="Aadhaar Number" />
          <a href="#" className="otp-link">Generate OTP</a>
          <input type="text" placeholder="OTP" />
          <a href="#" className="otp-link">Resend OTP</a>
          <input type="password" placeholder="Password" />
          <button className="register-btn">Register</button>
        </div>

        <div className="right-section">
          <h2>Already have an account?</h2>
          <Link to="/" className="login-link">LOGIN</Link>
        </div>
      </div>
    </div>
  );
}

export default RegisterPage;
