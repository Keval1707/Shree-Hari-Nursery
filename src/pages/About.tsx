import React from "react";
import "../styles/About.css";

const About: React.FC = () => {
  return (
    <div className="about-container">
      <div className="about-header">
        <h1>🌱Welcome to Shree Hari Nursery 🌿</h1>
        <p>
          At Shree Hari Nursery, we are passionate about plants and gardening.
          Our nursery offers a wide variety of healthy plants, flowers, and
          gardening solutions, tailored to help you grow the garden of your
          dreams.
        </p>
      </div>
      <div className="about-story">
        <div className="content">
          <h2>Our Story</h2>
          <p>
            Shree Hari Nursery was started in 2012 with a simple mission – to
            provide the best plants and gardening supplies to our community.
            Over the years, we have grown and expanded our collection to meet
            the needs of all types of gardeners. We offer a wide variety of
            indoor and outdoor plants, perfect for homes, offices, and
            landscapes. Our nursery is a one-stop shop for plant lovers,
            providing everything from flowering plants to fruit trees. We take
            pride in offering healthy, well-nurtured plants that thrive in
            different environments. Along with plants, we also supply quality
            gardening tools, fertilizers, and pots to help you grow your green
            space.
          </p>
        </div>
        <img src="./Products/1.webp" alt="Our Story" />
      </div>
      <div className="about-values">
        <div className="content">
          <h2>Our Values</h2>
          <ul>
            <li>
              🌱 Sustainability: We believe in eco-friendly gardening practices.
            </li>
            <li>
              🌸 Quality: We ensure all our plants are healthy and ready to
              grow.
            </li>
            <li>
              🌿 Education: We are here to help and guide you on your gardening
              journey.
            </li>
            <li>
              🌎 Variety: We offer a wide range of plants, from indoor greens to
              outdoor landscapes.
            </li>
            <li>
              🛒 Convenience: Get all your gardening essentials in one place,
              from plants to tools.
            </li>
          </ul>
        </div>
        <img src="./Products/1.webp" alt="Our Values" />
      </div>
    </div>
  );
};

export default About;
