import React from 'react';
import ellaeun from '../Assets/ellaeun.png';
import '../Css/About.css';
import { Link } from 'react-router-dom';


function About() {
  return (
    <div className="about-content">
    
      <div className="about-image">
        <div className="about-image-wrapper">
          <img
            className="about-profile-image"
            src={ellaeun}
            alt="Louela Rosello Eyon"
          />
        </div>
      </div>

      <div className="about-text">
        <h1 className="title">About Me</h1>
        <p className="about-description">
          Hi there! I'm Louela Rosello Eyon, a third-year Computer Science student a passionate about building engaging digital experiences. I'm currently sharpening my skills in front-end development with HTML, CSS, JavaScript, and React, while also diving into back-end technologies like Node.js and MySQL. Additionally, I explore desktop programming with Java Swing.
        </p>

        <div className="cta-section">
  <Link to="/personal-info" className="view-my-work-btn">
    Get to Know Me!
    <span className="tooltip">"My journey, skills, and growth"</span>
  </Link>
</div>
        </div>
      </div>
  );
}

export default About;
