import { Link } from "react-router-dom";

export default function Contact() {
  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="tagline">WE ARE HERE TO HELP</p>
        <h1>Contact Us</h1>
        <p>
          Contact Sri Satyanarayana Lorry Transport for material transportation
          and pricing enquiries.
        </p>
      </div>

      <div className="contact-grid">
        <div className="contact-card">
          <div className="service-icon">☎</div>
          <h3>Call Our Team</h3>
          <p>Speak to us about your transport requirements.</p>
          <a href={`#`} className="btn primary">
            Call Now
          </a>
        </div>

        <div className="contact-card">
          <div className="service-icon">✉</div>
          <h3>WhatsApp Enquiry</h3>
          <p>Send us your material and delivery details.</p>
          <a
            hre
            f={`@`}
            className="btn primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Chat on WhatsApp
          </a>
        </div>

        <div className="contact-card">
          <div className="service-icon">₹</div>
          <h3>Free Quotation</h3>
          <p>Tell us the material, quantity and destination.</p>
          <Link to="/quotation" className="btn primary">
            Request a Quote
          </Link>
        </div>
      </div>

      <div className="call-banner">
        <div>
          <h2>Sri Satyanarayana Lorry Transport</h2>
          <p>Reliable transport for your construction materials.</p>
        </div>
        <Link to="/services" className="btn primary">
          Our Services →
        </Link>
      </div>
    </section>
  );
}
