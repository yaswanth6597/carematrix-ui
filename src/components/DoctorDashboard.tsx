import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./DoctorDashboard.css";
const DoctorDashboard = () => {
  const [showProfile, setShowProfile] = useState(false);
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
      <div className="top-bar">
        <h2>Dr. John Smith</h2>
        <div className="icons">
          {/* Profile Icon */}
          <span className="icon" onClick={() => setShowProfile(!showProfile)}>👤</span>

          {/* Logout Icon */}
          <span className="icon" onClick={() => navigate("/")}>🔄</span>
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
            🔍 Search Patient
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
            <span className="add-icon">+</span>
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
                <span className="add-icon">+</span>
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
              <span className="add-icon">+</span>
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
                <span className="add-icon">+</span>
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
