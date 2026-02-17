

import { useEffect } from "react";
import "../css/Services.css";

function Services() {
  useEffect(() => {
    const serviceItems = document.querySelectorAll(".service-item");

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

    serviceItems.forEach((item) => observer.observe(item));

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      id: 1,
      icon: "💻",
      title: "Frontend Development",
      description: "Modern, responsive UI using React, HTML, CSS, and JavaScript with pixel-perfect designs and smooth interactions."
    },
    {
      id: 2,
      icon: "🎨",
      title: "Backend Development",
      description: "Building robust APIs and server-side logic with Node.js, WordPress, databases, and MongoDB for scalable solutions."
    },
    {
      id: 3,
      icon: "⚙️",
      title: "Web Applications",
      description: "Interactive and dynamic web apps with clean architecture, best practices, and maintainable code structure."
    },
    {
      id: 4,
      icon: "🚀",
      title: "Performance & UX",
      description: "Fast loading times, smooth animations, optimized code, and exceptional user experience across all devices."
    },
    {
      id: 5,
      icon: "🎯",
      title: "UI/UX Design",
      description: "Professional interface design focusing on user-centric solutions, accessibility, and modern design principles."
    },
    {
      id: 6,
      icon: "📱",
      title: "Mobile-First Design",
      description: "Responsive designs that work flawlessly on all devices and screen sizes with enhanced performance."
    }
  ];

  return (
    <section className="services-section" id="services">
      <div className="services-container">
        <h2 className="section-title">My Services</h2>
        <div className="title-underline"></div>
        <p className="section-subtitle">
          What I can help you build with modern web technologies
        </p>

        <div className="services-grid">
          {services.map((service) => (
            <div key={service.id} className="service-item">
              <div className="service-icon">{service.icon}</div>
              <div className="service-content">
                <h3>{service.title}</h3>
                <p>{service.description}</p>
              </div>
              <div className="service-border"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
