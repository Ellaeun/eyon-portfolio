import React from 'react';
import '../Css/Projects.css';
import { FaArrowUp } from 'react-icons/fa';

import Godot from '../Assets/Godot.png'; 
import Python from '../Assets/Python.png';
import VisualStudioCode from '../Assets/VisualStudioCode.png';
import netbeans from '../Assets/netbeans.png';

function Projects() {
  const projectList = [
    {
      title: "My First Game",
      image: Godot,
      description: "A 2D game developed using the Godot Engine that focuses on player movement, enemy dodging, and collision detection — showcasing fundamentals of game design and GDScript.",
      github: "https://github.com/Ellaeun/Eyon_Godot.git"
    },
    {
      title: "Dodge the Creeps",
      image: Godot,
      description: "A fast-paced 2D arcade-style game made in Godot where the player must avoid enemies for as long as possible. Built to practice animation, movement logic, and collision mechanics.",
      github: "https://github.com/Ellaeun/DodgeTheCreeps.git"
    },
    {
      title: "LearnWise Web ",
      image: Python,
      description: "An educational platform built using Python Django. This is a group project. GitHub repo is under one of my teammates' accounts. Developed with my group classmates for managing courses, lessons, and quizzes.",
      github: "https://github.com/sktzamesa/E-Learning-Platform.git"
    },
    {
      title: "Enrollment System ",
      image: VisualStudioCode,
      description: "A student enrollment system built using HTML, CSS, JavaScript, and PHP in Visual Studio Code. Collaboratively developed with classmates.",
      github: "https://github.com/eironch/ESG1.git"
    },
    {
      title: "CustomersConnect",
      image: netbeans,
      description: "A Java desktop application built in NetBeans for managing customer data. Features CRUD operations and MySQL integration.",
      link: "/customers-connect"
    }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="projects-container">
      <h2 className="projects-title">My Projects</h2>
      <p className="projects-description">
        Here are some of the projects I've worked on. Click the GitHub links to explore the source code or view images.
      </p>

      <div className="projects-grid">
        {projectList.map((project, index) => (
          <div key={index} className="project-card">
            <img src={project.image} alt={project.title} className="project-image" />
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.github || project.link ? (
              <a
                href={project.link || project.github}
                target={project.link ? "_self" : "_blank"}
                rel={project.link ? undefined : "noopener noreferrer"}
                className="github-link"
              >
                {project.link ? "View Project Details" : "View on GitHub"}
              </a>
            ) : null}
          </div>
        ))}
      </div>

      {/* 🆙 Back to Top Button */}
      <button className="back-to-top" onClick={scrollToTop} title="Back to Top">
        <FaArrowUp />
      </button>
    </div>
  );
}

export default Projects;
