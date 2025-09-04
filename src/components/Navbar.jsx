import { motion, AnimatePresence } from 'framer-motion';
import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setOpen(false), [pathname]);

  return (
    <nav className="nav">
      <div className="container nav-inner">
        <Link to="/" className="brand">EventSphere</Link>

        {/* Mobile menu button */}
        <button
          className="menu-btn"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          ☰
        </button>

        {/* Desktop links (always visible) */}
        <div className="links desktop">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/events">Upcoming Events</Link>
          <Link className='nav-btn' to="/events">Browse Events</Link>
        </div>

        {/* Mobile dropdown links (animated) */}
        <AnimatePresence>
          {open && (
            <motion.div
              className="links mobile open"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              <Link to="/">Home</Link>
              <Link to="/events">Upcoming Events</Link>
              <Link to="/about">About</Link>
              <Link to="/contact">Contact</Link>
              <Link className='nav-btn' to="/events">Browse Events</Link>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
}
