import React, { useState } from 'react';

const Resources = () => {
  const [activeTab, setActiveTab] = useState('testimonials');

  const testimonials = [
    {
      text: "Dr. Rajeev Menon provided exceptional care during my treatment. His thorough approach and genuine concern for my health made all the difference in my recovery.",
      author: "Sarah Johnson",
      role: "Patient since 2020",
      avatar: "/src/assets/images/patient-avatar.jpg"
    },
    {
      text: "I've been seeing Dr. Menon for over three years now. His expertise in preventive medicine has helped me maintain excellent health through regular check-ups and personalized advice.",
      author: "Michael Chen",
      role: "Patient since 2019",
      avatar: "/src/assets/images/patient-avatar.jpg"
    },
    {
      text: "The comprehensive health assessment I received was incredibly detailed. Dr. Menon took the time to explain everything and provided a clear path forward for my health goals.",
      author: "Emily Rodriguez",
      role: "Patient since 2021",
      avatar: "/src/assets/images/patient-avatar.jpg"
    }
  ];

  const blogPosts = [
    {
      title: "The Importance of Regular Health Check-ups",
      excerpt: "Learn why routine medical examinations are crucial for maintaining optimal health and preventing serious conditions before they develop.",
      date: "March 15, 2024",
      readTime: "5 min read",
      image: "/src/assets/images/blog1.jpg",
      link: "/blog/importance-of-regular-checkups"
    },
    {
      title: "Managing Stress for Better Health",
      excerpt: "Discover effective strategies for managing stress and its impact on your physical and mental well-being.",
      date: "March 10, 2024",
      readTime: "4 min read",
      image: "/src/assets/images/blog1.jpg",
      link: "/blog/managing-stress-better-health"
    },
    {
      title: "Nutrition Tips for a Healthy Lifestyle",
      excerpt: "Essential nutrition guidelines and practical tips to help you maintain a balanced diet and improve your overall health.",
      date: "March 5, 2024",
      readTime: "6 min read",
      image: "/src/assets/images/blog1.jpg",
      link: "/blog/nutrition-tips-healthy-lifestyle"
    }
  ];

  return (
    <section className="resources" id="resources">
      <div className="container">
        <h2>Patient Resources</h2>
        
        <div className="resources-tabs">
          <div className="tab-buttons">
            <button 
              className={`tab-button ${activeTab === 'testimonials' ? 'active' : ''}`}
              onClick={() => setActiveTab('testimonials')}
            >
              Patient Testimonials
            </button>
            <button 
              className={`tab-button ${activeTab === 'blog' ? 'active' : ''}`}
              onClick={() => setActiveTab('blog')}
            >
              Health Blog
            </button>
            <button 
              className={`tab-button ${activeTab === 'resources' ? 'active' : ''}`}
              onClick={() => setActiveTab('resources')}
            >
              Health Resources
            </button>
          </div>
          
          <div className="tab-content">
            {activeTab === 'testimonials' && (
              <div className="testimonials-grid">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="testimonial">
                    <p className="testimonial-text">{testimonial.text}</p>
                    <div className="testimonial-author">
                      <img 
                        src={testimonial.avatar} 
                        alt={`${testimonial.author} testimonial`}
                        className="author-avatar"
                      />
                      <div className="author-info">
                        <h4>{testimonial.author}</h4>
                        <span>{testimonial.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}
            
            {activeTab === 'blog' && (
              <div className="blog-grid">
                {blogPosts.map((post, index) => (
                  <article key={index} className="blog-post">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="blog-image"
                    />
                    <div className="blog-content">
                      <h3>{post.title}</h3>
                      <div className="blog-meta">
                        {post.date} • {post.readTime}
                      </div>
                      <p className="blog-excerpt">{post.excerpt}</p>
                      <a href={post.link} className="read-more">Read More →</a>
                    </div>
                  </article>
                ))}
              </div>
            )}
            
            {activeTab === 'resources' && (
              <div className="health-resources">
                <div className="resources-grid">
                  <div className="resource-card">
                    <h3>🏥 Emergency Contacts</h3>
                    <p>Important phone numbers and emergency procedures for urgent medical situations.</p>
                    <ul>
                      <li>Emergency: 911</li>
                      <li>Poison Control: 1-800-222-1222</li>
                      <li>Our After-Hours Line: +91-1234567890</li>
                    </ul>
                  </div>
                  
                  <div className="resource-card">
                    <h3>📋 Patient Forms</h3>
                    <p>Download and complete these forms before your appointment to save time.</p>
                    <ul>
                      <li><a href="/forms/new-patient-form.pdf" target="_blank" rel="noopener noreferrer">New Patient Registration</a></li>
                      <li><a href="/forms/medical-history.pdf" target="_blank" rel="noopener noreferrer">Medical History Form</a></li>
                      <li><a href="/forms/insurance-info.pdf" target="_blank" rel="noopener noreferrer">Insurance Information</a></li>
                    </ul>
                  </div>
                  
                  <div className="resource-card">
                    <h3>💊 Prescription Refills</h3>
                    <p>Manage your prescriptions and request refills online or by phone.</p>
                    <ul>
                      <li><a href="/prescriptions/refill-request" target="_blank" rel="noopener noreferrer">Online Refill Request</a></li>
                      <li>Call: +91-1234567890</li>
                      <li>Allow 24-48 hours for processing</li>
                    </ul>
                  </div>
                  
                  <div className="resource-card">
                    <h3>📱 Health Apps</h3>
                    <p>Recommended mobile apps to help you track and manage your health.</p>
                    <ul>
                      <li><a href="https://www.myfitnesspal.com" target="_blank" rel="noopener noreferrer">MyFitnessPal - Nutrition Tracking</a></li>
                      <li><a href="https://www.headspace.com" target="_blank" rel="noopener noreferrer">Headspace - Meditation & Mindfulness</a></li>
                      <li><a href="https://www.fitbit.com" target="_blank" rel="noopener noreferrer">Fitbit - Activity Tracking</a></li>
                    </ul>
                  </div>
                  
                  <div className="resource-card">
                    <h3>📚 Health Education</h3>
                    <p>Reliable sources for health information and medical education.</p>
                    <ul>
                      <li><a href="https://www.mayoclinic.org" target="_blank" rel="noopener noreferrer">Mayo Clinic Health Information</a></li>
                      <li><a href="https://www.webmd.com" target="_blank" rel="noopener noreferrer">WebMD Medical Reference</a></li>
                      <li><a href="https://www.healthline.com" target="_blank" rel="noopener noreferrer">Healthline Medical News</a></li>
                    </ul>
                  </div>
                  
                  <div className="resource-card">
                    <h3>🩺 Appointment Preparation</h3>
                    <p>Tips to help you make the most of your medical appointments.</p>
                    <ul>
                      <li>Bring a list of current medications</li>
                      <li>Write down questions in advance</li>
                      <li>Arrive 15 minutes early</li>
                      <li>Bring insurance card and ID</li>
                    </ul>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;