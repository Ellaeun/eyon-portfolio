import React from 'react';
import { FaArrowUp } from 'react-icons/fa';
import '../Css/PersonalInfo.css';

function PersonalInfo() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="infographic-container">
      <h1>About Louela</h1>
      <div className="infographic-timeline">

        {/* Basic Info - Left */}
        <div className="timeline-block left">
          <div className="circle">📄</div>
          <div className="content-box">
            <h2>Basic Information</h2>
            <p>
              My name is Louela Rosello Eyon, born in 1998 in Aguada, Cataingan Masbate and currently living in Village Home Queensrow West Bacoor City Cavite. 
              I grew up in a simple, loving family where I was encouraged to explore and learn. 
              Even as a child, I was naturally curious — always asking questions, eager to understand how things worked. 
              Little did I know, this curiosity would one day lead me into the world of technology and computers.
            </p>
          </div>
        </div>

        {/* Parents - Right */}
        <div className="timeline-block right">
          <div className="circle">👨‍👩‍👧</div>
          <div className="content-box">
            <h2>Parents</h2>
            <p>
              My parents, Lucio A. Eyon , Rafaela R. Gemino, have always been the foundation of my strength. 
              Through their quiet but unwavering support, they taught me the importance of hard work, patience, and humility. 
              They never forced me to follow a certain path, but they always believed in me — and that belief gave me the courage to chase my dreams.
            </p>
          </div>
        </div>

        {/* Education - Left */}
        <div className="timeline-block left">
          <div className="circle">🎓</div>
          <div className="content-box">
            <h2>Educational Background</h2>
            <p>
              I am currently a third-year student pursuing a Bachelor of Science in Computer Science at Cavite State University, Bacoor City Campus. 
              Entering this course was a big leap for me — I had little experience with programming, and I knew it wouldn’t be easy. 
              But as I progressed, I discovered that learning how to code isn’t just about solving problems — it's about being creative, patient, and resourceful. 
              Every semester has taught me something new, not just about computers, but about myself.
            </p>
          </div>
        </div>

        {/* Journey - Right */}
        <div className="timeline-block right">
          <div className="circle">📘</div>
          <div className="content-box">
            <h2>My Journey as a Student</h2>
            <p>
              My journey as a student has been full of challenges, growth, and discovery. 
              From the first day of college, stepping into a world of codes and logic, I was both nervous and excited. 
              There were times when the pressure was overwhelming — especially during exams and long programming nights — 
              but each experience made me stronger and more passionate about technology. 
              I learned not just to solve problems, but to enjoy the process of learning itself.
              Now in my third year, I feel more confident, grateful for my mentors, and eager to take on what’s ahead.
            </p>
          </div>
        </div>

        {/* Skills & Growth - Left */}
        <div className="timeline-block left">
          <div className="circle">💡</div>
          <div className="content-box">
            <h2>Skills & Growth</h2>
            <p>
              Throughout my journey as a Computer Science student, I've developed a wide range of skills — both technical and personal.
              I’ve become proficient in languages like HTML, CSS, JavaScript, and Python, and I’ve also learned to work with frameworks and tools such as React and Git.
              More importantly, I’ve grown in areas like critical thinking, time management, and communication.
              Each challenge I faced became an opportunity to improve not just what I know, but how I approach problems and collaborate with others.
            </p>
          </div>
        </div>
      </div>

      {/* ✅ Back to Top Button */}
      <button className="back-to-top" onClick={scrollToTop} title="Back to Top">
        <FaArrowUp />
      </button>
    </div>
  );
}

export default PersonalInfo;
