import { useEffect, useState } from "react";
import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaFolderOpen,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes
} from "react-icons/fa";

import "../css/Nabar.css";

function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const body = document.body;
    if (isDark) {
      body.classList.remove("light-mode");
    } else {
      body.classList.add("light-mode");
    }
  }, [isDark]);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

  return (
    <>
    <nav className="navbar">
      <div className="nav-container">
        <div className="logo">
          <span>Ream</span>
          <span className="accent">Khorn</span>
        </div>

        <div className="nav-actions">
          <div className={`nav-links ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
            <a href="#home" className="active" onClick={() => setIsMobileMenuOpen(false)}>
              <FaHome className="icon" /> Home
            </a>
            <a href="#about" onClick={() => setIsMobileMenuOpen(false)}>
              <FaUser className="icon" /> About
            </a>
            <a href="#services" onClick={() => setIsMobileMenuOpen(false)}>
              <FaLaptopCode className="icon" /> Services
            </a>
            <a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>
              <FaFolderOpen className="icon" /> Projects
            </a>
          </div>

          <div className="nav-cta">
            <button
              className="mobile-menu-toggle"
              aria-label="Toggle mobile menu"
              onClick={toggleMobileMenu}
            >
              <span className="mobile-menu-icon">
                {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
              </span>
            </button>
            
            <button
              className="theme-toggle"
              aria-label="Toggle dark mode"
              onClick={toggleTheme}
            >
              <span className="toggle-icon">
                {isDark ? <FaMoon /> : <FaSun />}
              </span>
              <span className="toggle-label">
                {isDark ? "Dark" : "Light"}
              </span>
            </button>

            <a href="#contact" className="btn-nav" onClick={() => setIsMobileMenuOpen(false)}>
              <FaEnvelope className="icon" /> Contact
            </a>
          </div>
        </div>
      </div>
    </nav>
    </>
  );
}

export default Navbar;
