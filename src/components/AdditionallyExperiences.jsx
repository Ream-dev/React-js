import { useEffect, useRef } from "react";
import {
  FaShieldAlt,
  FaUsers,
  FaChalkboardTeacher,
  FaTrophy,
  FaBuilding,
  FaPalette
} from "react-icons/fa";
import "../css/AdditionallyExperiences.css";

function AdditionallyExperiences() {
  const containerRef = useRef(null);

  useEffect(() => {
    const items = containerRef.current?.querySelectorAll(".experience-card");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.15 }
    );

    items?.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 1,
      icon: <FaShieldAlt />,
      title: "Cybersecurity Awareness Workshop",
      description:
        "Learned cybersecurity fundamentals, threat detection, and digital safety practices.",
      image: "/cybersecurity.png",
      color: "#ef4444",
      level: 95,
      year: "2026"
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Develop Youth of Cambodia",
      description:
        "Contributed to youth tech education and skill development programs.",
      image: "/develop yuth of combodia.png",
      color: "#3b82f6",
      level: 90,
      year: "2026"
    },
    {
      id: 3,
      icon: <FaChalkboardTeacher />,
      title: "Figma UI/UX Workshop",
      description:
        "Practiced UI/UX design, wireframing, and prototyping using Figma.",
      image: "/Fima desing workshop.png",
      color: "#a855f7",
      level: 88,
      year: "2026"
    },
    {
      id: 4,
      icon: <FaTrophy />,
      title: "Innovation Competition",
      description:
        "Competed in national-level tech and innovation challenges.",
      image: "/compatition with yuth of cambodia.png",
      color: "#f59e0b",
      level: 85,
      year: "2026"
    },
    {
      id: 5,
      icon: <FaBuilding />,
      title: "Tech Company Visit",
      description:
        "Explored real-world company workflows and engineering environments.",
      image: "/R1.png",
      color: "#10b981",
      level: 80,
      year: "2026"
    },
    {
      id: 6,
      icon: <FaPalette />,
      title: "Canva Design Mastery",
      description:
        "Created professional graphics and presentation designs using Canva.",
      image: "/canva core.png",
      color: "#ec4899",
      level: 92,
      year: "2026"
    }
  ];

  return (
    <section className="exp-section" id="experiences">
      <div className="exp-container" ref={containerRef}>
        
        {/* Header */}
        <div className="exp-header">
          <span className="exp-badge">🎯 Experiences</span>
          <h2>
            Beyond <span>Classroom Learning</span>
          </h2>
          <p>
            Workshops, competitions, and real-world activities shaping my journey
          </p>
        </div>

        {/* Grid */}
        <div className="exp-grid">
          {experiences.map((exp, i) => (
            <div
              key={exp.id}
              className="experience-card"
              style={{
                "--accent": exp.color,
                "--delay": `${i * 0.08}s`
              }}
            >
              {/* glow */}
              <div className="card-glow"></div>

              {/* image */}
              <div className="card-image">
                <img
                  src={exp.image}
                  alt={exp.title}
                  onError={(e) => (e.target.style.display = "none")}
                />
                <div className="image-fade"></div>
              </div>

              {/* content */}
              <div className="card-body">
                <div className="card-top">
                  <div className="icon">{exp.icon}</div>
                  <span className="year">{exp.year}</span>
                </div>

                <h3>{exp.title}</h3>
                <p>{exp.description}</p>

                {/* progress */}
                <div className="progress">
                  <div
                    className="progress-fill"
                    style={{ width: `${exp.level}%` }}
                  ></div>
                </div>

                <div className="progress-label">
                  <span>Progress</span>
                  <b>{exp.level}%</b>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdditionallyExperiences;