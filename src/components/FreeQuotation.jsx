
import { useState } from "react";

export default function FreeQuotation() {
  const [form, setForm] = useState({
    name: "",
    phone: "",
    material: "Sand",
    quantity: "",
    location: ""
  });

  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });

    setSubmitted(false);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <section className="page-section quotation-page">
      <div className="section-heading">
        <p className="tagline">LET'S WORK TOGETHER</p>

        <h1>Request a Free Quotation</h1>

        <p>
          Provide your transport requirements and contact us
          for pricing and availability.
        </p>
      </div>

      <form className="quote-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            Customer Name
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              placeholder="Enter your name"
              required
            />
          </label>

          <label>
            Phone Number
            <input
              type="tel"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              placeholder="10-digit mobile number"
              pattern="[0-9]{10}"
              maxLength={10}
              required
            />
          </label>

          <label>
            Material Required
            <select
              name="material"
              value={form.material}
              onChange={handleChange}
            >
              <option>Sand</option>
              <option>Gravel</option>
              <option>20 mm Stones</option>
              <option>Crushed Stones</option>
              <option>Soil</option>
              <option>Other Materials</option>
            </select>
          </label>

          <label>
            Required Quantity
            <input
              type="text"
              name="quantity"
              value={form.quantity}
              onChange={handleChange}
              placeholder="e.g. 2 lorry loads"
              required
            />
          </label>

          <label className="full-width">
            Delivery Location
            <input
              type="text"
              name="location"
              value={form.location}
              onChange={handleChange}
              placeholder="Enter village, city or site address"
              required
            />
          </label>
        </div>

        <button
          type="submit"
          className="btn primary submit-btn"
        >
          Submit Enquiry 
        </button>

        {submitted && (
          <p className="form-note success-message">
            Thank you! Your quotation enquiry has been submitted successfully.
          </p>
        )}

  
      </form>
    </section>
  );
}
