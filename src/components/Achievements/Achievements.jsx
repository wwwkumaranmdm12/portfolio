import "./Achievements.css";
import { motion } from "framer-motion";
import { FaTrophy } from "react-icons/fa";

function Achievements() {
  const achievements = [
    {
      title: "First Prize - Dorm Decor Competition",
      college: "Jayaraj Annapackiam College for Women",
      description:
        "Secured First Prize for creativity, teamwork, and innovative dorm decoration.",
    },
    {
      title: "First Prize - Model making Competition",
      college: "Vivekananda College ",
      description:
        "Secured First Prize for creativity, teamwork, and innovative Model making.",
    },
  ];

  return (
    <section className="achievements" id="achievements">
      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        Achievements
      </motion.h2>

      <div className="achievement-container">
        {achievements.map((item, index) => (
          <motion.div
            className="achievement-card"
            key={index}
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <FaTrophy className="trophy" />

            <h3>{item.title}</h3>

            <h4>{item.college}</h4>

            <p>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}

export default Achievements;