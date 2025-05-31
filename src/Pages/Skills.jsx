import React, { useState } from 'react';
import { FaArrowUp } from 'react-icons/fa';
import MySQL from '../Assets/MySQL.jpg';
import HTML from '../Assets/html.jpg';
import CSS from '../Assets/CSS.png';
import JavaSwing from '../Assets/JavaSwing.png';
import JavaScript from '../Assets/JavaScript.png';
import ReactLogo from '../Assets/ReactLogo.png';
import Godot from '../Assets/Godot.png';
import NodeJS from '../Assets/NodeJS.png';
import Tailwindcss from '../Assets/Tailwindcss.png';
import Python from '../Assets/Python.png';
import '../Css/Skills.css';

function Skills() {
  const [showSkills, setShowSkills] = useState(false);

  const handleToggle = () => {
    setShowSkills(!showSkills);
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="skills-container">
      <h2>My Skills</h2>
      <p>
        As a Computer Science student, I’ve gained experience in various tools and technologies that help me build websites, 
        design databases, and solve real-world problems through code.
      </p>

      <button className="toggle-button" onClick={handleToggle}>
        {showSkills ? 'Hide Tools & Technologies' : 'Show Tools & Technologies'}
      </button>

      {showSkills && (
        <div className="skills-grid">
          <div className="skill-box">
            <img src={MySQL} alt="MySQL" />
            <span>MySQL</span>
            <div className="underline"></div>
            <p className="description">Relational database management system used for storing and managing data.</p>
          </div>
          <div className="skill-box">
            <img src={HTML} alt="HTML" />
            <span>HTML</span>
            <div className="underline"></div>
            <p className="description">Markup language used to structure web content.</p>
          </div>
          <div className="skill-box">
            <img src={CSS} alt="CSS" />
            <span>CSS</span>
            <div className="underline"></div>
            <p className="description">Used to style HTML elements and layouts on websites.</p>
          </div>
          <div className="skill-box">
            <img src={JavaSwing} alt="Java Swing" />
            <span>Java Swing</span>
            <div className="underline"></div>
            <p className="description">Java GUI toolkit for building desktop applications.</p>
          </div>
          <div className="skill-box">
            <img src={JavaScript} alt="JavaScript" />
            <span>JavaScript</span>
            <div className="underline"></div>
            <p className="description">Programming language for web interactivity and logic.</p>
          </div>
          <div className="skill-box">
            <img src={ReactLogo} alt="React" />
            <span>React</span>
            <div className="underline"></div>
            <p className="description">JavaScript library for building user interfaces.</p>
          </div>
          <div className="skill-box">
            <img src={Godot} alt="Godot" />
            <span>Godot</span>
            <div className="underline"></div>
            <p className="description">Open-source game engine for 2D and 3D games.</p>
          </div>
          <div className="skill-box">
            <img src={NodeJS} alt="Node.js" />
            <span>Node.js</span>
            <div className="underline"></div>
            <p className="description">JavaScript runtime for server-side applications.</p>
          </div>
          <div className="skill-box">
            <img src={Tailwindcss} alt="Tailwind CSS" />
            <span>Tailwind CSS</span>
            <div className="underline"></div>
            <p className="description">Utility-first CSS framework for rapid UI design.</p>
          </div>
          <div className="skill-box">
  <img src={Python} alt="Python Django" />
  <span>Python Django</span>
  <div className="underline"></div>
  <p className="description">High-level Python web framework that encourages rapid development and clean, pragmatic design.</p>
  </div>

      {/* ✅ Back to Top Button */}
      <button className="back-to-top" onClick={scrollToTop} title="Back to Top">
        <FaArrowUp />
      </button>
    </div>
      )}
    </div>
  );
}

export default Skills;
