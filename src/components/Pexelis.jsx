import "./Pexelis.css";
import heroImg from "../assets/p2.png"; // change if needed

export default function Pexelis() {
  return (
    <section className="project-page">
      
      {/* HERO */}
      <div className="project-hero">
  <h1>Pexelis</h1>
  <p className="project-subtitle">
    Open Minds Club Hackathon Website
  </p>

  <a
    href="https://pexelis.openmindsclub.net/"
    target="_blank"
    rel="noopener noreferrer"
    className="image-wrapper"
  >
    <img src={heroImg} alt="Pexelis preview" />
    <div className="overlay">
      <span>🔗 View Live Website</span>
    </div>
  </a>
</div>


      {/* OVERVIEW */}
      <div className="project-section">
        <h2>Project Overview</h2>
        <p>
          Pexelis is the official website developed for the Open Minds Club
          Hackathon. The platform presents event information, challenges
          details, sponsors, and schedule in a clean and structured interface.
        </p>
      </div>

      {/* ROLE */}
    
<div className="project-section">
  <h2>My Role — Frontend Developer (Desktop)</h2>
  <p>
    The UI/UX design for this project was created by the UX/UI team.
    My responsibility was to implement the approved designs into a
    fully functional and responsive desktop website.
  </p>

  <ul>
    <li>Translated Figma designs into React components</li>
    <li>Built reusable and scalable component structure</li>
    <li>Ensured pixel-accurate desktop implementation</li>
    <li>Maintained layout consistency and spacing</li>
    <li>Collaborated with two teammates using Git & GitHub</li>
  </ul>
</div>


      {/* TECH STACK */}
      <div className="project-section">
        <h2>Technologies Used</h2>
        <p>React • JavaScript • CSS • Git • Figma</p>
      </div>

      {/* COLLABORATION */}
      <div className="project-section">
        <h2>Collaboration</h2>
        <p>
          This project was developed in collaboration with my teammates <strong  className="pink"> Lydia </strong> and <strong className="pink"> Mohammed</strong>.
          We coordinated development tasks and maintained version control
          through Git and GitHub to ensure smooth workflow.
        </p>
      </div>

      {/* CHALLENGES */}
      <div className="project-section">
        <h2>Challenges & Solutions</h2>
        <p>
          One of the main challenges was maintaining design consistency
          across multiple sections while keeping the codebase clean and
          organized. I solved this by structuring components modularly
          and reusing layout patterns for scalability.
        </p>
      </div>

    </section>
  );
}
