import React from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import Navbar from "./components/Navbar.jsx";
import Footer from "./components/Footer.jsx";
import ScrollToTop from './components/ScrollToTop .jsx';
import Home from "./pages/Home.jsx";
import Events from "./pages/Events.jsx";
import About from "./pages/About.jsx";
import Contact from "./pages/Contact.jsx";
import EventDetail from "./pages/EventDetail.jsx";
import NotFound from "./pages/NotFound.jsx";
import AOS from 'aos';
import 'aos/dist/aos.css';

// Page animation wrapper
const PageWrapper = ({ children }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.7 }}
  >
    {children}
  </motion.div>
);

// Initialize AOS Animations 
AOS.init();

export default function App() {
  const location = useLocation();

  return (
    <div className="app">
      <Navbar />
      <main id="content" className="content">
        <ScrollToTop />

        {/* Animate page transitions */}
        <AnimatePresence mode="wait">
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<PageWrapper><Home /></PageWrapper>} />
            <Route path="/events" element={<PageWrapper><Events /></PageWrapper>} />
            <Route path="/about" element={<PageWrapper><About /></PageWrapper>} />
            <Route path="/contact" element={<PageWrapper><Contact /></PageWrapper>} />
            <Route path="/events/:slug" element={<PageWrapper><EventDetail /></PageWrapper>} />
            <Route path="*" element={<PageWrapper><NotFound /></PageWrapper>} />
          </Routes>
        </AnimatePresence>

        <section className="sticky">
          <div className="bubbles">
            {[...Array(10)].map((_, i) => (
              <div key={i} className="bubble"></div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
