import "./Contact.css";
import { motion } from "framer-motion";
import {
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaGithub,
  FaLinkedin,
} from "react-icons/fa";

function Contact() {
  return (
    <section className="contact" id="contact">

      <motion.h2
        className="section-title"
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: .7 }}
        viewport={{ once: true }}
      >
        Contact Me
      </motion.h2>

      <div className="contact-container">

        <motion.div
          className="contact-left"
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <h3>Let's Work Together 🚀</h3>

          <p>
            I'm always interested in new opportunities,
            freelance projects and collaborations.
            Feel free to contact me anytime.
          </p>

          <div className="contact-info">

            <div className="info-box">
              <FaEnvelope />
              <span>www.kumaranmdm12@gmail.com</span>
            </div>

            <div className="info-box">
              <FaPhoneAlt />
              <span>+91 9092439706</span>
            </div>

            <div className="info-box">
              <FaMapMarkerAlt />
              <span>Madurai,Tamil Nadu, India</span>
            </div>

          </div>

          <div className="social-links">

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

        </motion.div>

        <motion.form
          className="contact-form"
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: .8 }}
          viewport={{ once: true }}
        >

          <input
            type="text"
            placeholder="Your Name"
          />

          <input
            type="email"
            placeholder="Your Email"
          />

          <input
            type="text"
            placeholder="Subject"
          />

          <textarea
            rows="6"
            placeholder="Your Message"
          ></textarea>

          <button type="submit">
            Send Message
          </button>

        </motion.form>

      </div>

    </section>
  );
}

export default Contact;