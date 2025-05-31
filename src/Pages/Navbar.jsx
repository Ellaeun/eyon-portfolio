import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../Css/Navbar.css'


function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      
      {/* Hamburger for mobile */}
      <div className="hamburger" onClick={toggleMenu}>
        &#9776;
      </div>

      {/* Mobile Menu */}
      
      <div className={`mobile-menu ${isOpen ? 'open' : ''}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
        <Link to="/skills" onClick={() => setIsOpen(false)}>Skills</Link>
        <Link to="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
        <Link to="/challenges" onClick={() => setIsOpen(false)}>Challenges</Link>
        <Link to="/futureplans" onClick={() => setIsOpen(false)}>Future Plans</Link>
        <Link to="/resume" onClick={() => setIsOpen(false)}>Resume</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
      </div>

      {/* Desktop Menu */}
      <div className="desktop-menu">
      <div class="navbar-logo">L.E</div>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/skills">Skills</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/challenges">Challenges</Link>
        <Link to="/futureplans">Future Plans</Link>
        <Link to="/resume">Resume</Link>
        <Link to="/contact">Contact</Link>
      </div>
      
    </nav>
  );
}

export default Navbar;
