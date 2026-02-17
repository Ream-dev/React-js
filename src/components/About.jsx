import { useEffect, useState } from "react";
import "../css/About.css";
import { FaReact, FaCode, FaLaptopCode, FaGraduationCap } from "react-icons/fa";
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
      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">
          <span className="section-tag">ABOUT ME</span>
          <h2>Building Modern & Scalable Web Applications</h2>

          <p className="about-description">
            I'm <strong>Ream</strong>, a passionate Frontend Developer focused on
            creating high-performance and user-friendly web applications.
            I care deeply about clean code, UI precision, and delivering
            seamless digital experiences.
          </p>

          {/* Stats */}
          <div className="about-stats">
            <div className="stat">
              <h3>{years}+</h3>
              <p>Years Learning</p>
            </div>
            <div className="stat">
              <h3>{projects}+</h3>
              <p>Projects Completed</p>
            </div>
            <div className="stat">
              <h3>{passion}%</h3>
              <p>Dedication</p>
            </div>
          </div>

          {/* Education */}
          <div className="education">
            <h3><FaGraduationCap /> Education</h3>

            <div className="education-card">
              <h4>Passerelles Numériques Cambodia (PNC)</h4>
              <span className="edu-year">2022 - Present</span>

              <p>
                Currently pursuing professional IT training specializing in 
                Web Development. The program emphasizes technical excellence, 
                real-world project experience, teamwork, and professional growth.
              </p>

              <ul>
                <li>✔ Frontend Development (React, JavaScript, HTML, CSS)</li>
                <li>✔ Backend Fundamentals & Databases</li>
                <li>✔ UI/UX Design & Figma</li>
                <li>✔ Agile & Scrum Team Collaboration</li>
                <li>✔ DevOps & Deployment Basics</li>
              </ul>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">
          <div className="profile-card">
            <img src={ProfilePhoto} alt="Ream Profile" />
          </div>

          <div className="skills-cards">
            <div className="skill-card">
              <FaCode className="icon" />
              <h4>Clean Code</h4>
              <p>Readable, maintainable, and scalable architecture.</p>
            </div>

            <div className="skill-card">
              <FaReact className="icon" />
              <h4>React Development</h4>
              <p>Modern SPAs with reusable components.</p>
            </div>

            <div className="skill-card">
              <FaLaptopCode className="icon" />
              <h4>Responsive Design</h4>
              <p>Pixel-perfect across desktop, tablet, and mobile.</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}

export default About;