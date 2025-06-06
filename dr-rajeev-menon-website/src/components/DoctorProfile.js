import React from 'react';
import doctorImage from '../assets/images/doctor.jpg';

const DoctorProfile = () => {
  return (
    <section className="doctor-profile" id="about">
      <div className="container">
        <div className="profile-content">
          <img src={doctorImage} alt="Dr. Rajeev Menon" className="profile-image fade-in" />
          <div className="profile-info fade-in delay-1">
            <h2>Dr. Rajeev Menon</h2>
            <p className="specialty">Orthopedic Surgery & Joint Pain Specialist</p>
            <div className="profile-details">
              <div className="detail-item">Noida, Uttar Pradesh</div>
              <div className="detail-item">13 years of experience</div>
              <div className="qualification-item">MBBS, MS (Orthopedics)</div>
              <div className="qualification-item">Fellowship in Joint Replacement</div>
              <div className="qualification-item">Member of Indian Orthopedic Association</div>
            </div>
            <p>Dr. Rajeev Menon is a dedicated orthopedic surgeon specializing in joint pain management and treatment. With over 13 years of experience, he helps patients finally get answers and relief from chronic pain conditions.</p>
            <div className="profile-buttons">
              <a href="#appointment" className="btn btn-primary">Get In Touch</a>
              <a href="#services" className="btn btn-outline">View Services</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DoctorProfile;