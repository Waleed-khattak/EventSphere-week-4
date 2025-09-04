import React, { useState, useEffect } from "react";

export default function Contact() {

  useEffect(() => {
    document.title = "Let's Connect with EventSphere";
  }, []);

  const [success, setSuccess] = useState(false);
  const [open, setOpen] = useState(false);

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

  return (
    <section className="section contact">
      <div className="container">
        <h1 style={{ marginBottom: "10px" }}>Contact Us</h1>
        <p style={{ marginBottom: "20px" }} className="muted">We'd love to hear from you. Fill out the form and we'll get back to you.</p>
        <form className="form" onSubmit={handleSubmit}>
          <div className="grid-2">
            <label>Name<input required placeholder="Your full name" name='name' value={formData.name}
              onChange={handleChange} /></label>
            <label>Email<input required type="email" placeholder="you@example.com" name="email" value={formData.email}
              onChange={handleChange} /></label>
          </div>
          <label>Message<textarea required rows="10" placeholder="Write your message…" name="message" value={formData.message}
            onChange={handleChange}></textarea></label>
          <button style={{ cursor: 'pointer' }} className="btn btn-primary" type="submit">Send Message</button>

          {success && <p className="alert success">✅ Thanks!  We will contact you soon.</p>}
        </form>
      </div>
    </section>
  );
}
