import "./Education.css";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa";
import { motion } from "framer-motion";

function Education() {
  return (
    <section className="education" id="education">

      <h2>Education</h2>

      <div className="education-container">

        <motion.div
          className="edu-card"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaGraduationCap className="edu-icon" />

          <h3>B.Sc Physics</h3>

          <h4>Mannar Thirumalai Naicker College</h4>

          <p>2023 - 2026</p>

          <p>
            Completed Bachelor of Science in Physics with a strong
            foundation in analytical thinking and problem-solving.
          </p>

        </motion.div>

        <motion.div
          className="edu-card"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <FaLaptopCode className="edu-icon" />

          <h3>Java Full Stack Development</h3>

          <h4>Innovel Training Institute</h4>

          <p>2026 - Present</p>

          <p>
            Learning Java, JDBC, Servlets, JSP, Spring Boot, React,
            MySQL, Git, GitHub and REST APIs by building real-world
            applications.
          </p>

        </motion.div>

      </div>

    </section>
  );
}

export default Education;