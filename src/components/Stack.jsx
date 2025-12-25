import "./Stack.css";
import js from "../assets/js.svg";
import html from "../assets/html.svg";
import css from "../assets/css.svg";
import reactframe from "../assets/reactframe.svg";
import taillwind from "../assets/taillwind.svg";
import git from "../assets/git.svg";
import java from "../assets/java.svg";
import python from "../assets/python.svg";
import figma from "../assets/figma.svg";
import sql from "../assets/sql.svg";
import c from "../assets/c.svg";
import stackpic from "../assets/Group 9.png";

export default function Stack() {
  return (
    <section className="stack">
      <h2 className="section-title">My Stack</h2>

     
        <img src={stackpic} alt="stack" className="stack-icons" />
      

      <hr className="divider" />

      <div className="ticker-wrapper">
        <div className="ticker">
          {[
            "HTML","CSS","JavaScript","Python","C","Figma",
            "React","Tailwind","Java","SQL",
            "HTML","CSS","JavaScript","Python","C","Figma",
            "React","Tailwind","Java","SQL"
          ].map((item, i) => (
            <div key={i} className="item">{item}</div>
          ))}
        </div>
      </div>

      <hr className="divider" />
    </section>
  );
}
