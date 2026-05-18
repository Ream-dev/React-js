import { useEffect, useMemo, useState } from "react";
import {
  FaHome,
  FaUser,
  FaLaptopCode,
  FaFolderOpen,
  FaEnvelope,
  FaMoon,
  FaSun,
  FaBars,
  FaTimes,
  FaCode
} from "react-icons/fa";

import "../css/Nabar.css";

function Navbar() {
  const [isDark, setIsDark] = useState(true);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState("#home");

  const navItems = useMemo(
    () => [
      { href: "#home", label: "Home", icon: <FaHome /> },
      { href: "#about", label: "About", icon: <FaUser /> },
      { href: "#Experiences", label: "Experiences", icon: <FaLaptopCode /> },
      { href: "#projects", label: "Projects", icon: <FaFolderOpen /> }
    ],
    []
  );

  useEffect(() => {
    const body = document.body;
    if (isDark) {
      body.classList.remove("light-mode");
    } else {
      body.classList.add("light-mode");
    }
  }, [isDark]);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
      const offset = window.scrollY + window.innerHeight / 3;
      const currentSection = navItems.reduce((current, item) => {
        const section = document.querySelector(item.href);
        if (section && section.offsetTop <= offset) {
          return item.href;
        }
        return current;
      }, "#home");
      setActiveLink(currentSection);
    };
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => setIsDark((prev) => !prev);
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const handleNavClick = (href) => {
    setActiveLink(href);
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="nav-container">
        {/* Logo */}
        <a href="#home" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
          <span className="logo-icon"><FaCode /></span>
          <span className="logo-text">Ream</span>
          <span className="logo-accent">Khorn</span>
        </a>

        {/* Desktop Navigation */}
        <div className="nav-links">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`nav-link ${activeLink === item.href ? "active" : ""}`}
              onClick={() => handleNavClick(item.href)}
            >
              <span className="nav-dot"></span> {item.label}
            </a>
          ))}
        </div>

        {/* Actions */}
        <div className="nav-actions">
          <button
            className="theme-toggle"
            aria-label="Toggle theme"
            onClick={toggleTheme}
          >
            {isDark ? <FaMoon /> : <FaSun />}
          </button>

          <a href="#contact" className="btn-nav" onClick={() => setIsMobileMenuOpen(false)}>
            <FaEnvelope /> Contact
          </a>

          <button
            className="mobile-menu-toggle"
            aria-label={isMobileMenuOpen ? "Close menu" : "Open menu"}
            onClick={toggleMobileMenu}
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}>
        {navItems.map((item) => (
          <a
            key={item.href}
            href={item.href}
            onClick={() => handleNavClick(item.href)}
          >
            {item.icon} {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
}

export default Navbar;
