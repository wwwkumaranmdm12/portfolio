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
            Aspiring <span> Software Developer </span>
          </h2>

          <p>
            I'm Kumaravel A, a B.Sc. Physics graduate and a passionate Java Full Stack Developer fresher. I have built projects using Java, Spring Boot, React.js, MySQL, HTML, CSS, and JavaScript, which helped me strengthen my problem-solving and development skills. I'm looking for an opportunity to begin my career as a Software Engineer, where I can learn, grow, and contribute to building high-quality software solutions.
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
            <h3>B.Sc. Physics Graduate</h3>
            <p>2026 Graduate</p>
          </div>

          <div className="about-card">
            <FaLaptopCode className="about-icon" />
            <h3>Java Full Stack</h3>
            <p>Fresher Developer</p>
          </div>

          <div className="about-card">
            <FaLightbulb className="about-icon" />
            <h3>Career Goal</h3>
            <p>Software Engineer</p>
          </div>

        </motion.div>

      </div>
    </section>
  );
}

export default About;