import { useParams, Link } from "react-router-dom";
import projects from "./data/projects";

export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id.toString() === id);

  if (!project) {
    return <p className="loading">Project not found...</p>;
  }

  return (
    <div className="project-detail">
      <div className="container">
        <div className="detail-grid">
          {/* Left → Image */}
          <div className="detail-image">
            <img src={project.image} alt={project.title} />
          </div>

          {/* Right → Text */}
          <div className="detail-content">
            <span className="label">PROJECT DETAILS</span>
            <h1 className="headline">{project.title}</h1>
            <p className="description">{project.description}</p>

            <div className="extra-info">
              <p><strong>Sector:</strong> {project.sector}</p>
              {project.location && <p><strong>Location:</strong> {project.location}</p>}
              {project.duration && <p><strong>Duration:</strong> {project.duration}</p>}
            </div>

            <Link to="/projects" className="btn-back">
              ← Back to Projects
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
