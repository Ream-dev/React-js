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
      title: "bussiness system for selling product",
      year: "2025",
      desc: "Full-stack product selling system with user authentication and admin dashboard statistics.",
      tech: ["React", "typescript", "github", "Tailwind CSS"],
      repository: "https://github.com/reamkhorn12345-art/potiofilo-ream-html.git",
      liveDemo: "https://bussiness-85po.vercel.app/ ",
    },
    {
      title: "weather app",
      year: "2025",
      desc: "A simple weather application that displays current conditions and forecasts.",
      tech: ["javascript", "OpenWeather API", "CSS", "HTML", "GitHub", "postman"],
      repository: "https://github.com/Ream111222333/Weather-group2.git",
      liveDemo: "https://weather-system-group2.vercel.app/",
    },
    {
      title: "Achar Booking System",
      year: "2026",
      desc: "Booking platform with user authentication and admin dashboard management.",
      tech: ["Vue .js", "laravel", "Mysql", "Redis", "REST API", "Jira", "GitHub", "github", "postman"],
      repository: "https://github.com/Jame2026/Achar-Event-Booking.git",
      liveDemo: "https://achar-event-booking-232f.vercel.app/",
    },
    {
      title: "E-commerse Platform",
      year: "2025",
      desc: "E-commerce platform with product management, shopping cart, and checkout functionality.",
      tech: ["React", "Node.js", "MongoDB", "Stripe API"],
      repository: "https://github.com/Ream111222333/v0-e-commerce-website-build.git",
      liveDemo: "https://e-commersream.vercel.app",
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
            className={`timeline-item hidden ${index % 2 === 0 ? "left" : "right"
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
                <a href={project.repository} target="_blank" rel="noopener noreferrer">
                  View Repository
                </a>

                <a href={project.liveDemo} target="_blank" rel="noopener noreferrer">
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;