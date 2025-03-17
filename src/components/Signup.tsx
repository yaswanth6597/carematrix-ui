import React from "react";
import { useNavigate } from "react-router-dom";
import { Stethoscope } from 'lucide-react';
import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <div className="signup-container">
      <div className="signup-header">
      <div className="flex justify-center">
          <Stethoscope className="stethscope"/>
        </div>
        <h2>Create a new account</h2>
      </div>
      <form>
        <div className="grid-container">
          <div className="input-group">
            <label>Full Name *</label>
            <input type="text" required />
          </div>
          <div className="input-group">
            <label>Email *</label>
            <input type="email" required />
          </div>
          <div className="input-group">
            <label>Password *</label>
            <input type="password" required />
          </div>
          <div className="input-group">
            <label>Role *</label>
            <select>
              <option>Patient</option>
              <option>Doctor</option>
            </select>
          </div>
          <div className="input-group">
            <label>Age</label>
            <input type="number" />
          </div>
          <div className="input-group">
            <label>Gender</label>
            <select>
              <option>Select Gender</option>
              <option>Male</option>
              <option>Female</option>
            </select>
          </div>
          <div className="input-group">
            <label>Date of Birth</label>
            <input type="date" />
          </div>
          <div className="input-group">
            <label>Contact</label>
            <input type="text" />
          </div>
          <div className="input-group full-width">
            <label>Address</label>
            <input type="text" />
          </div>
          <div className="input-group full-width">
            <label>Blood Group</label>
            <select>
              <option>Select Blood Group</option>
              <option>A+</option>
              <option>A-</option>
              <option>B+</option>
              <option>A-</option>
              <option>O+</option>
              <option>A-</option>
              <option>AB+</option>
              <option>AB-</option>
            </select>
          </div>
        </div>
        <button type="submit" className="signup-button">Sign Up</button>
      </form>
      <div className="signin-text">
        <p><span className="link" onClick={() => navigate("/")}>Already have an account? Sign in</span></p>
      </div>
    </div>
  );
};

export default Signup;
