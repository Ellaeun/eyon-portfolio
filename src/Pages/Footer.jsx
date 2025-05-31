import React from 'react';
import { FaFacebookF, FaLinkedinIn, FaGithub, FaInstagram, FaEnvelope, FaPhone } from 'react-icons/fa';
import '../Css/Footer.css';

function Footer() {
  return (
    <footer className="footer-container">
      <div className="social-icons">
        <a href="https://www.facebook.com/ellaeun1211" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
          <FaFacebookF />
        </a>
        <a href="https://www.linkedin.com/in/louela-r-eyon-537a7631b/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <FaLinkedinIn />
        </a>
        <a href="https://github.com/Ellaeun" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <FaGithub />
        </a>
        <a href="https://www.instagram.com/louelaeyon/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
          <FaInstagram />
        </a>
        <a href="mailto:Ellaeun.ee@gmail.com" aria-label="Email">
          <FaEnvelope />
        </a>
        <a href="tel:+639277763375" aria-label="Phone">
          <FaPhone />
        </a>
      </div>
      <div className="footer-text">
        © {new Date().getFullYear()} Louela Rosello Eyon. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
