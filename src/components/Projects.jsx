import "./Projects.css";
import univerdel from "../assets/univerdel.png";
import game from "../assets/2048.png";

export default function Projects() {
  return (
    <>
    <section className="projects" id="projects">
      <h2 className="section-title">My Recent Projects</h2>
      
      <div className="projects-list">
       <div className="project"><a href="https://www.figma.com/design/gKq5uUELe9fA5mTW5y6c87/Untitled?node-id=0-1&t=Ap7NAsANBbrOi4A2-1"> <img src={univerdel}/></a></div>
       <div className="project"><a href="https://www.figma.com/design/baJmPE30ibswAdXZr7nWN6/Untitled?node-id=0-1&t=KEO3jBZohBEeuHZb-1"> <img src={game}/></a> </div>
       {/* <div className="project"></div> */}
        {/* <div className="project"></div> */}
        <button className="cta1"> view more</button>
      </div>
      <br />
    </section>
    </>
  );
}
