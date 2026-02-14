import "./Contact.css";
import email from "../assets/email.svg";
import linkdin from "../assets/in.svg";
import github from "../assets/github.svg";

export default function Contact() {
    return (
        <section className="contact" id="contact">
            <h2 className="section--title">Contact Me</h2>

            <div className="contact-box">
                <svg className="border-svg">
                    <rect className="border-rect" rx="16" ry="16"></rect>
                </svg>

                <a href="mailto:imenekadri04@gmail.com" className="email contact-link">
                    <img src={email} alt="email" className="email-icon" />
                    imenekadri04@gmail.com
                </a>

                <a href="https://www.linkedin.com/in/imene-kdr" target="_blank" rel="noopener noreferrer" className="linkdin contact-link">
                    <img src={linkdin} alt="linkedin" className="linkdin-icon" />
                    Imene kdr
                </a>

                <a href="https://github.com/its-imene" target="_blank" rel="noopener noreferrer" className="github contact-link">
                    <img src={github} alt="github" className="github-icon" />
                    its imene
                </a>
            </div>


            <footer className="attribution">App icon by <a id="pink" href="https://icons8.com/">icons8</a></footer>

        </section>
    );
}
