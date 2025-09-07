import { Link } from "react-router-dom";
import services from "./data/services";
import projects from "./data/projects";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";

export default function Home() {
  return (
    <div>
      {/* ✅ Hero Section */}
      <section className="hero">
        <div className="hero-overlay">
          <h1>Building the Future with Excellence</h1>
          <p>Trusted Partner in General Contracting & Compliance</p>
          <div className="hero-buttons">
            <Link to="/services" className="btn btn-primary">Our Services</Link>
            <Link to="/projects" className="btn btn-secondary">View Projects</Link>
          </div>
        </div>
      </section>

      {/* ✅ Services Section */}
      <section className="section">
        <h2 className="section-title">Our Services</h2>
        <div className="grid">
          {services.slice(0, 3).map(service => (
            <Link 
              to={`/services/${service.id}`} 
              key={service.id} 
              className="card"
            >
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* ✅ Projects Section */}
      <section className="section gray-bg">
        <h2 className="section-title">Featured Projects</h2>
        <div className="grid">
          {projects.slice(0, 3).map(project => (
            <Link 
              to={`/projects/${project.id}`} 
              key={project.id} 
              className="card"
            >
              <img src={project.image} alt={project.title} />
              <h3>{project.title}</h3>
              <p>{project.detail}</p>
            </Link>
          ))}
        </div>
      </section>

      

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}
