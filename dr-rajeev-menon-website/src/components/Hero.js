import React from 'react';
import doctorImage from '../assets/images/doctor.jpg';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="container">
        <div className="hero-content">
          <div className="hero-text fade-in-up">
            <h1>Stop <span className="highlight">Guessing.</span><br />Start <span className="highlight">Healing.</span></h1>
            <p>Specialized orthopedic care for joint pain, back pain, and sports injuries. Get personalized treatment from an experienced specialist with over 13 years of clinical experience.</p>
            <div className="hero-buttons">
              <a href="#appointment" className="btn btn-primary">Book Your Consultation</a>
              <a href="#services" className="btn btn-outline">Our Services</a>
            </div>
          </div>
          <div className="hero-image fade-in-up delay-1">
            <div className="doctor-card">
              <img src={doctorImage} alt="Dr. Rajeev Menon" className="doctor-img" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;