import { Link } from "react-router-dom";
import "./Projects.css";
const p1 = new URL("../assets/p2.png", import.meta.url).href;
const p2 = new URL("../assets/soon2.png", import.meta.url).href;

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
