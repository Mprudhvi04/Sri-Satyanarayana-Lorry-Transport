
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-content">
          <p className="tagline">YOUR TRUSTED TRANSPORT PARTNER</p>

          <h1>
            Moving Materials.
            <br />
            <span>Building Futures.</span>
          </h1>

          <p className="hero-text">
            Reliable transportation of sand, gravel, 20 mm
            stones and construction materials for your projects.
          </p>

          <div className="hero-buttons">
            <Link to="/quotation" className="btn primary">
              Get Free Quote →
            </Link>

            <a href="#" className="btn secondary">
              Call Us
            </a>
          </div>

          <div className="hero-stats">
            <div>
              <strong>Reliable</strong>
              <span>Transport</span>
            </div>
            <div>
              <strong>Quality</strong>
              <span>Service</span>
            </div>
            <div>
              <strong>On Time</strong>
              <span>Delivery</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="section-heading">
          <p className="tagline">WELCOME TO OUR COMPANY</p>
          <h2>Transport You Can Depend On</h2>
          <p>
            We help customers transport construction materials
            with clear communication and careful coordination.
          </p>
        </div>

        <div className="home-cards">
          <div className="service-card">
            <div className="service-icon">▰</div>
            <h3>Sand Transport</h3>
            <p>Transportation for construction sand requirements.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">◆</div>
            <h3>Gravel Transport</h3>
            <p>Transport solutions for gravel and aggregates.</p>
          </div>

          <div className="service-card">
            <div className="service-icon">⬟</div>
            <h3>20 mm Stones</h3>
            <p>Transportation of 20 mm construction stones.</p>
          </div>
        </div>

        <div className="center">
          <Link to="/services" className="text-link">
            View All Services →
          </Link>
        </div>
      </section>

      <section className="call-banner">
        <div>
          <h2>Need a Transport Quotation?</h2>
          <p>Tell us your requirements and request a free quote.</p>
        </div>

        <Link to="/quotation" className="btn primary">
          Request a Quote →
        </Link>
      </section>
    </>
  );
}
