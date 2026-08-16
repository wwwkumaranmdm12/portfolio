import "./Skills.css";
import { motion } from "framer-motion";

import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaJava,
  FaGitAlt,
  FaGithub,
  FaBootstrap
} from "react-icons/fa";

import {
  SiMysql,
  SiSpringboot,
  SiPostman
} from "react-icons/si";

function Skills() {

  const skills = [
    { name: "HTML5", icon: <FaHtml5 /> },
    { name: "CSS3", icon: <FaCss3Alt /> },
    { name: "JavaScript", icon: <FaJsSquare /> },
    { name: "React.js", icon: <FaReact /> },
    { name: "Bootstrap", icon: <FaBootstrap /> },
    { name: "Java", icon: <FaJava /> },
    { name: "Spring Boot", icon: <SiSpringboot /> },
    { name: "MySQL", icon: <SiMysql /> },
    { name: "Git", icon: <FaGitAlt /> },
    { name: "GitHub", icon: <FaGithub /> },
    { name: "Postman", icon: <SiPostman /> }
  ];

  return (
    <section className="skills" id="skills">

      <h2 className="section-title">
        My Skills
      </h2>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <motion.div
            className="skill-card"
            key={index}
            whileHover={{
              scale:1.08,
              rotate:2
            }}
          >

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Skills;