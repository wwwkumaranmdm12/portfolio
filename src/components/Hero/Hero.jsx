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

          <h2>Passionate Software Engineer</h2>

          <p className="hero-description">
           Passionate Software Engineer with strong knowledge of Java Full-Stack development. I enjoy building scalable, robust, and high-performance software applications with clean code, efficient problem-solving, and a great user experience.
           </p>
          <div className="hero-buttons">

            <a
              href="https://drive.google.com/file/d/1bCEevpVLzfh2GE9U7xIiA_vSdKCRZsEG/view?usp=sharing"
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