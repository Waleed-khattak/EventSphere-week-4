import React from "react";
import { Link } from "react-router-dom";

export default function EventCard({ e }){
  const date = new Date(e.dateTime).toLocaleString();
  return (
    <div className="card" data-aos="fade-up" data-aos-delay="300">
      <img className="card-img" src={e.image} alt={e.name} loading="lazy" />
      <div className="card-body">
        <h3 className="card-title">{e.name}</h3>
        <p style={{marginBottom: '8px'}} className="tiny muted"><span className="btn-primary" style={{marginRight: "6px", padding: "5px 8px", borderRadius: "5px" }}>{date}</span> <span className="btn-primary" style={{padding: "5px 8px", borderRadius: "5px" }}>{e.venue}</span></p>
        <p className="muted card-desc">{e.short}</p>
        <div className="card-actions">
          <Link className="btn btn-primary" to={`/events/${e.slug}`}>Learn More</Link>
        </div>
      </div>
    </div>
  );
}
