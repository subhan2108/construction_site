import { useParams } from "react-router-dom";
import services from "./data/services"

export default function ServiceDetail() {
  const { id } = useParams();
  const service = services.find((s) => s.id === parseInt(id));

  if (!service) {
    return <h2 style={{ textAlign: "center" }}>Service Not Found</h2>;
  }

  return (
    <section className="service-detail">
      {/* Left Image */}
      <div className="service-detail-image">
        <img src={service.image} alt={service.title} />
      </div>

      {/* Right Content */}
      <div className="service-detail-content">
        <span className="service-label">OUR SERVICES</span>
        <h2 id="service-title">{service.title}</h2>
        <p className="service-description">{service.detail}</p>
      </div>
      
    </section>
  );
}
