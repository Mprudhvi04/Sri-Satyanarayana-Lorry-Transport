
import { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);


  function closeMenu() {
    setMenuOpen(false);
  
  }

  return (
    <header className="navbar">
      <NavLink to="/" className="logo" onClick={closeMenu}>
        <span className="logo-icon">SS</span>
        <span>
          Sri Satyanarayana
          <small>LORRY TRANSPORT</small>
        </span>
      </NavLink>

      <button
        className="menu-btn"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      <nav className={menuOpen ? "nav-links open" : "nav-links"}>
        <NavLink to="/" end onClick={closeMenu}>
          Home
        </NavLink>

        <NavLink to="/services" onClick={closeMenu}>
          Our Services
        </NavLink>

        <NavLink to="/quotation" onClick={closeMenu}>
          Free Quotation
        </NavLink>

 
    

        <NavLink to="/contact" onClick={closeMenu}>
          Contact
        </NavLink>
             <div className="proprietor-info">
          <strong>Proprietor: Marisetti Radha Krishna</strong>
          <span>Phone: <a href="#">9505552693</a></span>
          <span>Address: 7-590, Sriram Nagar, Jaggampeta</span>
        </div>
      </nav>
    </header>
  );
}
