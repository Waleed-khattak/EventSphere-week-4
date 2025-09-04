import React, { useEffect } from "react";

export default function About() {

  useEffect(() => {
    document.title = 'About EventSphere | Events Hub';
  }, []);

  return (
    <section className="section about">
      <div className="container">
        <h1 style={{ marginBottom: "10px" }}>About EventSphere</h1>

        <p className="muted lead" style={{ textAlign: "justify" }}>EventSphere is your trusted gateway to discovering, exploring, and attending extraordinary events around the world. From technology festivals and startup expos to cultural gatherings, design weeks, and music concerts, we curate unique experiences that bring people together.

          <br /> <br />

          Our platform is built with modern design, smooth interactions, and intuitive navigation, ensuring that users can easily find events that matter to them. We believe events are more than just dates on a calendar — they are opportunities to learn, connect, celebrate, and grow.

          <br /> <br />

          By blending innovation with accessibility, EventSphere creates a vibrant ecosystem where organizers can showcase their events, and audiences can explore what excites them the most. Whether you’re a professional seeking growth opportunities, a creative mind looking for inspiration, or someone who simply loves entertainment, EventSphere makes it possible for everyone to stay connected with the events they love.</p>
        <div className="grid-2 mt-12">
          <div data-aos="fade-up" data-aos-delay="200" style={{ backgroundColor: 'var(--card)', padding: '10px 18px', borderRadius: '5px', cursor: 'pointer' }}>
            <h3 style={{ marginBottom: "10px", color: "var(--primary)" }}>Our Mission</h3>
            <p>To make event discovery seamless, accessible, and inspiring for everyone, everywhere. To become the world’s leading event discovery platform, empowering people everywhere to connect with transformative experiences that inspire, entertain, and lives.</p>
          </div>
          <div data-aos="fade-up" data-aos-delay="400" style={{ backgroundColor: 'var(--card)', padding: '10px 18px', borderRadius: '5px', cursor: 'pointer' }}>
            <h3 style={{ marginBottom: "10px", color: "var(--primary)" }}>Our Vision</h3>
            <p>Our mission is to curate and deliver seamless event experiences across industries and cultures. To connect people through shared experiences and unforgettable events powered by technology and design.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
