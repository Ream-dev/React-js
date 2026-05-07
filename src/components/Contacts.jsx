import { useState } from "react";
import "../css/Contact.css";
import { FaEnvelope, FaPhone, FaLinkedin, FaGithub, FaCheckCircle, FaJsSquare, FaHtml5, FaCss3Alt, FaPython, FaWordpress, FaGitAlt, FaDatabase, FaNodeJs, FaAws } from "react-icons/fa";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState(""); // success or error

  // Handle input change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.message) {
      setStatus("Please fill in all fields.");
      return;
    }

    // Here you can integrate with EmailJS or your backend
    // For demo, we just simulate sending
    setTimeout(() => {
      setStatus("Message sent successfully! ✅");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  // Copy to clipboard function
  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    alert(`Copied: ${text}`);
  };

  return (
    <section className="contact" id="contact">
      <h2 className="section">Get in Touch</h2>
      <p className="section">
        Feel free to reach out to me for projects, collaborations, or questions.
      </p>

      {/* Skills Section */}
      <div className="skills-section">
        <h3 className="skills-title">Technical Skills & Technologies</h3>
        <div className="skills-grid">
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <FaJsSquare className="skill-icon vue" />
            </div>
            <span className="skill-name">Vue.js</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <FaJsSquare className="skill-icon typescript" />
            </div>
            <span className="skill-name">TypeScript</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <FaJsSquare className="skill-icon php" />
            </div>
            <span className="skill-name">PHP</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <FaNodeJs className="skill-icon nodejs" />
            </div>
            <span className="skill-name">Node.js</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <FaDatabase className="skill-icon database" />
            </div>
            <span className="skill-name">MongoDB</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <FaDatabase className="skill-icon sql" />
            </div>
            <span className="skill-name">SQL</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <FaAws className="skill-icon aws" />
            </div>
            <span className="skill-name">AWS</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <FaJsSquare className="skill-icon javascript" />
            </div>
            <span className="skill-name">JavaScript</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <FaHtml5 className="skill-icon html" />
            </div>
            <span className="skill-name">HTML</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <FaCss3Alt className="skill-icon css" />
            </div>
            <span className="skill-name">CSS</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <FaPython className="skill-icon python" />
            </div>
            <span className="skill-name">Python</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <FaJsSquare className="skill-icon laravel" />
            </div>
            <span className="skill-name">Laravel</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <FaWordpress className="skill-icon wordpress" />
            </div>
            <span className="skill-name">WordPress</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <FaJsSquare className="skill-icon figma" />
            </div>
            <span className="skill-name">Figma</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <FaJsSquare className="skill-icon vercel" />
            </div>
            <span className="skill-name">Vercel</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <FaDatabase className="skill-icon data" />
            </div>
            <span className="skill-name">Data Analysis</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <FaGithub className="skill-icon github" />
            </div>
            <span className="skill-name">GitHub</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <FaGitAlt className="skill-icon git" />
            </div>
            <span className="skill-name">Git</span>
          </div>
          <div className="skill-item">
            <div className="skill-icon-wrapper">
              <FaDatabase className="skill-icon laragon" />
            </div>
            <span className="skill-name">Laragon</span>
          </div>
        </div>
      </div>

      <div className="contact-container">
        {/* Contact Info */}
        <div className="contact-info">
          <div className="info-card" onClick={() => copyToClipboard("ream@example.com")}>
            <FaEnvelope className="info-icon" />
            <h4>Email</h4>
            <p>reamkhorn12345@gmail.com</p>
          </div>
          <div className="info-card" onClick={() => copyToClipboard("+855 123 456 789")}>
            <FaPhone className="info-icon" />
            <h4>Phone</h4>
            <p>+855 863 393 350</p>
          </div>
          <div className="info-card">
            <FaLinkedin className="info-icon" />
            <h4>LinkedIn</h4>
            <p>
              <a href="https://linkedin.com/in/ream" target="_blank" rel="noreferrer">
                linkedin.com/in/ream
              </a>
            </p>
          </div>
          <div className="info-card">
            <FaGithub className="info-icon" />
            <h4>GitHub</h4>
            <p>
              <a href="https://github.com/Ream111222333" target="_blank" rel="noreferrer">
                github.com
              </a>
            </p>
          </div>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={handleSubmit}>
          <h3>Send me a message</h3>
          <input
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <textarea
            name="message"
            placeholder="Your Message"
            rows="5"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit" className="btn primary">
            ✉️ Send Message
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
