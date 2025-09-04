import React, { useEffect } from "react";
import { Link } from "react-router-dom";
export default function NotFound() {

  useEffect(() => {
    document.title = 'Page not found 404 error';
  }, []);

  return (
    <section className="section center">
      <h1>404</h1>
      <p className="muted">The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn">Go Home</Link>
    </section>
  );
}
