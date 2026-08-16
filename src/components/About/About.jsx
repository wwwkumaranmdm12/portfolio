import "./About.css";
import { motion } from "framer-motion";
import { FaUserGraduate, FaLaptopCode, FaLightbulb } from "react-icons/fa";

function About() {
  return (
    <section className="about" id="about">
      <div className="about-container">

        <motion.div
          className="about-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h4>ABOUT ME</h4>

          <h2>
            Passionate <span> Software Engineer</span>
          </h2>

          <p>
            I'm Kumaravel A, a Software Engineer passionate about building scalable, end-to-end software solutions. I specialize in Java and Spring Boot for backend development and React.js for creating interactive frontend interfaces. I thrive on writing clean, efficient code to solve complex real-world problems.
            </p>

          <div className="about-buttons">
            <a href="#projects" className="about-btn">
              View Projects
            </a>
          </div>
        </motion.div>

        <motion.div
          className="about-right"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <div className="about-card">
            <FaUserGraduate className="about-icon" />
            <h3>Education</h3>
            <p>B.Sc.,Physics  Graduate</p>
          </div>

          <div className="about-card">
            <FaLaptopCode className="about-icon" />
            <h3>Technical Expertise</h3>
            <p>Java, Spring Boot, React.js, SQL, Full-Stack Development</p>
          </div>

          <div className="about-card">
            <FaLightbulb className="about-icon" />
            <h3>Goal</h3>
            <p>Build Scalable Software Solutions</p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;