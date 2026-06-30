import { useState, useEffect, useRef } from "react";
import "../css/Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCheckCircle, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");
  const [statusType, setStatusType] = useState("");
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
      { threshold: 0.15 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const sanitize = (str) => {
    return str
      .replace(/<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi, "")
      .replace(/<iframe\b[^<]*(?:(?!<\/iframe>)<[^<]*)*<\/iframe>/gi, "")
      .replace(/javascript:/gi, "")
      .replace(/on\w+=/gi, "")
      .trim();
  };

  const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (value.length > 1000) return;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const name = sanitize(formData.name);
    const email = formData.email.trim();
    const message = sanitize(formData.message);

    if (!name || !email || !message) {
      setStatus("Please fill in all fields.");
      setStatusType("error");
      return;
    }
    if (name.length < 2) {
      setStatus("Name must be at least 2 characters.");
      setStatusType("error");
      return;
    }
    if (!isValidEmail(email)) {
      setStatus("Please enter a valid email address.");
      setStatusType("error");
      return;
    }
    if (message.length < 10) {
      setStatus("Message must be at least 10 characters.");
      setStatusType("error");
      return;
    }

    setStatus("Opening your email client...");
    setStatusType("success");

    const mailtoLink = `mailto:reamkhorn12345@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  const contacts = [
    {
      id: 1,
      icon: <FaEnvelope />,
      label: "Email",
      value: "reamkhorn12345@gmail.com",
      href: "mailto:reamkhorn12345@gmail.com",
      copy: "reamkhorn12345@gmail.com",
      more: "Tap to copy email or press the button to open your mail app.",
      color: "#60a5fa",
    },
    {
      id: 2,
      icon: <FaPhone />,
      label: "Phone",
      value: "+855 863 393 350",
      href: "tel:+855863393350",
      copy: "+855 863 393 350",
      more: "Tap to copy the number. You can call or message me anytime.",
      color: "#34d399",
    },
    {
      id: 3,
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/ream",
      href: "https://linkedin.com/in/ream",
      more: "Visit my LinkedIn to see my experience and connect.",
      color: "#0ea5e9",
    },
    {
      id: 4,
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/Ream111222333",
      href: "https://github.com/Ream-dev",
      more: "See my code and projects on GitHub.",
      color: "#a78bfa",
    },
  ];

  const [expandedContact, setExpandedContact] = useState(null);

  const toggleContact = (id) => {
    setExpandedContact((prev) => (prev === id ? null : id));
  };

  return (
    <section className="contact-section" id="contact">
      <div className="contact-container">
        {/* Header */}
        <div className="contact-header">
          <div className="header-badge">
            <span className="badge-text">📬 Get In Touch</span>
          </div>
          <h2 className="section-title">
            <span className="title-main">Let's</span>
            <span className="title-accent">Collaborate</span>
          </h2>
          <div className="title-underline"></div>
          <p className="section-subtitle">
            Have a project in mind? I'm always open to discussing new opportunities and ideas.
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="contact-grid">
          {/* Contact Info Cards */}
          <div className="contact-info" ref={(el) => (itemsRef.current[0] = el)}>
            <h3 className="contact-subtitle">Contact Info</h3>
            <div className="info-grid">
              {contacts.map((c, i) => {
                const isExpanded = expandedContact === c.id;
                const isExternal = c.href && c.href.startsWith("http");
                return (
                  <a
                    key={c.id}
                    href={c.href}
                    target={isExternal ? "_blank" : undefined}
                    rel={isExternal ? "noopener noreferrer" : undefined}
                    className={`info-card ${isExpanded ? "expanded" : ""}`}
                    style={{ '--contact-color': c.color, '--delay': `${i * 0.1}s` }}
                    onClick={(e) => {
                      if (c.copy) {
                        e.preventDefault();
                        copyToClipboard(c.copy);
                      }
                    }}
                    ref={(el) => (itemsRef.current[i + 1] = el)}
                  >
                    <div className="info-glow"></div>
                    <div className="info-background"></div>
                    <div className="info-icon">
                      {c.icon}
                    </div>
                    <div className="info-details">
                      <div className="info-header">
                        <div>
                          <span className="info-label">{c.label}</span>
                          <span className="info-value">{c.value}</span>
                        </div>
                        <button
                          type="button"
                          className="info-toggle"
                          onClick={(ev) => {
                            ev.preventDefault();
                            ev.stopPropagation();
                            toggleContact(c.id);
                          }}
                          aria-expanded={isExpanded}
                        >
                          {isExpanded ? "Hide" : "Show"}
                        </button>
                      </div>
                      {isExpanded && c.more && <div className="info-more">{c.more}</div>}
                    </div>
                    <div className="info-border"></div>
                  </a>
                );
              })}
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper" ref={(el) => (itemsRef.current[itemsRef.current.length] = el)}>
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-header">
                <h3 className="form-title">Send a Message</h3>
                <p className="form-subtitle">I'll get back to you as soon as possible</p>
              </div>
              <div className="form-grid">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Your Name</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={handleChange}
                      required
                    />
                    <span className="input-border"></span>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="email" className="form-label">Your Email</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      placeholder="john@example.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                    />
                    <span className="input-border"></span>
                  </div>
                </div>
                <div className="form-group full-width">
                  <label htmlFor="message" className="form-label">Message</label>
                  <div className="input-wrapper">
                    <textarea
                      id="message"
                      name="message"
                      placeholder="Tell me about your project..."
                      rows="5"
                      value={formData.message}
                      onChange={handleChange}
                      required
                    ></textarea>
                    <span className="input-border"></span>
                  </div>
                </div>
              </div>
              <button type="submit" className="form-submit">
                <FaPaperPlane /> Send Message
                <span className="submit-glow"></span>
              </button>
              {status && (
                <p className={`form-status ${statusType}`}>
                  {statusType === "success" && <FaCheckCircle />} {status}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;