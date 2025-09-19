import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";

export default function Certifications() {
  const certs = [
    { id: 1, title: "ISO 9001", file: "cr1.jpg" },
    { id: 2, title: "ISO 14001", file: "cr2.jpg" },
    { id: 3, title: "OHSAS 18001", file: "cr3.jpg" },
    { id: 4, title: "OHSAS 18001", file: "cr4.jpg" },
    { id: 5, title: "OHSAS 18001", file: "cr5.jpg" },
    { id: 6, title: "OHSAS 18001", file: "cr6.jpg" },
    { id: 7, title: "OHSAS 18001", file: "cr7.jpg" },
  ];

  return (




    
    <div id="section">

{/* ✅ Hero Banner */}
      <section className="projects-hero">
        <div id="overlay">
          <h1>Our Achievements</h1>
          <p></p>
        </div>
      </section>

      <h2>Certifications</h2>
      <div className="cert-grid">
        {certs.map((c) => (
          <div key={c.id} className="cert-card">
            <img src={c.file} alt={c.title} />
            <h3>{c.title}</h3>
          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Testimonials */}
      <Testimonials />
    </div>
  );
}
