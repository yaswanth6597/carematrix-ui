import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./PatientDashboard.css";
import { users } from "../data/user"; 
import AppointmentScheduler from "./AppointmentScheduler";
import TelemedicineModal from "./TelemedicineModal";
import { ProfileModal } from "./ProfileModal";
import { UserCircle2, LogOut, Calendar, Video } from 'lucide-react';

const patient = users.find((u) => u.role === "patient");

const PatientDashboard = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showAppointmentScheduler, setShowAppointmentScheduler] = useState(false);
  const [showTelemedicineModal, setShowTelemedicineModal] = useState(false);
  const navigate = useNavigate();

  if (!patient) {
    return <div className="text-center text-red-600">Error: Patient not found</div>;
  }

  return (
    <div className="dashboard-container">
      
      {/* ✅ Top Navigation Bar */}
      <div className="top-bar">
        <h1>Welcome, {patient.name}</h1>
        <button onClick={() => setShowTelemedicineModal(true)} className="telemedicine-btn">
          <Video />Telemedicine Consultation
        </button>
        {showTelemedicineModal && <TelemedicineModal onClose={() => setShowTelemedicineModal(false)} />}
        <button onClick={() => setShowAppointmentScheduler(true)} className="appointment-btn">
          <Calendar />Schedule Appointment
        </button>
        {showAppointmentScheduler && <AppointmentScheduler onClose={() => setShowAppointmentScheduler(false)} />}
        <div className="icons">
          <UserCircle2 className="icon" onClick={() => setShowProfile(!showProfile)} />
          {/* ✅ Profile Modal */}
          {showProfile && <ProfileModal user={patient} onClose={() => setShowProfile(false)} />}
          <LogOut className="icon" onClick={() => navigate("/")}/>
        </div>
      </div>


      {/* ✅ Patient Medical Information */}
      <div className="patient-grid-layout">
        
        {/* Allergies */}
        <div className="card wide-card">
          <h2>Allergies</h2>
          <div className="allergy-list">
            {patient.allergies?.length ? (
              patient.allergies.map((allergy, index) => (
                <p key={index} className="allergy-item">{allergy}</p>
              ))
            ) : (
              <p className="text-gray-600">No known allergies</p>
            )}
          </div>
        </div>

        {/* Current Conditions */}
        <div className="card wide-card">
          <h2>Current Conditions</h2>
          <div className="condition-list">
            {patient.diseases?.length ? (
              patient.diseases.map((disease, index) => (
                <p key={index} className="condition-item">
                  <strong>{disease.name}</strong><br/>
                  Diagnosed: {disease.diagnosedDate} <br/>
                  Status: {disease.status}
                </p>
              ))
            ) : (
              <p className="text-gray-600">No existing conditions</p>
            )}
          </div>
        </div>

        {/* Insurance Information */}
        <div className="card wide-card">
          <h2>Insurance Information</h2>
          <div className="insurance-info">
            {patient.insurance ? (
              <>
                <p>{patient.insurance.provider}</p>
                <p>Policy Number: {patient.insurance.policyNumber}</p>
                <p>Expiry Date: {patient.insurance.expiryDate}</p>
                <p>Coverage: {patient.insurance.coverage}</p>
              </>
            ) : (
              <p className="text-gray-600">No insurance details available</p>
            )}
          </div>
        </div>

        {/* Current Prescriptions */}
        <div className="card wide-card">
          <h2>Current Prescriptions</h2>
          <div className="prescription-list">
            {patient.prescriptions?.length ? (
              patient.prescriptions.map((prescription, index) => (
                <p key={index} className="prescription-item">
                  <strong>{prescription.medication}</strong><br/>
                  Dosage: {prescription.dosage} <br/>
                  Frequency: {prescription.frequency} <br/>
                  Prescribed: {prescription.prescribedDate} <br/>
                  Doctor: {prescription.doctor}
                </p>
              ))
            ) : (
              <p className="text-gray-600">No active prescriptions</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientDashboard;
