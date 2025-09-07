export default function About() {
  return (
    <div className="about-page">
      {/* ✅ Hero Banner */}
      <section className="about-hero">
        <div id="overlay">
          <h1>About Us</h1>
          <p>Building with Excellence & Integrity</p>
        </div>
      </section>

      {/* ✅ Company Intro */}
      <section className="about-intro">
        <div className="container">
          <h2>Who We Are</h2>
          <p>
            Crafting structures that last a lifetime. We combine advanced
            materials, resilient design, and sustainable practices to create
            innovative and durable projects. With decades of expertise, our team
            ensures quality and precision at every stage.
          </p>
        </div>
      </section>




<section className="about-section">
      {/* Left Content */}
      <div className="about-content">
        <span className="about-label">ABOUT US</span>
        <h2 className="about-title">Building trust, delivering excellence</h2>
        <p className="about-description">
          At Certification & Compliance Est — General Contracting, we specialize 
          in delivering high-quality construction solutions tailored to our clients’ 
          unique needs. With years of expertise in civil works, MEP services, and 
          project management, we are committed to innovation, safety, and 
          on-time delivery.
        </p>
      </div>

      {/* Right Image */}
      <div className="about-image">
        <img src="bl.jpg" alt="About Us" />
      </div>
    </section>

{/* ✅ About Detail Section (Image Left, Text Right) */}
<section className="about-detail alt-layout">
  <div className="about-container">
    {/* Left Side → Image */}
    <div className="about-image">
      <img 
        src="ll.jpg" 
        alt="Our Team at Work" 
      />
    </div>

    {/* Right Side → Text */}
    <div className="about-text">
     
      <h2>Shaping Tomorrow with Excellence</h2>
      <p>
        With years of industry expertise, our company has been at the forefront 
        of delivering innovative construction solutions. From civil works to MEP 
        and interior fit-outs, we are committed to exceeding expectations. 
        Our approach combines cutting-edge technology, sustainable practices, 
        and a strong focus on safety and quality.
      </p>
    </div>
  </div>
</section>

   


      {/* ✅ Mission & Vision */}
      <section className="mission-vision">
        <div className="container grid">
          <div className="card">
            <i className="fas fa-bullseye"></i>
            <h3>Our Mission</h3>
            <p>
              To deliver innovative, safe, and sustainable construction
              solutions that exceed client expectations while creating lasting
              value for communities.
            </p>
          </div>
          <div className="card">
            <i className="fas fa-eye"></i>
            <h3>Our Vision</h3>
            <p>
              To be recognized as a leader in construction excellence — where
              innovation, quality, and trust drive every project we undertake.
            </p>
          </div>
        </div>
      </section>

      {/* ✅ Values Section */}
      <section className="values">
        <div className="container">
          <h2>Our Core Values</h2>
          <div className="grid">
            <div className="value-card">
              <i className="fas fa-hard-hat"></i>
              <h4>Safety First</h4>
              <p>We prioritize health, safety, and environment at every step.</p>
            </div>
            <div className="value-card">
              <i className="fas fa-check-circle"></i>
              <h4>Quality Assurance</h4>
              <p>
                Commitment to excellence through strict QA/QC standards and
                meticulous execution.
              </p>
            </div>
            <div className="value-card">
              <i className="fas fa-handshake"></i>
              <h4>Client Trust</h4>
              <p>
                Building long-term relationships through honesty, transparency,
                and collaboration.
              </p>
            </div>
          </div>
        </div>
      </section>





      {/* ✅ Members Section */}
      <section className="values">
        <div className="container">
          <h2>Our Members</h2>
          <div className="grid">
            <div className="value-card">
              <img src="mm.jpg" alt="member" />
              <h4>Muhammad Sharif Gamdi</h4>
              <p>Director — 20+ years of leadership in construction.</p>
            </div>
            <div className="value-card">
              <img src="mm6.jpg" alt="member" />
              <h4>Muhammad Shayzan khan</h4>
              <p>Project Director — Ensures timely delivery with quality.</p>
            </div>
            <div className="value-card">
              <img src="mm7.jpg" alt="member" />
              <h4>Muhammad Mahmud Gazni</h4>
              <p>Lead Engineer — Specialist in sustainable building designs.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
