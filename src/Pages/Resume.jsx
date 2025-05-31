import React from 'react';
import '../Css/Resume.css';
import ResumePDF from '../Assets/Resume.pdf';
import { FaArrowUp } from 'react-icons/fa';

function Resume() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="resume-container">
      <h2>My Resume</h2>

      <section className="resume-display">
        <p>
          I am a passionate and driven Computer Science student with hands-on experience in both academic and real-world projects.
          I specialize in full-stack development, database design, and user-friendly interface creation. Below is a summary of my credentials.
        </p>

        <div className="resume-preview-box">
          <h3>Curriculum Vitae Highlights</h3>
          <ul>
            <li><strong>🎓 Education:</strong> Bachelor of Science in Computer Science — Cavite State University Bacoor City Campus, 2022-2025</li>
            <li><strong>💻 Technical Skills:</strong> 
              <ul>
                <li>Frontend: HTML, CSS, JavaScript, React, Tailwind CSS</li>
                <li>Backend: Node.js, PHP, Django</li>
                <li>Database: MySQL</li>
                <li>Desktop Dev: Java (Swing), NetBeans</li>
                <li>Game Dev: Godot Engine (GDScript)</li>
              </ul>
            </li>
            <li><strong>🛠 Projects:</strong>
              <ul>
                <li><strong>CustomersConnect:</strong> A Java-based customer management desktop application using MySQL</li>
                <li><strong>Dodge the Creeps:</strong> A fast-paced 2D arcade game built with Godot</li>
                <li><strong>LearnWise Web:</strong> Django-powered educational platform (Group Project)</li>
                <li><strong>Enrollment System:</strong> Student enrollment system using HTML, CSS, JS, and PHP</li>
              </ul>
            </li>
            <li><strong>📃 Trainings:</strong> 
              <ul>
                <li>NSTP Completion (National Service Training Program)</li>
              </ul>
            </li>
            <li><strong>📌 Soft Skills:</strong> Team collaboration, time management, problem-solving, adaptability, version control (Git/GitHub)</li>
          </ul>
        </div>

        <a href={ResumePDF} download className="download-button">
          📄 Download My Curriculum Vitae (PDF)
        </a>
      </section>

      {/* 🆙 Back to Top Button */}
      <button className="back-to-top" onClick={scrollToTop} title="Back to Top">
        <FaArrowUp />
      </button>
    </div>
  );
}

export default Resume;
