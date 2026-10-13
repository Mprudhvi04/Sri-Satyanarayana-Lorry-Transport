import { Link } from "react-router-dom";

export default function OurServices() {
  const services = [
    {
      icon: "▰",
      title: "Sand Transportation",
      description: "Transportation of sand for construction projects.",
    },
    {
      icon: "▰",
      title: "Gravel Transportation",
      description: "Gravel transport for construction and road works.",
    },
    {
      icon: "▰",
      title: "20 mm Stones",
      description: "Transportation of 20 mm stones and aggregates.",
    },
    {
      icon: "▰",
      title: "Crushed Stones",
      description: "Transport solutions for crushed stone materials.",
    },
    {
      icon: "▰",
      title: "Soil Transportation",
      description: "Movement of soil for suitable construction projects.",
    },
    {
      icon: "▰",
      title: "Bulk Materials",
      description: "Transport options for other bulk materials on request.",
    },
  ];

  return (
    <section className="page-section">
      <div className="section-heading">
        <p className="tagline">WHAT WE TRANSPORT</p>
        <h1>Our Services</h1>
        <p>
          Transportation solutions for construction materials and bulk delivery
          requirements.
        </p>
      </div>

      <div className="service-grid">
        {services.map((service) => (
          <div className="service-card" key={service.title}>
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>

            <Link to="/quotation" className="text-link">
              Request a Quote →
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
