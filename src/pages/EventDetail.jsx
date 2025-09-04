import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { EVENTS } from "../data/events.js";

export default function EventDetail() {

  useEffect(() => {
    document.title = ev.name;
  }, []);

  const [success, setSuccess] = useState(false);
  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);

    // Reset form after submit
    setFormData({ name: "", email: "", message: "" });

    setTimeout(() => {
      setSuccess(false);
      setOpen(false);
    }, 2000);
  };

  const { slug } = useParams();
  const ev = EVENTS.find(e => e.slug === slug);
  const [open, setOpen] = useState(false);
  if (!ev) return <div className="container section"><h2>Event not found</h2></div>;
  const date = new Date(ev.dateTime).toLocaleString();
  const mapSrc = ev.map;

  return (
    <article className="section">
      <div className="container detail">
        <img className="banner" src={ev.image} alt={ev.name} data-aos="fade-up" data-aos-delay="200" />
        <div className="detail-body" data-aos="fade-up" data-aos-delay="500">
          <h1 style={{ marginBottom: "10px" }}>{ev.name}</h1>
          <p style={{ marginBottom: "8px" }} className="tiny muted"><span className="btn-primary" style={{ marginRight: "6px", padding: "5px 8px", borderRadius: "5px" }}>{date}</span> <span className="btn-primary" style={{ marginRight: "6px", padding: "5px 8px", borderRadius: "5px" }}>{ev.venue}</span></p>
          <p style={{ marginBottom: "8px", textAlign: 'justify' }} className="lead">{ev.long}</p>
          <div className="detail-actions">
            <button style={{ cursor: "pointer" }} className="btn btn-primary" onClick={() => setOpen(true)}>RSVP / Register</button>
          </div>
        </div>
        <div className="map-wrap" data-aos="fade-up" data-aos-delay="200">
          <iframe title="Event Location" src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" />
        </div>
      </div>

      {/* Event Registration Modal */}
      {open && (
        <div className="modal" role="dialog" aria-modal="true" data-aos="fade-up" data-aos-delay="200">
          <div className="modal-card">
            <button className="close" onClick={() => setOpen(false)} aria-label="Close">×</button>
            <h3 style={{ marginBottom: "11px" }}>Event Registration for {ev.name}</h3>
            <form onSubmit={handleSubmit} className="form">
              <div className="grid-2">
                <label>Full Name<input required placeholder="Your name" name="name" value={formData.name}
                  onChange={handleChange} /></label>
                <label>Email<input type="email" required placeholder="you@example.com" name="email" value={formData.email}
                  onChange={handleChange} /></label>
              </div>
              <label>Notes<textarea rows="4" placeholder="Any preference…" name="message" value={formData.message}
                onChange={handleChange}></textarea></label>
              <button style={{ cursor: "pointer" }} className="btn btn-primary" type="submit">Submit Event Registration</button>

              {success && <p className="alert success">✅ Thanks! Event Registration submitted.</p>}
            </form>
          </div>
        </div>
      )}
    </article>
  );
}
