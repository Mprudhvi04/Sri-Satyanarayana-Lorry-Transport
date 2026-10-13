
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div>
          <h3>Sri Satyanarayana Lorry Transport</h3>
          <p>
            Transport solutions for sand, gravel,
            20 mm stones and construction materials.
          </p>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <Link to="/">Home</Link>
          <Link to="/services">Our Services</Link>
          <Link to="/quotation">Free Quotation</Link>
          <Link to="/contact">Contact</Link>
        </div>
      </div>

      <p className="copyright">
        © {new Date().getFullYear()} Sri Satyanarayana Lorry Transport.
        All rights reserved.
      </p>
    </footer>
  );
}
