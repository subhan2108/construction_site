import { Link } from "react-router-dom";
import { useState } from "react";


export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo */}
        <div className="navbar-left">
        <Link to="/" className="logo">
          <img src="/lg.png" alt="Logo" />
        </Link>

        <div className="site-title-wrapper">
          <span className="site-title">Certification & Compliance Est</span>
          <span className="site-subtitle">General Contracting</span>
        </div>
      </div>
      {/* Company Title + Subtitle */}
      

      {/* Links */}
      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/services">Services</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/certifications">Certifications</Link>
        <Link to="/hse">HSE</Link>
        <Link to="/careers">Careers</Link>
        
        <Link to="/contact">Contact</Link>
      </div>

      {/* Mobile Menu Button */}
      <button
        className="menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Menu"
      >
        ☰
      </button>
    </nav>
  );
}
