import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "../styles/Navbar.css";

const subparagraph = ["LIFE", "BEAUTY", "NATURE", "GREENERY", "FRESHNESS"];

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWordIndex((prevIndex) => (prevIndex + 1) % subparagraph.length);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  const location = useLocation();

  return (
    <nav className="navbar-container">
      <div className="navbar">
        <h2 className="logo">Shree Hari Nursery</h2>
        
        <div className={`nav-links ${isOpen ? "open" : ""}`}>
          <Link to="/" onClick={() => setIsOpen(false)} aria-label="Go to Home">Home</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} aria-label="Go to About">About</Link>
          <Link to="/gallery" onClick={() => setIsOpen(false)} aria-label="Go to Gallery">Gallery</Link>
          <Link to="/faqs" onClick={() => setIsOpen(false)} aria-label="Go to FAQs">FAQs</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} aria-label="Go to Contact Us">Contact Us</Link>
        </div>

        <div className="hamburger" onClick={toggleMenu} aria-label="Toggle navigation menu">
          ☰
        </div>
      </div>

      {location.pathname === "/" && (
        <div className="heading-container">
          <h1 className="heading">
            Welcome to <br /> Shree Hari Nursery 🌱
          </h1>
          <p className="paragraph">
            BRINGING{" "}
            <span className="word transition">
              {subparagraph[currentWordIndex]}
            </span>{" "}
            HOME, ONE PLANT AT A TIME!
          </p>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
