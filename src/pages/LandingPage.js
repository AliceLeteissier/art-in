import Navbar from "../components/Navbar";
import heroImage from "../assets/gallery.png";
import { Link } from "react-router-dom";
import "../styles/landingPage.css";

function LandingPage() {
  return (
    <div>
      <Navbar />

      <div className="container landing-wrapper">
        <div className="hero">
          {/* LEFT SIDE TEXT */}
          <div className="hero-text">
            <h1 className="hero-heading">
              The Professional Network for the Art World
            </h1>

            <p className="hero-subtext">
              Connect with artists, curators, galleries, and institutions.
              Showcase your work and build your professional presence.
            </p>
          </div>

          {/* RIGHT SIDE IMAGE */}
          <div className="hero-image">
            <img
              src={heroImage}
              alt="Gallery"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
            />
          </div>

          {/* CTA BUTTONS - sibling of hero-text and hero-image so it can be reordered on mobile */}
          <div className="hero-cta">
            <Link to="/signup">
              <button className="btn btn-black">Get Started</button>
            </Link>

            <Link to="/profiles">
              <button className="btn btn-outline">Explore Profiles</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
