import "./Certificates.css";
import { FaCertificate } from "react-icons/fa";
import { motion } from "framer-motion";

function Certificates() {

  const certificates = [
    {
      title: "Java Full Stack Development",
      organization: "QSpiders",
      year: "2026"
    },
    {
      title: "React.js Development",
      organization: "QSpiders",
      year: "2026"
    },
    {
      title: "Java Programming",
      organization: "QSpiders",
      year: "2026"
    }
  ];

  return (
    <section className="certificates" id="certificates">

      <h2>Certificates</h2>

      <div className="certificate-grid">

        {certificates.map((item, index) => (

          <motion.div
            className="certificate-card"
            key={index}
            whileHover={{ scale: 1.05 }}
          >

            <FaCertificate className="certificate-icon" />

            <h3>{item.title}</h3>

            <p>{item.organization}</p>

            <span>{item.year}</span>

          </motion.div>

        ))}

      </div>

    </section>
  );
}

export default Certificates;