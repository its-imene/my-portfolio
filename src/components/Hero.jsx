import "./Hero.css";
import girl from "../assets/profilhero.svg";

export default function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-left">
        <img src={girl} className="hero-img" alt="girl illustration" />
      </div>

      <div className="hero-right">
        <h1 className="fade-in">
          Hello ! I'm <span className="purple">Imene</span>
        </h1>

        <p className="fade-in">
          A <span className="pink">Front-end developer</span> blending
          patience with creativity to craft seamless, beautiful digital experiences.
        </p>

        <a href="#contact">
          <button className="cta">Contact Me</button>
        </a>
      </div>
    </section>
  );
}
