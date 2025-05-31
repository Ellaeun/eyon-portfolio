import React from 'react';
import '../Css/FuturePlans.css';
import { FaArrowUp } from 'react-icons/fa';

function FuturePlans() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="future-plans-container">
      <h2>My Future Plans</h2>
      <p className="intro">
        As I continue to grow as a developer, I have set several personal and professional goals that I’m excited to work toward.
      </p>

      <div className="plan-card">
        <h3>📚 Continue Learning</h3>
        <p>
          I plan to dive deeper into backend development, specifically mastering frameworks like Django and Node.js. I also want to strengthen my skills in databases and system design.
        </p>
      </div>

      <div className="plan-card">
        <h3>💼 Build Real-World Projects</h3>
        <p>
          I aim to create more full-stack projects that solve real-world problems. These projects will help improve my problem-solving and collaboration skills.
        </p>
      </div>

      <div className="plan-card">
        <h3>🌐 Contribute to Open Source</h3>
        <p>
          I want to give back to the developer community by contributing to open-source projects and helping others through forums and GitHub.
        </p>
      </div>

      <div className="plan-card">
        <h3>🎓 Career Development</h3>
        <p>
          My goal is to land a role in a company where I can work with experienced developers, learn from real challenges, and grow into a full-time software engineer.
        </p>
      </div>

       {/* ✅ Back to Top Button */}
           <button className="back-to-top" onClick={scrollToTop} title="Back to Top">
             <FaArrowUp />
           </button>
    </div>
  );
}

export default FuturePlans;
