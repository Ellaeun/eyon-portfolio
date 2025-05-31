import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import About from './Pages/About.jsx';
import Skills from './Pages/Skills.jsx';
import Projects from './Pages/Projects.jsx';
import Challenges from './Pages/Challenges.jsx';
import FuturePlans from './Pages/FuturePlans.jsx';
import Resume from './Pages/Resume.jsx';
import Contact from './Pages/Contact.jsx';
import Navbar from './Pages/Navbar.jsx'; 
import PersonalInfo from './Pages/PersonalInfo';  
import CustomersConnect from './Pages/CustomersConnect';
import Footer from './Pages/Footer'; 




function App() {
  return (
    <Router>
    <div className="page-container">
      <Navbar />
      <div className="content-wrapper">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/challenges" element={<Challenges />} />
          <Route path="/futureplans" element={<FuturePlans />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/personal-info" element={<PersonalInfo />} />
          <Route path="/customers-connect" element={<CustomersConnect />} />
        </Routes>
      </div>
      <Footer />
    </div>  
    </Router>
  );
}

export default App;
