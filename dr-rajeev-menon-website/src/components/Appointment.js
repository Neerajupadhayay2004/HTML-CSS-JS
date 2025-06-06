import React, { useState } from 'react';

const Appointment = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your appointment request. We will contact you shortly to confirm your booking.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });
  };

  return (
    <section className="appointment" id="appointment">
      <div className="container">
        <div className="section-title fade-in-up">
          <h2>Book Your <span className="highlight">Appointment</span></h2>
          <p>Schedule a consultation with Dr. Rajeev Menon to discuss your pain concerns and treatment options</p>
        </div>
        <div className="appointment-content">
          <div className="appointment-form fade-in-up delay-1">
            <h3>Request Consultation</h3>
            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  value={formData.email}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="phone">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  name="phone" 
                  value={formData.phone}
                  onChange={handleChange}
                  required 
                />
              </div>
              <div className="form-group">
                <label htmlFor="service">Service Required</label>
                <select 
                  id="service" 
                  name="service" 
                  value={formData.service}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a service</option>
                  <option value="Back Pain">Back Pain Treatment</option>
                  <option value="Slipped Disc">Slipped Disc Treatment</option>
                  <option value="Joint Pain">Joint Pain Treatment</option>
                  <option value="Knee Pain">Knee Pain Treatment</option>
                  <option value="Foot Pain">Foot Pain Treatment</option>
                  <option value="Neck Pain">Neck Pain Treatment</option>
                  <option value="Heel Pain">Heel Pain Treatment</option>
                  <option value="Sports Injury">Sports Injury Treatment</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div className="form-group">
                <label htmlFor="message">Brief Description of Your Condition</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary" style={{ width: '100%' }}>Request Appointment</button>
            </form>
          </div>
          <div className="fade-in-up delay-2">
            <div className="map-section">
              <h3>Our Location</h3>
              <div className="map-container">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.566347312964!2d77.3273143150823!3d28.61396998242489!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5a4317333a5%3A0x1e3a5a5b5e5a5a5a!2sNoida%20Sector%2018%2C%20Noida%2C%20Uttar%20Pradesh%20201301!5e0!3m2!1sen!2sin!4v1620000000000!5m2!1sen!2sin" 
                  allowFullScreen="" 
                  loading="lazy"
                  title="Clinic Location"
                ></iframe>
              </div>
              <div className="contact-info">
                <p><strong>Address:</strong> 123 Medical Plaza, Sector 18, Noida, Uttar Pradesh 201301</p>
                <p><strong>Phone:</strong> +91 98765 43210</p>
                <p><strong>Email:</strong> info@drrajeevmenon.com</p>
                <p><strong>Hours:</strong> Mon-Sat: 9:00 AM - 6:00 PM</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Appointment;