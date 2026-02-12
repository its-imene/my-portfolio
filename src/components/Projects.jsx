import { Link } from "react-router-dom";
import "./Projects.css";
import p1 from "../assets/p2.svg";
import p2 from "../assets/soon.svg";

export default function Projects() {
  return (
    <section className="projects" id="projects">
      <h2 className="section-title">My Recent Projects</h2>

      <div className="projects-list">
        {/* PEXELIS */}
        <Link to="/pexelis" className="project">
          <img src={p1} alt="Pexelis project" />
          <h3>Pexelis : Open Minds Club Hackathon Website</h3>
        </Link>

        {/* COMING SOON */}
        <div className="project">
          <img src={p2} alt="Coming soon" />
          <h3>Coming soon</h3>
        </div>
      </div>

      <br /><br />
      <button className="cta1">view more</button>
    </section>
  );
}
