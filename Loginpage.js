import React from 'react';
import './LoginPage.css'; // CSS file import

function LoginPage() {
  return (
    <div className="login-container">
      {/* Left Section - Login */}
      <div className="login-box">
        <h1 className="brand">Healthease</h1>
        <h2>Login To Your Account</h2>

        {/* Patient Login */}
        <div className="login-section">
          <p className="label">As Patient</p>
          <input type="text" placeholder="Aadhaar Number" />
          <div className="otp-row">
            <input type="text" placeholder="OTP" />
            <button className="link-btn">Generate OTP</button>
          </div>
          <button className="link-btn resend">Resend OTP</button>
          <button className="login-btn">LOGIN</button>
        </div>

        <hr />

        {/* Doctor Login */}
        <div className="login-section">
          <p className="label">As Doctor</p>
          <input type="text" placeholder="Aadhaar Number" />
          <div className="otp-row">
            <input type="text" placeholder="OTP" />
            <button className="link-btn">Generate OTP</button>
          </div>
          <button className="link-btn resend">Resend OTP</button>
          <button className="login-btn">LOGIN</button>
        </div>
      </div>

      {/* Right Section - Register */}
      <div className="register-box">
        <h2>New Here ?</h2>
        <p>Register and discover a great amount of new opportunities</p>
        <button className="register-btn">REGISTER</button>
      </div>
    </div>
  );
}

export default LoginPage;
