// TelemedicineModal.tsx
import React, { useState } from 'react';
import './TelemedicineModal.css';

const TelemedicineModal = ({ onClose }: { onClose: () => void }) => {
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [reason, setReason] = useState('');

  const timeSlots = [
    "09:00", "09:30", "10:00",
    "10:30", "11:00", "11:30",
    "14:00", "14:30", "15:00",
    "15:30", "16:00", "16:30",
  ];

  const handleStart = () => {
    alert(`Consultation scheduled on ${selectedDate} at ${selectedTime} for: ${reason}`);
  };

  return (
    <div className="modal-overlay">
      <div className="telemedicine-modal">
        <div className="modal-header">
          <div className="modal-title">
            <span className="icon">📹</span>
            <h2>Telemedicine Consultation</h2>
          </div>
          <button className="close-btn" onClick={onClose}>×</button>
        </div>

        <div className="modal-body">
          <div className="form-grid">
            <div className="left-section">
              <label>Select Doctor</label>
              <div className="doctor-card">
                <div className="doctor-icon">👤</div>
                <div>
                  <p className="doctor-name">Dr. John Smith</p>
                  <p className="specialization">Cardiology</p>
                </div>
              </div>
            </div>

            <div className="right-section">
              <label>Select Date</label>
              <input
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
              />

              <label>Select Time</label>
              <div className="time-grid">
                {timeSlots.map((slot, index) => (
                  <button
                    key={index}
                    className={`time-btn ${selectedTime === slot ? 'selected' : ''}`}
                    onClick={() => setSelectedTime(slot)}
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="textarea-container">
            <label>Reason for Consultation</label>
            <textarea
              placeholder="Please describe your symptoms or reason for the consultation..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />
          </div>
        </div>

        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button className="start-btn" onClick={handleStart}>Start Consultation</button>
        </div>
      </div>
    </div>
  );
};

export default TelemedicineModal;
