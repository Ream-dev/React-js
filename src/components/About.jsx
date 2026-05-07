import { useEffect, useState } from "react";
import "../css/About.css";
import { FaReact, FaCode, FaLaptopCode, FaGraduationCap, FaNodeJs, FaDatabase, FaGitAlt, FaCloud, FaMobileAlt, FaPalette, FaChartLine, FaAward, FaRocket, FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaLanguage, FaCertificate } from "react-icons/fa";
import ProfilePhoto from "../assets/ream.png";

function About() {
  const [years, setYears] = useState(0);
  const [projects, setProjects] = useState(0);
  const [passion, setPassion] = useState(0);

  useEffect(() => {
    let y = 0, p = 0, pa = 0;

    const interval = setInterval(() => {
      if (y < 2) y++;
      if (p < 15) p++;
      if (pa < 100) pa += 4;

      setYears(y);
      setProjects(p);
      setPassion(pa);

      if (y === 2 && p === 15 && pa >= 100) clearInterval(interval);
    }, 60);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="about-section" id="about">
      {/* Hero Background */}
      <div className="hero-background">
        <div className="gradient-overlay"></div>
        <div className="particle-field">
          {[...Array(20)].map((_, i) => (
            <div key={i} className={`particle particle-${i % 4}`}></div>
          ))}
        </div>
      </div>

      <div className="about-container">
        {/* Main Hero Section */}
        <div className="hero-section">
          <div className="hero-content">
            {/* Left Content */}
            <div className="hero-left">
              <div className="hero-intro">
                <div className="intro-badge">
                  <span className="badge-text">👋 Hello, I'm</span>
                </div>
                <h1 className="hero-title">
                  <span className="title-first">Ream</span>
                  <span className="title-last">Full-Stack Developer</span>
                </h1>
                <p className="hero-subtitle">
                  Passionate about creating exceptional digital experiences through 
                  <strong> modern web technologies</strong> and <strong>innovative design</strong>
                </p>
              </div>

              {/* Quick Stats */}
              <div className="quick-stats">
                <div className="stat-item">
                  <div className="stat-number">{years}+</div>
                  <div className="stat-label">Years</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">{projects}+</div>
                  <div className="stat-label">Projects</div>
                </div>
                <div className="stat-divider"></div>
                <div className="stat-item">
                  <div className="stat-number">{passion}%</div>
                  <div className="stat-label">Dedicated</div>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="hero-actions">
                <button className="btn-primary">
                  <FaGithub /> GitHub
                </button>
                <button className="btn-secondary">
                  <FaLinkedin /> LinkedIn
                </button>
                <button className="btn-outline">
                  <FaEnvelope /> Contact
                </button>
              </div>
            </div>

            {/* Right Profile */}
            <div className="hero-right">
              <div className="profile-hero">
                <div className="profile-frame">
                  <div className="profile-image-container">
                    <img src={ProfilePhoto} alt="Ream" className="profile-image" />
                    <div className="profile-glow"></div>
                  </div>
                  <div className="profile-info-card">
                    <h3>Ream</h3>
                    <p>Full-Stack Developer</p>
                    <div className="location-info">
                      <FaMapMarkerAlt /> Cambodia
                    </div>
                    <div className="status-badge available">
                      <span className="status-dot"></span>
                      Available for Work
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skills & Education Section */}
        <div className="details-section">
          <div className="section-grid">
            {/* Education Card */}
            <div className="detail-card education-card">
              <div className="card-header">
                <div className="card-icon">
                  <FaGraduationCap />
                </div>
                <div className="card-title">
                  <h3>Education</h3>
                  <p>Professional Training</p>
                </div>
              </div>
              <div className="card-content">
                <div className="edu-item">
                  <h4>Passerelles Numériques Cambodia</h4>
                  <span className="edu-period">2026 - Present</span>
                  <div className="edu-status active">Currently Enrolled</div>
                  <p>
                    Advanced Full-Stack Web Development program with comprehensive 
                    curriculum covering modern technologies and real-world projects.
                  </p>
                </div>
              </div>
            </div>

            {/* Skills Overview */}
            <div className="detail-card skills-overview">
              <div className="card-header">
                <div className="card-icon">
                  <FaCode />
                </div>
                <div className="card-title">
                  <h3>Technical Skills</h3>
                  <p>Full-Stack Expertise</p>
                </div>
              </div>
              <div className="card-content">
                <div className="skills-categories">
                  <div className="skill-group">
                    <h5><FaReact /> Frontend</h5>
                    <div className="skill-tags">
                      <span className="tag">React</span>
                      <span className="tag">TypeScript</span>
                      <span className="tag">JavaScript</span>
                      <span className="tag">HTML/CSS</span>
                    </div>
                  </div>
                  <div className="skill-group">
                    <h5><FaNodeJs /> Backend</h5>
                    <div className="skill-tags">
                      <span className="tag">Node.js</span>
                      <span className="tag">Express</span>
                      <span className="tag">APIs</span>
                      <span className="tag">Database</span>
                    </div>
                  </div>
                  <div className="skill-group">
                    <h5><FaCloud /> Tools</h5>
                    <div className="skill-tags">
                      <span className="tag">Git</span>
                      <span className="tag">CI/CD</span>
                      <span className="tag">Cloud</span>
                      <span className="tag">Testing</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Expertise Cards */}
          <div className="expertise-section">
            <h3 className="section-title">Core Expertise</h3>
            <div className="expertise-grid">
              <div className="expertise-card frontend">
                <div className="expertise-icon">
                  <FaPalette />
                </div>
                <h4>Frontend Development</h4>
                <p>Modern React applications with responsive design and exceptional user experience</p>
                <div className="expertise-level">
                  <div className="level-bar" style={{width: '90%'}}></div>
                  <span>90%</span>
                </div>
              </div>
              <div className="expertise-card backend">
                <div className="expertise-icon">
                  <FaDatabase />
                </div>
                <h4>Backend Development</h4>
                <p>Scalable server-side applications with robust APIs and database architecture</p>
                <div className="expertise-level">
                  <div className="level-bar" style={{width: '85%'}}></div>
                  <span>85%</span>
                </div>
              </div>
              <div className="expertise-card mobile">
                <div className="expertise-icon">
                  <FaMobileAlt />
                </div>
                <h4>Mobile Responsive</h4>
                <p>Pixel-perfect mobile-first designs that work seamlessly across all devices</p>
                <div className="expertise-level">
                  <div className="level-bar" style={{width: '95%'}}></div>
                  <span>95%</span>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;