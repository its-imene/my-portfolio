import React from "react";
import "./About.css";
import pic from "../assets/about 1.png";

export default function About() {
  return (
    <div className="about-wrapper" id="about">

      <h1 className="title">★ About Me ★</h1>

      <div className="content-grid">
        {/* LEFT CARD */}
        <div className="left-card">
          <img src={pic} alt="about me pic" className="profile-img" />
          <h2>Imene Kadri</h2>
          <h3 className="role">Front End Developer & UX UI Designer</h3>
          <p className="email">imenekadri04@gmail.com</p>
          <p className="resume">
             
          </p>
        </div>

        {/* EXPERIENCE CARD */}
        <div className="experience-card">
          <h3>My Experience</h3>
          <ul>
            <li>Front End Developer intern at Univer Delivery (jully 2025 - Augest 2025)</li>
            <li>Active Member at OMC Club</li>
            <li>University projects</li>
          </ul>
        </div>

        {/* RIGHT CARD */}
        <div className="right-card">
          {/* EDUCATION CARD */}
          <div className="education-card">
            <h3>Education</h3>
            <ul>
              <li>Bachelor in Computer Science    USTHB (2023 - 2025)</li>
              
            </ul>
          </div>

          {/* TOOLS + GITHUB */}
          <div className="extra-card">
            <div className="tools-card">
              <h3>Tools & Skills</h3>
              <ul>
                <li>HTML, CSS, JavaScript, Python, Java</li>
                <li>React, Tailwind CSS</li>
                <li>SQL+</li>
                <li>Figma</li>
                <li>Git & GitHub</li>
              </ul>
            </div>
            <a href="https://github.com/its-imene?tab=repositories"><button className="github-btn">View My Github</button></a>
          </div>
        </div>
      </div>
        <footer className="attribution">App icon by <a id="pink" href="https://icons8.com/">icons8</a></footer>
            
    </div>
    
  );
}
