import "../css/Footer.css";
import {
  FaGithub,
  FaArrowUp,
  FaMapMarkerAlt,
  FaEnvelope,
  FaLinkedin,
  FaReact,
  FaJs,
  FaHtml5,
  FaCss3Alt,
  FaNodeJs
} from "react-icons/fa";
import { SiTypescript } from "react-icons/si";

function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const links = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  const tech = [
    { icon: <FaReact />, label: "React" },
    { icon: <SiTypescript />, label: "TypeScript" },
    { icon: <FaNodeJs />, label: "Node.js" },
    { icon: <FaJs />, label: "JavaScript" },
    { icon: <FaHtml5 />, label: "HTML5" },
    { icon: <FaCss3Alt />, label: "CSS3" },
  ];

  return (
    <footer className="footer">
      <div className="footer-top-line"></div>

      <div className="footer-container">
        {/* Brand Column */}
        <div className="footer-brand">
          <div className="footer-logo">
            <span className="logo-mark">RK</span>
            <span className="logo-name">Ream Khorn</span>
          </div>
          <p className="footer-desc">
            Full-Stack Developer crafting clean, responsive, and high-performance
            web experiences with modern technologies.
          </p>
          <div className="footer-meta">
            <span><FaMapMarkerAlt /> Cambodia</span>
            <span><FaEnvelope /> reamkhorn12345@gmail.com</span>
          </div>
          <span className="footer-badge">
            <span className="dot"></span> Available for work
          </span>
        </div>

        {/* Links Column */}
        <div className="footer-nav">
          <h4>Quick Links</h4>
          <ul>
            {links.map((link) => (
              <li key={link.label}>
                <a href={link.href}>{link.label}</a>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Column */}
        <div className="footer-tech">
          <h4>Tech Stack</h4>
          <div className="tech-pills">
            {tech.map((t) => (
              <span key={t.label} className="tech-pill">
                {t.icon} {t.label}
              </span>
            ))}
          </div>
        </div>

        {/* Social Column */}
        <div className="footer-connect">
          <h4>Connect</h4>
          <div className="social-row">
            <a href="https://github.com/Ream-dev" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/ream" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="mailto:reamkhorn12345@gmail.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Ream Khorn. All rights reserved.</p>
        <button className="back-to-top" onClick={scrollToTop} aria-label="Back to top">
          <FaArrowUp />
        </button>
      </div>
    </footer>
  );
}

export default Footer;
