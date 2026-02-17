import { useEffect, useState } from "react";
import profile from "../assets/ream.png";
import "../css/Headers.css";

function Headers() {
  const roles = [
    "Full stack Developer",
    "Frondend developer",
    "Backend developer",
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);

  useEffect(() => {
    const typing = setTimeout(() => {
      if (charIndex < roles[index].length) {
        setText((prev) => prev + roles[index][charIndex]);
        setCharIndex(charIndex + 1);
      } else {
        setTimeout(() => {
          setText("");
          setCharIndex(0);
          setIndex((prev) => (prev + 1) % roles.length);
        }, 1500);
      }
    }, 80);

    return () => clearTimeout(typing);
  }, [charIndex, index]);

  return (
    <header className="hero">
      <div className="hero-container">

        {/* LEFT SIDE */}
        <div className="hero-left">
          <h1>
            Hi, I'm <span>Ream</span>
          </h1>

          <h2>
            {text}
            <span className="cursor">|</span>
          </h2>

          <p>
            I build modern, scalable and high-performance web applications
            using React and modern JavaScript technologies.
            I focus on clean UI, strong performance and great user experience.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="btn primary">
              View My Work
            </a>

            <a href="#contact" className="btn outline">
              Contact Me
            </a>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hero-right">
          <div className="image-wrapper">
            <img src={profile} alt="Ream profile" />
          </div>
        </div>

      </div>
    </header>
  );
}

export default Headers;