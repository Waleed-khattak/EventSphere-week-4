import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion, useScroll, useTransform } from "framer-motion";
import SearchBar from "../components/SearchBar.jsx";
import EventCard from "../components/EventCard.jsx";
import ThreeTicket from "../components/ThreeTicket.jsx";
import { EVENTS } from "../data/events.js";

export default function Home() {
  const [q, setQ] = useState("");
  const { scrollYProgress } = useScroll();
  const rotate = useTransform(scrollYProgress, [0, 1], [0, 20]);
  const filtered = EVENTS.filter(e => (e.name + e.short + e.venue).toLowerCase().includes(q.toLowerCase()));

  return (
    <div>
      {/* Hero */}
      <section className="hero" id="top">
        <div className="container hero-inner">
          <div className="hero-text">
            <motion.h1 style={{ rotate }} className="display" data-aos="zoom-in" data-aos-delay="500">Discover Upcoming Events</motion.h1>
            <p style={{ marginTop: '17px', marginBottom: '25px' }} className="lead">Search, explore and Event Registration — with delightful motion and modern design.</p>
            <div className="hero-cta">
              <Link to="/events" className="btn btn-primary">Browse Events</Link>
              <a href="#explore" className="btn">Register 👇</a>
            </div>
          </div>
          <div className="hero-3d">
            <ThreeTicket />
          </div>
        </div>
      </section>

      {/* Explore with search */}
      <section id="explore" className="section">
        <div className="container">
          <div className="section-head">
            <h2>Upcoming Events</h2>
            <SearchBar value={q} onChange={setQ} />
          </div>
          <div className="grid-cards">
            {filtered.length > 0 ? (
              filtered.slice(0, 9).map(e => <EventCard key={e.id} e={e} />)
            ) : (
              <p className="no-results">No events found.</p>
            )}
          </div>
          <div className="center mt-6">
            <Link to="/events" className="btn">See all</Link>
          </div>
        </div>
      </section>
    </div>
  );
}
