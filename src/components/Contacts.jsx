import { useState } from "react";
import "../css/Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCheckCircle, FaPaperPlane } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState("");

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
      return;
    }
    if (name.length < 2) {
      setStatus("Name must be at least 2 characters.");
      return;
    }
    if (!isValidEmail(email)) {
      setStatus("Please enter a valid email address.");
      return;
    }
    if (message.length < 10) {
      setStatus("Message must be at least 10 characters.");
      return;
    }

    setStatus("Opening your email client...");

    const mailtoLink = `mailto:reamkhorn12345@gmail.com?subject=Portfolio Contact from ${encodeURIComponent(name)}&body=${encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`)}`;
    window.location.href = mailtoLink;
  };

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  const contacts = [
    {
      icon: <FaEnvelope />,
      label: "Email",
      value: "reamkhorn12345@gmail.com",
      href: "mailto:reamkhorn12345@gmail.com",
      copy: "reamkhorn12345@gmail.com",
      more: "Tap to copy email or press the button to open your mail app.",
    },
    {
      icon: <FaPhone />,
      label: "Phone",
      value: "+855 863 393 350",
      href: "tel:+855863393350",
      copy: "+855 863 393 350",
      more: "Tap to copy the number. You can call or message me anytime.",
    },
    {
      icon: <FaLinkedin />,
      label: "LinkedIn",
      value: "linkedin.com/in/ream",
      href: "https://linkedin.com/in/ream",
      more: "Visit my LinkedIn to see my experience and connect.",
    },
    {
      icon: <FaGithub />,
      label: "GitHub",
      value: "github.com/Ream111222333",
      href: "https://github.com/Ream111222333",
      more: "See my code and projects on GitHub.",
    },
  ];

  const [expandedContact, setExpandedContact] = useState(null);

  const toggleContact = (idx) => {
    setExpandedContact((prev) => (prev === idx ? null : idx));
  };

  return (
    <section className="contact" id="contact">
      {/* CTA Hero */}
      <div className="contact-cta">
        <h2>Ready to start your project?</h2>
        <p>Let's discuss how I can help bring your ideas to life</p>
        <a href="#contact-form" className="cta-button">
          <FaPaperPlane /> Get In Touch
        </a>
      </div>

      <div className="contact-container" id="contact-form">
        {/* Contact Cards */}
        <div className="contact-info">
          <h3 className="contact-subtitle">Contact Info</h3>
          <div className="info-grid">
            {contacts.map((c, i) => {
              const isExpanded = expandedContact === i;
              const isExternal = c.href && c.href.startsWith("http");
              return (
                <a
                  key={i}
                  href={c.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className={`info-card ${isExpanded ? "expanded" : ""}`}
                  onClick={(e) => {
                    // if card has copy, copy instead of navigating
                    if (c.copy) {
                      e.preventDefault();
                      copyToClipboard(c.copy);
                    }
                  }}
                >
                  <div className="info-icon">{c.icon}</div>
                  <div className="info-details">
                    <div style={{display:'flex',gap:12,alignItems:'center'}}>
                      <div style={{flex:1}}>
                        <span className="info-label">{c.label}</span>
                        <span className="info-value">{c.value}</span>
                      </div>
                      <button
                        type="button"
                        className="info-toggle"
                        onClick={(ev) => {
                          ev.preventDefault();
                          ev.stopPropagation();
                          toggleContact(i);
                        }}
                        aria-expanded={isExpanded}
                      >
                        {isExpanded ? "Hide" : "Show"}
                      </button>
                    </div>
                    {isExpanded && c.more && <div className="info-more">{c.more}</div>}
                  </div>
                </a>
              );
            })}
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3 className="form-title">Send a Message</h3>
          <div className="form-group">
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <textarea
              name="message"
              placeholder="Tell me about your project..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="form-submit">
            <FaPaperPlane /> Send Message
          </button>
          {status && (
            <p className={`form-status ${status.includes("success") ? "success" : "error"}`}>
              {status.includes("success") && <FaCheckCircle />} {status}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
