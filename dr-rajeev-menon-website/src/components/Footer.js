import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Services</h3>
          <ul>
            <li><a href="#consultations">General Consultations</a></li>
            <li><a href="#checkups">Health Check-ups</a></li>
            <li><a href="#diagnostics">Diagnostic Services</a></li>
            <li><a href="#preventive">Preventive Care</a></li>
            <li><a href="#chronic">Chronic Disease Management</a></li>
            <li><a href="#wellness">Health & Wellness Programs</a></li>
          </ul>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p>📍 123 Medical Center Drive<br />Healthcare City, HC 12345</p>
          <p>📞 +91-1234567890</p>
          <p>✉️ dr.rajeevmenon@email.com</p>
          
          <div className="social-links">
            <a href="https://facebook.com/drrajeevmenon" target="_blank" rel="noopener noreferrer" aria-label="Facebook">📘</a>
            <a href="https://twitter.com/drrajeevmenon" target="_blank" rel="noopener noreferrer" aria-label="Twitter">🐦</a>
            <a href="https://linkedin.com/in/drrajeevmenon" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">💼</a>
            <a href="https://instagram.com/drrajeevmenon" target="_blank" rel="noopener noreferrer" aria-label="Instagram">📷</a>
          </div>
        </div>
        
        <div className="footer-section">
          <h3>Office Hours</h3>
          <p><strong>Monday - Friday:</strong><br />9:00 AM - 6:00 PM</p>
          <p><strong>Saturday:</strong><br />9:00 AM - 2:00 PM</p>
          <p><strong>Sunday:</strong><br />Emergency Only</p>
          <p><strong>Emergency:</strong><br />24/7 Available</p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Dr. Rajeev Menon. All rights reserved. | Medical Practice Website</p>
      </div>
    </footer>
  );
};

export default Footer;