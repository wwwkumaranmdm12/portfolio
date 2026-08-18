import "./Hero.css";
import { motion } from "framer-motion";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaDownload,
} from "react-icons/fa";


import profile from "../assets/profile.png";

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-container">

        {/* LEFT */}

        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >

          <p className="intro">Hello, I'm</p>

          <h1>
            Kumaravel A
          </h1>

          <h2>Java Full Stack Developer | Fresher</h2>

          <p className="hero-description">
           I'm a B.Sc. Physics graduate and an aspiring Java Full Stack Developer with knowledge of Java, Spring Boot, MySQL, React.js, HTML, CSS, and JavaScript. I'm eager to start my software engineering career by building scalable applications, learning new technologies, and contributing to real-world projects.
           </p>
          <div className="hero-buttons">

            <a
              href="https://drive.google.com/file/d/1z_xIcDir7QgsXQsFucsP1klBMC3wH90Q/view?usp=sharing"
              download
              className="btn-primary"
            >
              <FaDownload />
              Download CV
            </a>

            <a
              href="#contact"
              className="btn-secondary"
            >
              Contact Me
            </a>

          </div>

          <div className="social-icons">

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

            <a
              href="mailto:www.kumaranmdm12@gmail.com"
            >
              <FaEnvelope />
            </a>

          </div>

        </motion.div>

        {/* RIGHT */}

        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >

          <img
            src={profile}
            alt="Kumaravel"
          />

        </motion.div>

      </div>
    </section>
  );
}

export default Hero;