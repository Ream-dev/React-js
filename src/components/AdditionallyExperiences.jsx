import { useEffect } from "react";
import { FaShieldAlt, FaUsers, FaChalkboardTeacher, FaTrophy, FaBuilding, FaPalette } from "react-icons/fa";
import "../css/AdditionallyExperiences.css";

function AdditionallyExperiences() {
  useEffect(() => {
    const experienceItems = document.querySelectorAll(".experience-item");

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

    experienceItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const experiences = [
    {
      id: 1,
      icon: <FaShieldAlt />,
      title: "Cybersecurity Awareness Workshop",
      description: "Attended comprehensive workshop covering cybersecurity fundamentals, threat awareness, and best practices for digital security.",
      image: "/cybersecurity.png",
      color: "#ef4444",
      level: 95,
      year: "2026"
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Develop Youth of Cambodia",
      description: "Contributed to youth development programs focused on technology education and skill building for young Cambodians.",
      image: "/develop yuth of combodia.png",
      color: "#3b82f6",
      level: 90,
      year: "2026"
    },
    {
      id: 3,
      icon: <FaChalkboardTeacher />,
      title: "Figma Design Workshop",
      subtitle: "UI/UX Fundamentals",
      description: "Participated in intensive Figma design workshop learning UI/UX principles, prototyping, and modern design workflows.",
      image: "/Fima desing workshop.png",
      color: "#a855f7",
      level: 88,
      year: "2026"
    },
    {
      id: 4,
      icon: <FaTrophy />,
      title: "Competition with Youth of Cambodia",
      description: "Competed in technology and innovation challenges alongside talented youth from across Cambodia.",
      image: "/compatition with yuth of cambodia.png",
      color: "#f59e0b",
      level: 85,
      year: "2026"
    },
    {
      id: 5,
      icon: <FaBuilding />,
      title: "Company Visit",
      description: "Visited leading tech companies to gain insights into industry practices, workflows, and professional environments.",
      image: "/R1.png",
      color: "#10b981",
      level: 80,
      year: "2026"
    },
    {
      id: 6,
      icon: <FaPalette />,
      title: "Canva Core",
      description: "Mastered Canva design platform for creating professional graphics, presentations, and visual content.",
      image: "/canva core.png",
      color: "#ec4899",
      level: 92,
      year: "2026"
    }
  ];

  return (
    <section className="experiences-section" id="experiences">
      <div className="experiences-container">
        {/* Header Section */}
        <div className="experiences-header">
          <div className="header-badge">
            <span className="badge-text">🎯 Additional Experiences</span>
          </div>
          <h2 className="section-title">
            <span className="title-main">Beyond The</span>
            <span className="title-accent">Classroom</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Workshops, competitions, and activities that have shaped my professional journey
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="experiences-grid">
          {experiences.map((experience, index) => (
            <div
              key={experience.id}
              className="experience-item"
              style={{ '--experience-color': experience.color, '--delay': `${index * 0.1}s` }}
            >
              <div className="experience-glow"></div>
              <div className="experience-background"></div>
              
              {/* Experience Image */}
              <div className="experience-image-container">
                <img 
                  src={experience.image} 
                  alt={experience.title}
                  className="experience-image"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.classList.add('no-image');
                  }}
                />
                <div className="image-overlay"></div>
              </div>
              
              {/* Experience Header */}
              <div className="experience-header">
                <div className="experience-icon-container">
                  <div className="experience-icon">
                    {experience.icon}
                  </div>
                  <div className="icon-glow"></div>
                </div>
                <div className="experience-meta">
                  <h3 className="experience-title">{experience.title}</h3>
                  {experience.subtitle && (
                    <span className="experience-subtitle">{experience.subtitle}</span>
                  )}
                  <div className="experience-stats">
                    <span className="stat-year">{experience.year}</span>
                    <span className="stat-level">{experience.level}% Completion</span>
                  </div>
                </div>
              </div>

              {/* Experience Content */}
              <div className="experience-content">
                <p className="experience-description">{experience.description}</p>
                
                {/* Progress Bar */}
                <div className="progress-container">
                  <div className="progress-bar">
                    <div className="progress-fill" style={{ width: `${experience.level}%` }}></div>
                  </div>
                  <span className="progress-text">{experience.level}%</span>
                </div>
              </div>

              {/* Animated Border */}
              <div className="experience-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default AdditionallyExperiences;
