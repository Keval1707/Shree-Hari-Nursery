import React from "react";
import { Link } from "react-router-dom";
import "../styles/Home.css";
import ContactForm from "../components/ContactForm";
import Gallery from "./Gallery";

interface HomePropos {
  data?: {
    id: number;
    name: string;
    path: string;
    Category: string;
    desc: string;
    available: boolean;
  }[];
}

const Home: React.FC<HomePropos> = ({ data = [] }) => {
  return (
    <>
      <div className="container">
        <section className="Bringing-Nature">
          <div className="content">
            <h2>🌿 Bringing Nature Closer to You 🌿</h2>
            <p>
              At Shree Hari Nursery, we believe that every plant tells a story,
              and we are here to help you create your own green sanctuary.
              Whether you're a seasoned gardener or just beginning your journey
              with plants, our nursery offers a diverse collection of indoor,
              outdoor, medicinal, and flowering plants to suit every space and
              need.
            </p>
          </div>
          <div className="imas">
            <video src="/video.mp4" autoPlay loop muted></video>
          </div>
        </section>

        <section className="Why-Choose-Us">
          <h2>Why Choose Us?</h2>
          <div className="content">
            <div className="cards">
              <div className="card">
                <h3>Wide Variety of Plants</h3>
                <p>
                  Indoor, outdoor, medicinal & flowering plants to beautify any
                  space.
                </p>
              </div>
              <div className="card">
                <h3>Expert Gardening Tips</h3>
                <p>
                  Get seasonal advice & easy care techniques to keep your plants
                  thriving.
                </p>
              </div>
              <div className="card">
                <h3>Eco-Friendly Approach</h3>
                <p>
                  We follow sustainable gardening with organic fertilizers &
                  water-efficient methods.
                </p>
              </div>
              <div className="card">
                <h3>Passion for Greenery</h3>
                <p>Bringing nature closer with love, expertise & dedication.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="Who-we-are">
          <div className="images">
            <img src="/Products/30.webp" alt="" />
            <img src="/Products/31.webp" alt="" />
          </div>
          <div className="content">
            <h2>Who We Are?</h2>
            <p>
              At Shree Hari Nursery, we are passionate about bringing nature
              into every home. With years of experience in nurturing plants, we
              offer a diverse collection of indoor & outdoor plants, flowering
              varieties, medicinal herbs, and more.
              <br />
              <br />
              Our mission is to promote greenery and inspire plant lovers by
              providing expert gardening tips and knowledge. Whether you're a
              beginner or an experienced gardener, we help you choose the right
              plants and care for them with ease.
              <br />
              <br />
              Visit us and explore the beauty of nature! 🌱✨
            </p>
          </div>
        </section>

        {/* Gallery Section */}
        <section className="Gallery-home">
          <Gallery data={data} />
          <Link to="/gallery">
            <button type="button">View More</button>
          </Link>
        </section>
        <section className="Content-form">
          <ContactForm />
        </section>
      </div>
    </>
  );
};

export default Home;
