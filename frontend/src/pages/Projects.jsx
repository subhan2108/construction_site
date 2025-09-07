import { Link } from "react-router-dom";
import projects from "./data/projects.js"; // same approach as services

export default function Projects() {
  return (
    <div className="projects-page">
      {/* ✅ Hero Banner */}
      <section className="projects-hero">
        <div id="overlay">
          <h1>Our Projects</h1>
          <p>Delivering Excellence Across All Sectors</p>
        </div>
      </section>

      {/* ✅ Projects Grid */}
      <section className="projects-list">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="grid">
            {projects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="project-card"
              >
                <img src={project.image} alt={project.title} />
                <div className="project-info">
                  <h3>{project.title}</h3>
                  
                  <span className="sector">{project.sector}</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
