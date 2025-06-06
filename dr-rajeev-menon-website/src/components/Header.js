import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/images/logo.png';

const Header = () => {
  return (
    <header>
      <nav className="container">
        <div className="logo">
          <img src={logo} alt="Dr. Rajeev Menon Logo" />
          Dr. Rajeev Menon
        </div>
        <ul className="nav-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="#about">About</Link></li>
          <li><Link to="#services">Services</Link></li>
          <li><Link to="#resources">Resources</Link></li>
          <li><Link to="#appointment">Appointment</Link></li>
        </ul>
        <div>
          <Link to="#appointment" className="btn btn-primary">Book Appointment</Link>
        </div>
      </nav>
    </header>
  );
};

export default Header;