import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stethoscope } from 'lucide-react';
import "./Login.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Hardcoded credentials for patient login
    if (email === "doctor@example.com" && password === "doctor123") {
      navigate("/doctor-dashboard"); 
    }// Redirect doctor
    else if (email === "patient@example.com" && password === "patient123") {
      navigate("/patient-dashboard");
    } else {
      alert("Invalid username or password");
    }
  };

  return (
    <div>
    <div className="login-container">
      <div className="login-header">
        <div className="flex justify-center">
          <Stethoscope className="stethscope"/>
        </div>
        <h2>Sign in to your account</h2>
      </div>
    </div>
    <div className="login-form">
      <form  onSubmit={handleSubmit}>
        <div className="input-group">
          <label>Email</label>
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        <div className="input-group">
          <label>Password</label>
          <input 
            type="password" 
            value={password} 
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="login-button">Sign In</button>
      </form>
      <div className="signup-text">
        <p><span className="signup-link"
          onClick={() => navigate("/signup")}
          style={{ color: "blue", cursor: "pointer" }} >Don't have an account? Sign up</span></p>
      </div>
    </div>  
      </div>
  );
};

export default Login;