import React from "react";
import { Link } from "react-router-dom";
import { FaTwitter, FaInstagram, FaLinkedin, FaFacebookF, FaEnvelope } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container grid-4">
        {/* Brand + About */}
        <div>
          <div className="brand brand-sm" style={{ marginBottom: "12px" }}>
            EventSphere
          </div>
          <p className="muted">
            Explore upcoming experiences around the world. EventSphere is your gateway to discovering,
            exploring, and attending amazing events worldwide.
            From technology festivals and music concerts to design weeks and startup expos —
            we curate experiences with modern design and smooth interactions.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="footer-title">Quick Links</h4>
          <div className="footer-links">
            <Link to="/">Home</Link>
            <Link to="/events">Events</Link>
            <Link to="/about">About</Link>
            <Link to="/contact">Contact</Link>
            <a href="#top">Back to top</a>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="footer-title">Stay Updated</h4>
          <p className="muted small">Subscribe to our newsletter for event updates.</p>
          <form className="newsletter-form">
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">
              <FaEnvelope size={16} />
            </button>
          </form>
        </div>

        {/* Social */}
        <div>
          <h4 className="footer-title">Follow Us</h4>
          <div className="social-links">
            <a href="https://twitter.com" target="_blank" rel="noreferrer">
              <FaTwitter />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer">
              <FaInstagram />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noreferrer">
              <FaFacebookF />
            </a>
          </div>
        </div>
      </div>
      <br />
      <hr />
      {/* Bottom Bar */}
      <div className="footer-bottom tiny center container muted mt-4">
        <p>© {new Date().getFullYear()} EventSphere. All rights reserved.</p>
      </div>
    </footer>
  );
}
