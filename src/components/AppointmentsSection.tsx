import React from 'react';
import './AppointmentsSection.css';

const AppointmentsSection = () => {
  const upcomingAppointments: any[] = []; // Empty array for testing "No upcoming appointments"

  const pastAppointments = [
    {
      name: 'Jane Doe',
      date: '2024-03-21',
      time: '14:30',
      type: 'Telemedicine',
      description: 'Follow-up consultation',
    },
    {
      name: 'Jane Doe',
      date: '2024-03-20',
      time: '09:00',
      type: 'In-person',
      description: 'Annual checkup',
    },
  ];

  return (
    <div className="appointments-section">
      <div className="appointments-container">
        <div className="appointment-box">
          <h3 className="section-title">Upcoming Appointments</h3>
          {upcomingAppointments.length === 0 ? (
            <p className="no-appointments">No upcoming appointments</p>
          ) : (
            upcomingAppointments.map((appt, index) => (
              <div className="appointment-card" key={index}>
                <p className="patient-name">{appt.name}</p>
                <p><span className="icon">📅</span> {appt.date}</p>
                <p><span className="icon">⏰</span> {appt.time}</p>
                <p>{appt.description}</p>
                <span className={`badge ${appt.type.toLowerCase()}`}>{appt.type}</span>
              </div>
            ))
          )}
        </div>

        <div className="appointment-box">
          <h3 className="section-title">Past Appointments</h3>
          {pastAppointments.map((appt, index) => (
            <div className="appointment-card" key={index}>
              <p className="patient-name">{appt.name}</p>
              <p><span className="icon">📅</span> {appt.date}</p>
              <p><span className="icon">⏰</span> {appt.time}</p>
              <p>{appt.description}</p>
              <span className={`badge ${appt.type.toLowerCase()}`}>{appt.type}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AppointmentsSection;
