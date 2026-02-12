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

          <h3></h3>
           <ul>
    <li>Design-to-Code Translation</li>
    <li>Pixel-Accurate Layouts</li>
    <li>Responsive & Mobile-First Interfaces</li>
  </ul>
        </div>


        <div className="service-box">
          <svg className="border-svg">
            <rect className="border-rect" rx="40" ry="40"></rect>
          </svg>
          <img src={frontend} alt="Front-End Development" className="service-icon" />
          <h3></h3>
          <ul>
    <li>Modern JavaScript & React</li>
    <li>Reusable & Scalable Components</li>
    <li>Interactive & Performant Interfaces</li>
  </ul>
        </div>
      </div>
    </section>
  );
}
