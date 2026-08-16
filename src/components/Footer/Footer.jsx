import "./Footer.css";
import { FaGithub, FaLinkedin, FaArrowUp } from "react-icons/fa";

function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">

      <div className="footer-container">

        <h2 className="footer-logo">
          Kumaravel<span>.</span>
        </h2>

        <p className="footer-text">
          Frontend React Developer passionate about creating
          modern, responsive and user-friendly web applications.
        </p>

        <div className="footer-social">

          <a
            href="https://github.com/wwwkumaranmdm12"
            target="_blank"
            rel="noreferrer"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/kumaravel-a-b71a853b2/"
            target="_blank"
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>

        </div>

        <ul className="footer-links">

          <li><a href="#home">Home</a></li>

          <li><a href="#about">About</a></li>

          <li><a href="#education">Education</a></li>

          <li><a href="#skills">Skills</a></li>

          <li><a href="#achievements">Achievements</a></li>

          <li><a href="#projects">Projects</a></li>

          <li><a href="#contact">Contact</a></li>

        </ul>

        <a
          href="#home"
          className="scroll-top"
        >
          <FaArrowUp />
        </a>

        <p className="copyright">
          © {year} Kumaravel. All Rights Reserved.
        </p>

      </div>

    </footer>
  );
}

export default Footer;