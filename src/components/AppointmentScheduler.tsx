import React, { useState } from "react";
import "./AppointmentScheduler.css";

const AppointmentScheduler = ({ onClose }: { onClose: () => void }) => {
  const [selectedDoctor, setSelectedDoctor] = useState("Dr. John Smith");
  const [selectedDate, setSelectedDate] = useState("Thursday, March 27th, 2025");
  const [selectedTime, setSelectedTime] = useState("");
  const [reason, setReason] = useState("");

  const timeSlots = [
    { time: "9:00 AM", disabled: true },
    { time: "10:00 AM", disabled: false },
    { time: "11:00 AM", disabled: false },
    { time: "12:00 PM", disabled: false },
    { time: "1:00 PM", disabled: true },
    { time: "2:00 PM", disabled: false },
    { time: "3:00 PM", disabled: true },
    { time: "4:00 PM", disabled: true }
  ];

  const handleSchedule = () => {
    console.log({
      doctor: selectedDoctor,
      date: selectedDate,
      time: selectedTime,
      reason
    });
    onClose();
  };

  return (
    <div className="modal-overlay">
      <div className="appointment-modal">
        <div className="modal-header">
          <h2>Schedule Appointment</h2>
          <span className="close-btn" onClick={onClose}>×</span>
        </div>

        <div className="modal-body">
          <div className="left-section">
            <label className="section-title">Select Doctor</label>
            <div className="doctor-card">
              <span className="doctor-icon">👤</span>
              <div>
                <div className="doctor-name">Dr. John Smith</div>
                <div className="doctor-specialty">Cardiology</div>
              </div>
            </div>

            <label className="section-title">Select Time</label>
            <div className="time-grid">
              {timeSlots.map(({ time, disabled }) => (
                <button
                  key={time}
                  disabled={disabled}
                  className={`time-slot ${selectedTime === time ? "selected" : ""}`}
                  onClick={() => setSelectedTime(time)}
                >
                  🕒 {time}
                </button>
              ))}
            </div>
          </div>

          <div className="right-section">
            <label className="section-title">Select Date</label>
            <div className="date-grid">
              {["Thu 27", "Fri 28", "Sat 29", "Sun 30", "Mon 31", "Tue 1", "Wed 2"].map((d, i) => (
                <div
                  key={i}
                  className={`date-box ${i === 0 ? "active" : ""}`}
                  onClick={() => setSelectedDate(`Thursday, March 27th, 2025`)}
                >
                  {d}
                </div>
              ))}
            </div>

            <label className="section-title">Reason for Visit</label>
            <textarea
              placeholder="Please describe your reason for the appointment..."
              value={reason}
              onChange={(e) => setReason(e.target.value)}
            />

            <div className="appointment-summary">
              <label className="section-title">Appointment Summary</label>
              <div className="summary-card">
                📅 {selectedDate}
              </div>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button className="cancel-btn" onClick={onClose}>Cancel</button>
          <button
            className="schedule-btn"
            disabled={!selectedTime || !reason}
            onClick={handleSchedule}
          >
            Schedule Appointment
          </button>
        </div>
      </div>
    </div>
  );
};

export default AppointmentScheduler;
