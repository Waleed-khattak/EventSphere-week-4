import React, { useState, useEffect } from "react";
import SearchBar from "../components/SearchBar.jsx";
import EventCard from "../components/EventCard.jsx";
import { EVENTS } from "../data/events.js";

export default function Events() {

  useEffect(() => {
    document.title = 'Browse Upcoming events | EventsSphere';
  }, []);

  const [q, setQ] = useState("");
  const filtered = EVENTS.filter(e => (e.name + e.short + e.venue).toLowerCase().includes(q.toLowerCase()));
  return (
    <section className="section">
      <div className="container" data-aos="fade-up" data-aos-delay="300">
        <div className="section-head">
          <h1>Upcoming Events</h1>
          <SearchBar value={q} onChange={setQ} />
        </div>
        <div className="grid-cards">
          {filtered.length > 0 ? (
            filtered.map(e => <EventCard key={e.id} e={e} />)
          ) : (
            <p className="no-results">No events found.</p>
          )}
        </div>
      </div>
    </section>
  );
}
