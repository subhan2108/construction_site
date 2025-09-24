import { useParams, Link } from "react-router-dom";
import { useLanguage } from "../context/LanguageProvider";
import { projectImages } from "./data/projectImages";

export default function ProjectDetail() {
  const { id } = useParams();
  const { t, lang } = useLanguage();
  const project = t.projectsData.find((p) => p.id.toString() === id);

  if (!project) {
    return <p className="loading">Project not found...</p>;
  }

  return (
    <div className="project-detail" dir={lang === "ar" ? "rtl" : "ltr"}>
      <div className="container">
        <div className="detail-grid">
          {/* Left → Image */}
          <div className="detail-image">
            <img src={projectImages[project.id]} alt={project.title} />
          </div>

          {/* Right → Text */}
          <div className="detail-content">
            <span className="label">
              {lang === "ar" ? "تفاصيل المشروع" : "PROJECT DETAILS"}
            </span>
            <h1 className="headline text-red-600">{project.title}</h1>
            
            <p className="description">{project.description}</p>

            <div className="extra-info">
              <p>
                <strong>{lang === "ar" ? "القطاع:" : "Sector:"}</strong>{" "}
                {project.sector}
              </p>
              {project.detail && (
                <p>
                  <strong>{lang === "ar" ? "التفاصيل:" : "Detail:"}</strong>{" "}
                  {project.detail}
                </p>
              )}
            </div>

            <Link to="/projects" className="btn-back">
              {lang === "ar" ? "← العودة إلى المشاريع" : "← Back to Projects"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
