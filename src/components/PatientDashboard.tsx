import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PatientDashboard.css";

const PatientDashboard = () => {
  const [showProfile, setShowProfile] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="dashboard-container">
      <div className="top-bar">
        <h1>Welcome, Jane Doe</h1>
        <div className="icons">
          <span className="icon" onClick={() => setShowProfile(!showProfile)}>👤</span>
          <span className="icon" onClick={() => navigate("/")}>🔄</span>
        </div>
      </div>
      {showProfile && (
        <div className="profile-modal">
          <h2>Profile Details</h2>
          <p><strong>Name:</strong> Jane Doe</p>
          <p><strong>Email:</strong> patient@example.com</p>
          <button onClick={() => setShowProfile(false)}>Close</button>
        </div>
      )}
      <div className="grid-layout">
        <div className="card wide-card">
          <h2>Allergies</h2>
          <div className="allergy-list">
            <p className="allergy-item">Penicillin</p>
            <p className="allergy-item">Peanuts</p>
            <p className="allergy-item">Latex</p>
          </div>
        </div>
        <div className="card wide-card">
          <h2>Current Conditions</h2>
          <div className="condition-list">
            <p className="condition-item">Asthma<br/> Diagnosed: 2015-05-10 <br/> Status: Controlled</p>
            <p className="condition-item">Seasonal Allergies<br/> Diagnosed: 2018-03-22 <br/> Status: Ongoing</p>
          </div>
        </div>
        <div className="card wide-card">
          <h2>Insurance Information</h2>
          <div className="insurance-info">
            <p>HealthGuard Insurance</p>
            <p>Policy Number: HG123456789</p>
            <p>Expiry Date: 2024-12-31</p>
            <p>Coverage: Comprehensive</p>
          </div>
        </div>
        <div className="card wide-card">
          <h2>Current Prescriptions</h2>
          <div className="prescription-list">
            <p className="prescription-item">Amoxicillin<br/> Dosage: 500mg <br/> Frequency: Twice daily <br/> Prescribed: 2023-12-01 <br/> Doctor: Dr. Sarah Johnson</p>
            <p className="prescription-item">Loratadine<br/> Dosage: 10mg <br/> Frequency: Once daily</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
