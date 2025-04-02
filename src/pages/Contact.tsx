import React, { } from "react";
import "../styles/Contact.css";
import Map from "../components/Map";
import ContactForm from "../components/ContactForm";


const Contact: React.FC = () => {
  return (
    <div>

      <div className="contact-container">
        <h2>Contact Us</h2>
        <div className="contact-content">
          <div className="contact-details">
            <h3>Get in Touch</h3>
            <p>
              <strong>Email:</strong>{" "}
              <a href="mailto:info@shreeharinursery.com">
                info@shreeharinursery.com
              </a>
            </p>
            <p>
              <strong>Phone:</strong>{" "}
              <a href="tel:+919825665630">+91 98256 65630</a>
            </p>
            <p>
              <strong>Alternate Phone:</strong>{" "}
              <a href="tel:+919825665630">+91 98256 65630</a>
            </p>
            <p>
              <strong>WhatsApp:</strong>{" "}
              <a href="https://wa.me/919825665630">Chat on WhatsApp</a>
            </p>
            <p>
              <strong>Address:</strong> Shree Hari Nursery, Patapur, Junagadh, Gujarat 362263
            </p>
            <p>
              <strong>Business Hours:</strong>
              <br />
              Mon - Sat: 9:00 AM - 6:00 PM <br />
              Sunday: Closed
            </p>
          </div>

          <ContactForm/>
        </div>
      </div>
      <Map />
    </div>
  );
};

export default Contact;
