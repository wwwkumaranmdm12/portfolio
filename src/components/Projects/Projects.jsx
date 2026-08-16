import "./Projects.css";
import { motion } from "framer-motion";

import eventhood from "../assets/projects/eventhood.png";
import portfolio from "../assets/projects/portfolio.png";
import RideGo from "../assets/projects/RideGo.png";
import nexus from "../assets/projects/nexus.png";
import hiddenplaces from "../assets/projects/hiddenplaces.png";
import Nova from "../assets/projects/Nova.png";

const projects = [
  {
    title: "Hidden Places in Tamil Nadu",
    image: hiddenplaces,
    description:
      "A responsive tourism website showcasing the hidden and unexplored destinations across Tamil Nadu. Users can explore beautiful locations, view detailed information, discover travel attractions, and enjoy an attractive modern UI.", 
      tech: ["HTML", "CSS"],
    github: "https://github.com/wwwkumaranmdm12/Hidden_place",
    live: "https://hiddenplacestn.netlify.app/",
  },

  {
    title: "EventHood",
    image: eventhood,
    description:
      "A modern event discovery platform where users can explore upcoming events, register online and manage bookings with a responsive interface.",
    tech: ["React", "HTML", "CSS","Java Script"],
    github: "https://github.com/wwwkumaranmdm12/EventHood",
    live: "https://eventad.netlify.app/",
  },

  {
    title: "Portfolio",
    image: portfolio,
    description:
      "My personal developer portfolio built using React and Framer Motion showcasing my skills, projects, education, certificates and contact information.",
    tech: ["React", "Framer Motion", "CSS"],
    github: "https://github.com/wwwkumaranmdm12/portfolio",
    live: "#",
  },

  {
    title: "RideGo - Cab Booking System",
    image: RideGo,
    description:
      "RideGo is a full-stack Cab Booking System developed using React.js, Spring Boot, MySQL and JWT Authentication. Users can register, login securely, book rides, manage bookings and access a responsive dashboard.",
    tech: [
      "React",
      "HTML",
      "CSS",
      "Spring Boot",
      "MySQL",
      "JWT",
      "REST API",
    ],
    github: "https://github.com/wwwkumaranmdm12/ridego-backend",
    live: "https://remarkable-pothos-ab76a0.netlify.app",
  },

  {
    title: "Nexus WMS",
    image: nexus,
    description:
      "Nexus Warehouse Management System is a full-stack inventory management application featuring inventory tracking, warehouse management, stock movements, suppliers, analytics dashboard and low stock monitoring.",
    tech: [
      "React",
      "HTML",
      "CSS",
      "Java Script",
      "Spring Boot",
      "MySQL",
      "REST API",
    ],
    github: "https://github.com/wwwkumaranmdm12/NEXUS",
    live: "https://nexus-iota-gules.vercel.app/",
  },
];

function Projects() {
  return (
    <section id="projects" className="projects">

      <div className="projects-container">

        {/* SECTION HEADER */}

        <motion.div
          className="projects-header"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >

          
        </motion.div>


        {/* PROJECTS */}

        <div className="projects-wrapper">

          {projects.map((project, index) => (

            <motion.article
              key={project.title}
              className={
                index % 2 !== 0
                  ? "project-card reverse"
                  : "project-card"
              }

              initial={{
                opacity: 0,
                y: 70,
              }}

              whileInView={{
                opacity: 1,
                y: 0,
              }}

              viewport={{
                once: true,
                amount: 0.2,
              }}

              transition={{
                duration: 0.75,
                delay: 0.05,
                ease: [0.22, 1, 0.36, 1],
              }}
            >

              {/* PROJECT IMAGE */}

              <div className="project-image-wrapper">

                <div className="project-image">

                  <img
                    src={project.image}
                    alt={project.title}
                  />

                  <div className="image-overlay">

                    <span>
                      PROJECT {String(index + 1).padStart(2, "0")}
                    </span>

                  </div>

                </div>

              </div>


              {/* PROJECT CONTENT */}

              <div className="project-info">

                <span className="project-number">
                  {String(index + 1).padStart(2, "0")}
                </span>

                <span className="project-label">
                  FEATURED PROJECT
                </span>

                <h3>
                  {project.title}
                </h3>

                <p className="project-description">
                  {project.description}
                </p>


                {/* TECHNOLOGIES */}

                <div className="tech-stack">

                  {project.tech.map((item) => (

                    <span key={item}>
                      {item}
                    </span>

                  ))}

                </div>


                {/* BUTTONS */}

                <div className="project-buttons">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="github-btn"
                  >
                    <span>GitHub</span>
                    <span className="arrow">↗</span>
                  </a>


                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="live-btn"
                  >
                    <span>Live Demo</span>
                    <span className="arrow">↗</span>
                  </a>

                </div>

              </div>

            </motion.article>

          ))}

        </div>

      </div>

    </section>
  );
}

export default Projects;

