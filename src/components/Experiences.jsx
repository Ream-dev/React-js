import { useEffect } from "react";
import { FaShieldAlt, FaUsers, FaPalette, FaTrophy, FaBuilding, FaLaptopCode } from "react-icons/fa";
import "../css/Services.css";
import cybersecurityImage from "../assets/cybersecurity.png";
import developYouthImage from "../assets/develop yuth of combodia.png";
import figmaWorkshopImage from "../assets/Fima desing workshop.png";
import competitionImage from "../assets/compatition with yuth of cambodia.png";
import companyVisitImage from "../assets/R1.png";
import canvaCoreImage from "../assets/canva core.png";

function Experiences() {
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

  const experiences = [
    {
      id: 1,
      icon: <FaShieldAlt />,
      title: "Cybersecurity Awareness Workshop",
      description: "Attended comprehensive workshop on cybersecurity best practices, threat detection, and security protocols for modern web applications.",
      image: cybersecurityImage,
      color: "#00d4ff",
      category: "Workshop"
    },
    {
      id: 2,
      icon: <FaUsers />,
      title: "Develop Youth of Cambodia",
      description: "Contributed to youth development programs, mentoring young developers and fostering tech education in Cambodia.",
      image: developYouthImage,
      color: "#ff6b6b",
      category: "Community"
    },
    {
      id: 3,
      icon: <FaPalette />,
      title: "Figma Design Workshop",
      description: "Participated in UI/UX fundamentals workshop, mastering Figma tools, prototyping, and user-centered design principles.",
      image: figmaWorkshopImage,
      color: "#a855f7",
      category: "Workshop"
    },
    {
      id: 4,
      icon: <FaTrophy />,
      title: "Competition with Youth of Cambodia",
      description: "Competed in national tech competitions, showcasing skills and collaborating with talented young developers across Cambodia.",
      image: competitionImage,
      color: "#f59e0b",
      category: "Competition"
    },
    {
      id: 5,
      icon: <FaBuilding />,
      title: "Company Visit",
      description: "Visited leading tech companies to gain insights into industry practices, team workflows, and professional development opportunities.",
      image: companyVisitImage,
      color: "#4ecdc4",
      category: "Industry"
    },
    {
      id: 6,
      icon: <FaLaptopCode />,
      title: "Canva Core",
      description: "Mastered Canva design tools for creating professional graphics, social media content, and visual branding materials.",
      image: canvaCoreImage,
      color: "#61dafb",
      category: "Design"
    }
  ];

  return (
    <section className="services-section" id="experiences">
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
          {experiences.map((exp, index) => (
            <div
              key={exp.id}
              className="exp-item service-item"
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
              </div>

              {/* Animated Border */}
              <div className="service-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experiences;
