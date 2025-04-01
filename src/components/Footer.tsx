import React from "react";
import { Link } from "react-router-dom";
import "../styles/Footer.css";

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-title">
        {" "}
        <strong>Shree Hari Nursery</strong>{" "}
      </div>

      <div className="footer-info">
        <div className="info-item">
          📍 <strong>Address:</strong>
          <a href="https://maps.app.goo.gl/Cs6jSDqKcgfAywuP7">Shree Hari Nursery, Patapur, Junagadh, Gujarat 362263</a>
        </div>
        <div className="info-item">
          📞 <strong>Phone:</strong> <a href="tel:+919825665630">+91 98256 65630</a>
        </div>
        <div className="info-item">
          📧 <strong>Email:</strong> <a href="mailto:contact@shreeharinursery.com">contact@shreeharinursery.com</a>
        </div>

        {/* <div className="footer-social">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/6d/Facebook_Logo_2023.png"
              alt="Facebook"
            />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/6/60/Twitter_Logo_as_of_2021.svg"
              alt="Twitter"
            />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/a/a5/Instagram_icon.png"
              alt="Instagram"
            />
          </a>
        </div> */}
      </div>

      <div className="footer-links">
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/gallery">Gallery</Link>
        <Link to="/faqs">FAQs</Link>
        <Link to="/contact">Contact Us</Link>
      </div>
      {/* <Map /> */}

      <p className="footer-copy">
        © 2025 Shree Hari Nursery. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
