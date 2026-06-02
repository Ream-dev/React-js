import { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope, FaChevronDown, FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare, FaPython } from "react-icons/fa";
import profile from "../assets/ream.png";
import { SiTypescript } from "react-icons/si";
import "../css/Headers.css";

function Headers() {
  const roles = [
    "Modern Full Stack Developer",
    "React & Node.js Specialist",
    "UI/UX-Focused Engineer",
    "Database Creator"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typing = setTimeout(() => {
      if (charIndex < roles[index].length) {
        setText((prev) => prev + roles[index][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 80);

    return () => clearTimeout(typing);
  }, [charIndex, index]);

  return (
    <header className="hero">
      {/* Background Name */}
      <div className="hero-bg-text">
        <span className="bg-name-first">REAM</span>
        <span className="bg-name-last">KHORN</span>
      </div>
      
      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <div className="greeting-badge">
            <span className="wave">👋</span> Hello, I'm
          </div>

          <h1>
            <span>Ream</span> Khorn
          </h1>

          <h2>
            {text}
            <span className="cursor">|</span>
          </h2>

          <p>
            Before: simple websites. Now: modern digital products with polished UI, 
            fast performance, and scalable architecture. I build web experiences 
            that feel fresh, functional, and ready for today — designed to impress hiring teams and support product growth.
          </p>

          <div className="hero-stats">
            <div className="stat-box">
              <span className="stat-number">2+</span>
              <span className="stat-label">Years</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">15+</span>
              <span className="stat-label">Projects</span>
            </div>
            <div className="stat-box">
              <span className="stat-number">100%</span>
              <span className="stat-label">Dedicated</span>
            </div>
          </div>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View My Work
            </a>
            <a href="#contact" className="btn outline">
              Contact Me
            </a>
          </div>

          <div className="hero-socials">
            <a href="https://github.com/Ream111222333" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="https://linkedin.com/in/ream" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="#contact" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="hero-right">
          <div className="profile-card">
            <div className="profile-image-wrapper">
              <img src={profile} alt="Ream profile" />
              <div className="profile-ring"></div>
              <div className="profile-react-badge">
                <FaReact />
              </div>
            </div>
            <div className="profile-info">
              <h3>Ream</h3>
              <p className="profile-role">Full-Stack Developer</p>
              <p className="profile-location">Cambodia</p>
              <span className="availability-badge">
                <span className="pulse-dot"></span>
                Available for Work
              </span>
              <div className="tech-stack-row">
                <span className="tech-pill"><FaReact /> React</span>
                <span className="tech-pill"><SiTypescript /> TS</span>
                <span className="tech-pill"><FaNodeJs /> Node</span>
                <span className="tech-pill"><FaJsSquare /> JS</span>
              </div>
            </div>
          </div>

          {/* Floating Tech Badges - Desktop */}
          <div className="float-badge fb-react">
            <FaReact /> React
          </div>
          <div className="float-badge fb-node">
            <FaNodeJs /> Node.js
          </div>
          <div className="float-badge fb-js">
            <FaJsSquare /> JavaScript
          </div>
          <div className="float-badge fb-typescript">
            <SiTypescript /> TypeScript
          </div>
          <div className="float-badge fb-html">
            <FaHtml5 /> HTML5
          </div>
          <div className="float-badge fb-css">
            <FaCss3Alt /> CSS3
          </div>
          <div className="float-badge fb-python">
            <FaPython /> Python
          </div>

          {/* Code Window */}
          <div className="code-window">
            <div className="code-header">
              <span></span><span></span><span></span>
              <span className="code-title">developer.ts</span>
            </div>
            <pre className="code-body">
{`<Developer
  name="Ream Khorn"
  role="Full-Stack"
  skills={["React", "Node"]}
  available={true}
/>`}
            </pre>
          </div>
        </div>

      </div>

      <a href="#about" className="scroll-indicator" aria-label="Scroll down">
        <FaChevronDown />
      </a>
    </header>
  );
}

export default Headers;