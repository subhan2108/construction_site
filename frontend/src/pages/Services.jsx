import { Link } from "react-router-dom";
import services from "./data/services.js";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";

export default function Services() {
  return (
    <div className="services-page">
      {/* ✅ Hero Banner */}
      <section className="services-hero">
        <div id="overlay">
          <h1>Our Services</h1>
          <p>Delivering Excellence in Construction & Contracting</p>
        </div>
      </section>

      {/* ✅ Services Grid */}
      <section className="services-list">
        <h2>What We Offer</h2>
        <div className="services-grid">
          {services.map((service) => (
            <Link 
              key={service.id} 
              to={`/services/${service.id}`} 
              className="service-card"
            >
              <img src={service.image} alt={service.title} />
              <h3>{service.title}</h3>
              <p>{service.description}</p>
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
