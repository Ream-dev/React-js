import { useEffect, useState } from "react";
import { FaShieldAlt, FaUsers, FaPalette, FaTrophy, FaBuilding, FaLaptopCode } from "react-icons/fa";
import "../css/Services.css";
import cybersecurityImage from "../assets/cybersecurity.png";
import developYouthImage from "../assets/develop yuth of combodia.png";
import figmaWorkshopImage from "../assets/Fima desing workshop.png";
import competitionImage from "../assets/compatition with yuth of cambodia.png";
import companyVisitImage from "../assets/R1.png";
import canvaCoreImage from "../assets/canva core.png";

function Experiences() {
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
      description: "I learned simple ways to keep websites safe and spot online risks.",
      more: "I learned about strong passwords, safe data handling, and how to check for threats in a clear, easy way.",
      image: cybersecurityImage,
      color: "#00d4ff",
      category: "Workshop"
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Develop Youth of Cambodia",
      description: "I helped young people learn coding and work together in tech activities.",
      more: "I taught and guided students, shared new ideas, and helped build their confidence with computers.",
      image: developYouthImage,
      color: "#ff6b6b",
      category: "Community"
    },
    {
      id: 3,
      icon: <FaPalette />,
      title: "Figma Design Workshop",
      description: "I learned how to make clean app screens and easy designs with Figma.",
      more: "I practiced drawing layouts, choosing colors, and making buttons and pages look simple and strong.",
      image: figmaWorkshopImage,
      color: "#a855f7",
      category: "Workshop"
    },
    {
      id: 4,
      icon: <FaTrophy />,
      title: "Competition with Youth of Cambodia",
      description: "I joined a tech contest and showed what I could build.",
      more: "I worked with a team, shared ideas, and learned how to present my project in a calm way.",
      image: competitionImage,
      color: "#f59e0b",
      category: "Competition"
    },
    {
      id: 5,
      icon: <FaBuilding />,
      title: "Company Visit",
      description: "I visited tech companies and saw how teams make real products.",
      more: "I watched how people plan work, use tools, and talk together to make good websites and apps.",
      image: companyVisitImage,
      color: "#4ecdc4",
      category: "Industry"
    },
    {
      id: 6,
      icon: <FaLaptopCode />,
      title: "Canva Core",
      description: "I learned to make simple graphics and content for social media.",
      more: "I used Canva to build nice pictures, banners, and visual content that looks modern and clean.",
      image: canvaCoreImage,
      color: "#61dafb",
      category: "Design"
    }
  ];

  return (
    <section className="services-section" id="Experiences">
      <div className="services-container">
        {/* Header Section */}
        <div className="services-header">
          <div className="header-badge">
            <span className="badge-text">🎯 Additional Experiences</span>
          </div>
          <h2 className="section-title">
            <span className="title-main">My Journey</span>
            <span className="title-accent">& Achievements</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Exploring new skills, participating in workshops, and contributing to the tech community
          </p>
        </div>

        {/* Experiences Grid */}
        <div className="services-grid">
          {experiences.map((exp, index) => {
            const isExpanded = expandedId === exp.id;
            return (
              <div
                key={exp.id}
                className={`exp-item service-item ${isExpanded ? "expanded" : ""}`}
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

export default Experiences;
