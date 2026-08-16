import "./Navbar.css";
import { useState, useEffect } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = [
        "home",
        "about",
        "education",
        "skills",
        "achievements",
        "projects",
        "contact",
      ];

      sections.forEach((section) => {
        const element = document.getElementById(section);

        if (element) {
          const top = element.offsetTop - 120;
          const height = element.offsetHeight;

          if (
            window.scrollY >= top &&
            window.scrollY < top + height
          ) {
            setActive(section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={scrolled ? "navbar scrolled" : "navbar"}>
      {/* Logo */}
      <div className="logo">Kumaravel A</div>

      {/* Menu */}
      <ul className={menuOpen ? "nav-links active" : "nav-links"}>
        <li>
          <a
            href="#home"
            className={active === "home" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Home
          </a>
        </li>

        <li>
          <a
            href="#about"
            className={active === "about" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            About
          </a>
        </li>

        <li>
          <a
            href="#education"
            className={active === "education" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Education
          </a>
        </li>

        <li>
          <a
            href="#skills"
            className={active === "skills" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Skills
          </a>
        </li>

        <li>
          <a
            href="#projects"
            className={active === "projects" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Projects
          </a>
        </li>

        <li>
          <a
            href="#achievements"
            className={active === "achievements" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Achievements
          </a>
        </li>

        <li>
          <a
            href="#contact"
            className={active === "contact" ? "active" : ""}
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </a>
        </li>
      </ul>

      {/* Resume */}
      <a
        href="https://drive.google.com/file/d/1bCEevpVLzfh2GE9U7xIiA_vSdKCRZsEG/view?usp=sharing"
        target="_blank"
        rel="noopener noreferrer"
        className="resume-btn"
      >
        Download CV
      </a>

      {/* Mobile Menu */}
      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}

export default Navbar;