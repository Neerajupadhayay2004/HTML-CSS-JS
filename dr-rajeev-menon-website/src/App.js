import React, { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import DoctorProfile from './components/DoctorProfile';
import Services from './components/Services';
import Resources from './components/Resources';
import Appointment from './components/Appointment';
import Footer from './components/Footer';
import './assets/styles/main.css';

const App = () => {
  useEffect(() => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
        });
      });
    });

    // Back to Top Button
    const backToTop = document.getElementById('backToTop');
    window.addEventListener('scroll', function() {
      if (window.pageYOffset > 300) {
        backToTop.classList.add('active');
      } else {
        backToTop.classList.remove('active');
      }
    });

    backToTop.addEventListener('click', function(e) {
      e.preventDefault();
      window.scrollTo({top: 0, behavior: 'smooth'});
    });

    // Animation on scroll
    function animateOnScroll() {
      const elements = document.querySelectorAll('.fade-in-up, .fade-in');
      
      elements.forEach(element => {
        const elementPosition = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.2;
        
        if(elementPosition < screenPosition) {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }
      });
    }

    window.addEventListener('scroll', animateOnScroll);
    window.addEventListener('load', animateOnScroll);

    return () => {
      window.removeEventListener('scroll', animateOnScroll);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <Hero />
      <DoctorProfile />
      <Services />
      <Resources />
      <Appointment />
      <Footer />
      <div className="back-to-top" id="backToTop">
        <i className="fas fa-arrow-up"></i>
      </div>
    </div>
  );
};

export default App;