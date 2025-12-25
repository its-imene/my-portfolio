import "./Services.css";
import uiux from "../assets/uxui.svg";
import frontend from "../assets/frontend.svg";


export default function Services() {
  return (
    <section className="services">

      <h2 className="section-title"> My Services </h2>

      <div className="service-grid">
        <div className="service-box">
          <svg className="border-svg">
            <rect className="border-rect" rx="40" ry="40"></rect>
          </svg>

          <img src={uiux} alt="UI UX Design" className="service-icon" />

          <h3>UX UI Design</h3>
          <ul>
            <li>Modern & Minimal Interface</li>
            <li>Clean Layouts & Mockups</li>
            <li>Responsive & Mobile-First UI</li>
          </ul>
        </div>


        <div className="service-box">
          <svg className="border-svg">
            <rect className="border-rect" rx="40" ry="40"></rect>
          </svg>
          <img src={frontend} alt="Front-End Development" className="service-icon" />
          <h3>Front-End Dev</h3>
          <ul>
            <li>Turning Designs Into Websites</li>
            <li>HTML, CSS, JavaScript</li>
            <li>Smooth Animations & Clean UX</li>
          </ul>
        </div>
      </div>
    </section>
  );
}
