import { useEffect, useRef } from "react";
import "../css/Project.css";

function Projects() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.2 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const projects = [
    {
      title: "HealthConnect Portal",
      year: "2025",
      desc: "Full-stack patient system with authentication, CRUD, and appointment scheduling.",
      tech: ["React", "PHP", "MySQL", "REST API"],
    },
    {
      title: "Achar Booking System",
      year: "2025",
      desc: "Booking platform with user authentication and admin dashboard management.",
      tech: ["React", "Node.js", "Database"],
    },
    {
      title: "Achar Booking System",
      year: "2025",
      desc: "Booking platform with user authentication and admin dashboard management.",
      tech: ["Vue .js", "Node.js", "Mysql","Redis"],
    },
    {
      title: "Achar Booking System",
      year: "2025",
      desc: "Booking platform with user authentication and admin dashboard management.",
      tech: ["Pythoon", "Javacript", "Database"],
    },
  ];

  return (
    <section className="projects" id="projects">
      <h2 className="section-title">Featured Projects</h2>

      <div className="timeline">
        {projects.map((project, index) => (
          <div
            key={index}
            ref={(el) => (itemsRef.current[index] = el)}
            className={`timeline-item hidden ${
              index % 2 === 0 ? "left" : "right"
            }`}
          >
            <div className="timeline-dot"></div>

            <div className="timeline-content">
              <h3>{project.title}</h3>
              <span className="project-date">{project.year}</span>
              <p>{project.desc}</p>

              <div className="tech-stack">
                {project.tech.map((tech, i) => (
                  <span key={i}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href="#">View Repository</a>
                <a href="#">Live Demo</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;