import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorDashboard.css";
import { users } from "../data/user"; 
import AppointmentScheduler from "./AppointmentScheduler";
import TelemedicineModal from "./TelemedicineModal";
import { ProfileModal } from "./ProfileModal";
import { Search, UserCircle2, LogOut, Plus, Video, Calendar } from 'lucide-react';

const doctor = users.find((u) => u.role === "doctor");
const DoctorDashboard = () => {
  const [showProfile, setShowProfile] = useState(false);
  const [showAppointmentScheduler, setShowAppointmentScheduler] = useState(false);
  const [showTelemedicineModal, setShowTelemedicineModal] = useState(false);
  const navigate = useNavigate();

  const [searchResult, setSearchResult] = useState<
    | {
        name: string;
        id: number;
        age: number;
        gender: string;
        bloodGroup: string;
        conditions: { name: string; date: string; status: string }[];
        prescriptions: { name: string; dosage: string; frequency: string; date: string }[];
        allergies: string[];
        insurance: { provider: string; policyNumber: string; expiryDate: string; coverage: string };
        surgeries: { name: string; date: string; hospital: string }[];
      }
    | null
  >(null);

  const [searchId, setSearchId] = useState("");

  const handleSearch = () => {
    if (searchId === "2") {
      setSearchResult({
        name: "Jane Doe",
        id: 2,
        age: 28,
        gender: "female",
        bloodGroup: "O+",
        conditions: [
          { name: "Asthma", date: "2015-05-10", status: "Controlled" },
          { name: "Seasonal Allergies", date: "2018-03-22", status: "Ongoing" },
        ],
        prescriptions: [
          { name: "Amoxicillin", dosage: "500mg", frequency: "Twice daily", date: "2023-12-01" },
          { name: "Loratadine", dosage: "10mg", frequency: "Once daily", date: "2023-11-15" },
        ],
        allergies: ["Penicillin", "Peanuts", "Latex"],
        insurance: {
          provider: "HealthGuard Insurance",
          policyNumber: "HG123456789",
          expiryDate: "2024-12-31",
          coverage: "Comprehensive",
        },
        surgeries: [
          { name: "Appendectomy", date: "2020-03-15", hospital: "City General Hospital" },
          { name: "Tonsillectomy", date: "2018-07-22", hospital: "Medical Center East" },
        ],
      });
    } else {
      setSearchResult(null);
    }
  };

  return (
    <div className="dashboard-container">
      <div className="doctor-top-bar">
        <h2>Dr. John Smith</h2>
        <button onClick={() => setShowTelemedicineModal(true)} className="telemedicine-btn">
          <Video />Telemedicine Consultation
        </button>
        {showTelemedicineModal && <TelemedicineModal onClose={() => setShowTelemedicineModal(false)} />}
        <button onClick={() => setShowAppointmentScheduler(true)} className="appointment-btn">
          <Calendar />Schedule Appointment
        </button>
        {showAppointmentScheduler && <AppointmentScheduler onClose={() => setShowAppointmentScheduler(false)} />}
        <div className="icons"></div>
        <div className="icons">
        <UserCircle2 className="icon" onClick={() => setShowProfile(!showProfile)} />
        {/* ✅ Profile Modal */}
        {showProfile && doctor && <ProfileModal user={doctor} onClose={() => setShowProfile(false)} />}
        <LogOut className="icon" onClick={() => navigate("/")}/>
        </div>
      </div>

      <div className="search-container">
        <h3>Patient Search</h3>
        <div className="search-box">
          <input type="text" placeholder="Enter patient name" />
          <input type="text" placeholder="mm/dd/yyyy" />
          <input
            type="text"
            placeholder="Enter patient ID"
            value={searchId}
            onChange={(e) => setSearchId(e.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>
            <Search className="search-icon"/>Search Patient
          </button>
        </div>
      </div>

      {searchResult && (
        <div className="patient-records">
           <div className="patient-record-header">
      <h3>Patient Records</h3>
      <div className="back-to-search">
        <a href="#" onClick={() => setSearchResult(null)}>Back to Search Results</a>
      </div>
    </div>
          <div className="grid-layout">
            <div className="card">
              <h4>Patient Information</h4>
              <p>Name: {searchResult.name}</p>
              <p>ID: {searchResult.id}</p>
              <p>Age: {searchResult.age}</p>
              <p>Gender: {searchResult.gender}</p>
              <p>Blood Group: {searchResult.bloodGroup}</p>
            </div>

            <div className="card">
            <div className="card-header">
            <h4>Allergies</h4>
            <Plus className="add-icon"/>
            </div>
              {searchResult.allergies.map((allergy, index) => (
                <p key={index} className="allergy-item">
                  {allergy}
                </p>
              ))}
            </div>

            <div className="card">
            <div className="card-header">
                <h4>Current Conditions</h4>
                <Plus className="add-icon"/>
            </div>
              {searchResult.conditions.map((cond, index) => (
                <p key={index} className="condition-item">
                  <strong>{cond.name}</strong>
                  <br />
                  Diagnosed: {cond.date} <br />
                  Status: {cond.status}
                </p>
              ))}
            </div>

            <div className="card">
              <div className="card-header">
              <h4>Current Prescriptions</h4>
              <Plus className="add-icon"/>
              </div>
              {searchResult.prescriptions.map((pres, index) => (
                <p key={index} className="prescription-item">
                  <strong>{pres.name}</strong>
                  <br />
                  Dosage: {pres.dosage}
                  <br />
                  Frequency: {pres.frequency}
                  <br />
                  Prescribed: {pres.date}
                </p>
              ))}
            </div>

            <div className="card">
              <h4>Insurance Information</h4>
              <p className="insurance-info">
                <strong>{searchResult.insurance.provider}</strong>
                <br />
                Policy Number: {searchResult.insurance.policyNumber}
                <br />
                Expiry Date: {searchResult.insurance.expiryDate}
                <br />
                Coverage: {searchResult.insurance.coverage}
              </p>
            </div>

            <div className="card">
            <div className="card-header">
                <h4>Surgical History</h4>
                <Plus className="add-icon"/>
                </div>
              {searchResult.surgeries.map((surgery, index) => (
                <p key={index} className="surgery-item">
                  <strong>{surgery.name}</strong>
                  <br />
                  Date: {surgery.date}
                  <br />
                  Hospital: {surgery.hospital}
                </p>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default DoctorDashboard;
