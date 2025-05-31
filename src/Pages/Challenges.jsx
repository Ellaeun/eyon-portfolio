import '../Css/Challenges.css';
import { FaArrowUp } from 'react-icons/fa';

function Challenges() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="challenges-container">
      <h1>Challenges I’ve Faced</h1>

      <p className="intro-description">
        Learning to code hasn’t been easy. There were moments when I felt lost, frustrated, and even wanted to give up — especially when things didn't work after hours of trying.
      </p>

      <div className="challenge-card">
        <h3>Debugging Complex Errors</h3>
        <p>
          Sometimes a small typo can take hours to find. This taught me the importance of paying attention to detail and using tools like console logs and breakpoints effectively.
        </p>
      </div>

      <div className="challenge-card">
        <h3>Collaborating in Group Projects</h3>
        <p>
          Communication and version control (e.g., using Git) were challenging at first. But I learned to divide work clearly and use GitHub branches to avoid conflicts.
        </p>
      </div>

      <div className="challenge-card">
        <h3>Learning New Technologies</h3>
        <p>
          Frameworks like Django, React, or Godot were intimidating. But tackling small projects helped me understand them step by step.
        </p>
      </div>

      <div className="challenge-card">
        <p>
          These challenges helped me grow not only as a developer but also as a problem solver. I’ve learned that persistence is key — and that every bug is a chance to learn.
        </p>
      </div>

        {/* ✅ Back to Top Button */}
            <button className="back-to-top" onClick={scrollToTop} title="Back to Top">
              <FaArrowUp />
            </button>
    </div>
  );
}

export default Challenges;
