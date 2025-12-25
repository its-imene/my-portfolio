import "./Stack.css";
import stackpic from "../assets/mystack.svg";

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
