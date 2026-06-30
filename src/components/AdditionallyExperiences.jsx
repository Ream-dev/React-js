import { useEffect, useState } from "react";
import { FaShieldAlt, FaUsers, FaPalette, FaTrophy, FaBuilding, FaLaptopCode } from "react-icons/fa";
import "../css/AdditionallyExperiences.css";
import cybersecurityImage from "../assets/cybersecurity.png";
import developYouthImage from "../assets/develop yuth of combodia.png";
import figmaWorkshopImage from "../assets/Fima desing workshop.png";
import competitionImage from "../assets/compatition with yuth of cambodia.png";
import companyVisitImage from "../assets/R1.png";
import canvaCoreImage from "../assets/canva core.png";

function AdditionallyExperiences() {
  const [expandedId, setExpandedId] = useState(null);

  useEffect(() => {
    const expItems = document.querySelectorAll(".exp-item");

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

    expItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const toggleExpand = (id) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const experiences = [
    {
      id: 1,
      icon: <FaShieldAlt />,
      title: "Cybersecurity Awareness Workshop",
      description: "Learned cybersecurity fundamentals, threat detection, and digital safety practices.",
      more: "Deep-dived into network security, encryption methods, and incident response protocols through hands-on labs.",
      image: cybersecurityImage,
      color: "#00d4ff",
      category: "Workshop",
      level: 95,
      year: "2026"
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Develop Youth of Cambodia",
      description: "Contributed to youth tech education and skill development programs.",
      more: "Mentored students in programming fundamentals, organized coding bootcamps, and built community tech initiatives.",
      image: developYouthImage,
      color: "#ff6b6b",
      category: "Community",
      level: 90,
      year: "2026"
    },
    {
      id: 3,
      icon: <FaPalette />,
      title: "Figma UI/UX Workshop",
      description: "Practiced UI/UX design, wireframing, and prototyping using Figma.",
      more: "Mastered design systems, component libraries, and interactive prototyping for real-world applications.",
      image: figmaWorkshopImage,
      color: "#a855f7",
      category: "Workshop",
      level: 88,
      year: "2026"
    },
    {
      id: 4,
      icon: <FaTrophy />,
      title: "Innovation Competition",
      description: "Competed in national-level tech and innovation challenges.",
      more: "Built and pitched a full-stack solution, collaborating with cross-functional teams under tight deadlines.",
      image: competitionImage,
      color: "#f59e0b",
      category: "Competition",
      level: 85,
      year: "2026"
    },
    {
      id: 5,
      icon: <FaBuilding />,
      title: "Tech Company Visit",
      description: "Explored real-world company workflows and engineering environments.",
      more: "Shadowed senior engineers, attended architecture reviews, and learned CI/CD and agile practices firsthand.",
      image: companyVisitImage,
      color: "#4ecdc4",
      category: "Industry",
      level: 80,
      year: "2026"
    },
    {
      id: 6,
      icon: <FaLaptopCode />,
      title: "Canva Design Mastery",
      description: "Created professional graphics and presentation designs using Canva.",
      more: "Designed brand assets, social media campaigns, and marketing collateral following modern design principles.",
      image: canvaCoreImage,
      color: "#61dafb",
      category: "Design",
      level: 92,
      year: "2026"
    }
  ];

  return (
    <section className="exp-section" id="experiences">
      <div className="exp-container">
        {/* Header Section */}
        <div className="exp-header">
          <div className="header-badge">
            <span className="badge-text">🎯 Additional Experiences</span>
          </div>
          <h2 className="section-title">
            <span className="title-main">Beyond</span>
            <span className="title-accent">Classroom Learning</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Workshops, competitions, and real-world activities shaping my journey
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="exp-grid">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                className={`exp-item ${isExpanded ? "expanded" : ""}`}
                style={{ '--service-color': exp.color, '--delay': `${index * 0.1}s` }}
              >
                <div className="service-glow"></div>
                <div className="service-background"></div>
                
                {/* Image Section */}
                <div className="exp-image-container">
                  <img 
                    src={exp.image} 
                    alt={exp.title}
                    className="exp-image"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextElementSibling.style.display = 'flex';
                    }}
                  />
                  <div className="exp-icon-fallback" style={{ display: 'none' }}>
                    {exp.icon}
                  </div>
                  <div className="exp-category-badge">
                    {exp.category}
                  </div>
                </div>

                {/* Content Section */}
                <div className="exp-content">
                  <h3 className="exp-title">{exp.title}</h3>
                  <p className="exp-description">{exp.description}</p>
                  {isExpanded && <p className="exp-more">{exp.more}</p>}
                  
                  {/* Progress Bar */}
                  <div className="progress-container">
                    <div className="progress-bar">
                      <div 
                        className="progress-fill" 
                        style={{ width: `${exp.level}%` }}
                      ></div>
                    </div>
                    <span className="progress-text">{exp.level}%</span>
                  </div>

                  <button
                    type="button"
                    className="exp-toggle-btn"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                      toggleExpand(exp.id);
                    }}
                    aria-expanded={isExpanded}
                  >
                    {isExpanded ? "Show less" : "See more"}
                  </button>
                </div>

                {/* Animated Border */}
                <div className="service-border"></div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default AdditionallyExperiences;