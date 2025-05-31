import React from 'react';
import ellaeun from '../Assets/ellaeun.png';
import { TypeAnimation } from 'react-type-animation';
import '../Css/Home.css'

function Home() {
  
  return (
    <div className="home-content">
    {/* Image Section */}
    <div className="home-image">
      <div className="image-wrapper">
        <img
          className="profile-image"
          src={ellaeun}
          alt="Ella Eun"
        />
      </div>
    </div>
  
    {/* Text Section */}
    <div className="home-text">
      <h1 className="title">
        <span className="highlight">Hi! I’m Louela</span><br />
        <TypeAnimation
          className="animated-text"
          sequence={[
            'I am ',
            1500,
            ' A Student',
            1500,
            'Aspiring',
            1500,
            'Front-End Dev',
            1500,
            'Back-End Dev',
            1500,
          ]}
          wrapper="span"
          speed={200}
          repeat={Infinity}
        />
      </h1>
      <p className="home-description">
  A passionate and driven Computer Science student on a journey to create meaningful digital solutions. I love turning ideas into real applications through coding and creative design. Explore my portfolio and get to know the mind behind the code.
</p>


<div class="cta-section">
  <div class="view-my-work-btn">
    Welcome!!
    <span class="tooltip">"Discover My Featured Projects"</span>
  </div>
</div>

    </div>
  </div>
  
  );
}

export default Home;
