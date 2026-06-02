import "../css/About.css";
import { FaReact, FaCode, FaLaptopCode, FaGraduationCap, FaNodeJs, FaDatabase, FaGitAlt, FaCloud, FaMobileAlt, FaPalette, FaChartLine, FaAward, FaRocket, FaGithub, FaLanguage, FaCertificate, FaHtml5, FaCss3Alt, FaJsSquare, FaPython, FaDocker, FaAws, FaFigma, FaServer, FaTools, FaStar, FaTrophy, FaBriefcase, FaCalendarAlt, FaWordpress, FaPhp, FaVuejs } from "react-icons/fa";

function About() {

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
        <div className="about-header">
          <h2 className="section-heading">About Me</h2>
          <p className="section-subheading">Education, skills, and journey</p>
        </div>

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
                    Bachelor's Degree in Full-Stack Web Development program with comprehensive 
                    curriculum covering modern technologies and real-world projects.
                  </p>
                </div>
                <div className="edu-item">
                  <h4>High School Diploma</h4>
                  <span className="edu-period">2021 - 2024</span>
                  <div className="edu-status graduated">Graduated 2024</div>
                  <p>
                    Completed high school with strong results in science, mathematics, and digital 
                    literacy, building a foundation for modern web development and technology studies.
                  </p>
                </div>
              </div>
            </div>

            {/* Languages & Technologies */}
            <div className="detail-card languages-card">
              <div className="card-header">
                <div className="card-icon">
                  <FaCode />
                </div>
                <div className="card-title">
                  <h3>Languages & Technologies</h3>
                  <p>What I've Learned</p>
                </div>
              </div>
              <div className="card-content">
                <div className="languages-grid">
                  <div className="lang-item"><FaVuejs className="lang-icon vue" /><span>Vue.js</span></div>
                  <div className="lang-item"><FaJsSquare className="lang-icon ts" /><span>TypeScript</span></div>
                  <div className="lang-item"><FaPhp className="lang-icon php" /><span>PHP</span></div>
                  <div className="lang-item"><FaNodeJs className="lang-icon node" /><span>Node.js</span></div>
                  <div className="lang-item"><FaDatabase className="lang-icon mongo" /><span>MongoDB</span></div>
                  <div className="lang-item"><FaDatabase className="lang-icon sql" /><span>SQL</span></div>
                  <div className="lang-item"><FaAws className="lang-icon aws" /><span>AWS</span></div>
                  <div className="lang-item"><FaJsSquare className="lang-icon js" /><span>JavaScript</span></div>
                  <div className="lang-item"><FaHtml5 className="lang-icon html" /><span>HTML</span></div>
                  <div className="lang-item"><FaCss3Alt className="lang-icon css" /><span>CSS</span></div>
                  <div className="lang-item"><FaPython className="lang-icon python" /><span>Python</span></div>
                  <div className="lang-item"><FaPhp className="lang-icon laravel" /><span>Laravel</span></div>
                  <div className="lang-item"><FaWordpress className="lang-icon wp" /><span>WordPress</span></div>
                  <div className="lang-item"><FaFigma className="lang-icon figma" /><span>Figma</span></div>
                  <div className="lang-item"><FaServer className="lang-icon vercel" /><span>Vercel</span></div>
                  <div className="lang-item"><FaChartLine className="lang-icon data" /><span>Data Analysis</span></div>
                  <div className="lang-item"><FaGithub className="lang-icon github" /><span>GitHub</span></div>
                  <div className="lang-item"><FaGitAlt className="lang-icon git" /><span>Git</span></div>
                  <div className="lang-item"><FaServer className="lang-icon laragon" /><span>Laragon</span></div>
                </div>
              </div>
            </div>
          </div>

          {/* Achievements Highlights */}
          <div className="achievements-section">
            <div className="achievement-item">
              <FaTrophy className="achievement-icon" />
              <span className="achievement-value">12+</span>
              <span className="achievement-label">Projects Completed</span>
            </div>
            <div className="achievement-item">
              <FaBriefcase className="achievement-icon" />
              <span className="achievement-value">2+</span>
              <span className="achievement-label">Years Experience</span>
            </div>
            <div className="achievement-item">
              <FaStar className="achievement-icon" />
              <span className="achievement-value">100%</span>
              <span className="achievement-label">Client Satisfaction</span>
            </div>
            <div className="achievement-item">
              <FaAward className="achievement-icon" />
              <span className="achievement-value">4+</span>
              <span className="achievement-label">Certifications</span>
            </div>
          </div>

          {/* Career Journey Timeline */}
          <div className="journey-section">
            <h3 className="section-title">My Journey</h3>
            <div className="journey-timeline">
              <div className="journey-item">
                <div className="journey-marker"></div>
                <div className="journey-content">
                  <div className="journey-header">
                    <h4>Passerelles Numeriques Cambodia</h4>
                    <span className="journey-date"><FaCalendarAlt /> 2026 - Present</span>
                  </div>
                  <span className="journey-tag">Currently Enrolled</span>
                  <p>Bachelor's Degree in Full-Stack Web Development program focusing on modern technologies, real-world projects, and professional soft skills.</p>
                </div>
              </div>
              <div className="journey-item">
                <div className="journey-marker"></div>
                <div className="journey-content">
                  <div className="journey-header">
                    <h4>High School Graduation</h4>
                    <span className="journey-date"><FaCalendarAlt /> 2021 - 2024</span>
                  </div>
                  <span className="journey-tag past">2024 Graduate</span>
                  <p>Graduated high school in 2024 with a focus on science, mathematics, and digital skills that support a modern development career.</p>
                </div>
              </div>
              <div className="journey-item">
                <div className="journey-marker"></div>
                <div className="journey-content">
                  <div className="journey-header">
                    <h4>Self-Taught Developer</h4>
                    <span className="journey-date"><FaCalendarAlt /> 2025 - 2026</span>
                  </div>
                  <span className="journey-tag past">Foundation</span>
                  <p> HTML, CSS, JavaScript fundamentals and built portfolio projects independently through online resources and documentation.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Core Services Cards */}
          <div className="expertise-section">
            <h3 className="section-title">What I Do</h3>
            <div className="expertise-grid">
              <div className="expertise-card frontend">
                <div className="expertise-icon"><FaPalette /></div>
                <h4>Frontend Development</h4>
                <p>Modern React applications with responsive design and exceptional user experience</p>
                <div className="expertise-level"><div className="level-bar" style={{width: '90%'}}></div><span>90%</span></div>
              </div>
              <div className="expertise-card backend">
                <div className="expertise-icon"><FaServer /></div>
                <h4>Backend Development</h4>
                <p>Scalable server-side applications with robust APIs and database architecture</p>
                <div className="expertise-level"><div className="level-bar" style={{width: '85%'}}></div><span>85%</span></div>
              </div>
              <div className="expertise-card mobile">
                <div className="expertise-icon"><FaMobileAlt /></div>
                <h4>Mobile Responsive</h4>
                <p>Pixel-perfect mobile-first designs that work seamlessly across all devices</p>
                <div className="expertise-level"><div className="level-bar" style={{width: '95%'}}></div><span>95%</span></div>
              </div>
              <div className="expertise-card tools">
                <div className="expertise-icon"><FaTools /></div>
                <h4>DevOps & Tools</h4>
                <p>CI/CD pipelines, version control, cloud deployment and development workflows</p>
                <div className="expertise-level"><div className="level-bar" style={{width: '80%'}}></div><span>80%</span></div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;