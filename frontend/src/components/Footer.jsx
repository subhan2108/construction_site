import { Link } from "react-router-dom";


export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Column 1: About */}
        <div className="footer-col">
          <h2 className="footer-logo">Certification & Compliance Est</h2>
          <p className="footer-sub">(مؤسسة التصادق والتوافق للمقاولات العامة)</p>
          <p className="footer-desc">
            Delivering excellence in contracting, civil works, and compliance
            across the UAE with a strong focus on quality and safety.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/services">Services</Link></li>
            <li><Link to="/projects">Projects</Link></li>
            <li><Link to="/certifications">Certifications</Link></li>
            <li><Link to="/careers">Careers</Link></li>
          </ul>
        </div>

        {/* Column 3: Contact */}
        <div className="footer-col">
          <h3>Contact</h3>
          <p>📍 Dubai, UAE</p>
          <p>📞 +971-123-456-789</p>
          <p>✉️ info@construction.com</p>
        </div>

        {/* Column 4: Social */}
        <div className="footer-col">
          <h3>Follow Us</h3>
          <div className="social-icons">
            <a href="#"><i className="fab fa-linkedin"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Certification & Compliance Est — All Rights Reserved</p>
      </div>
    </footer>
  );
}
