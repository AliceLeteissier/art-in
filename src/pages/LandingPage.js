import Navbar from "../components/Navbar";
import heroImage from "../assets/gallery.png"; // add an image in src/assets/
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div>
      <Navbar />

      <div
        className="container"
        style={{ paddingTop: "120px" }}
      >
        <div className="hero">
          {/* LEFT SIDE */}
          <div className="hero-text">
            <h1 style={{ fontSize: "58px", lineHeight: "1.2" }}>
              The Professional Network for the Art World
            </h1>

            <p style={{ color: "#555", maxWidth: "500px" }}>
              Connect with artists, curators, galleries, and institutions.
              Showcase your work and build your professional presence.
            </p>

            <div style={{ marginTop: "20px", display: "flex", gap: "12px" }}>
              <Link to="/signup">
                <button className="btn btn-black">Get Started</button>
              </Link>

              <Link to="/profiles">
                <button className="btn btn-outline">Explore Profiles</button>
              </Link>
            </div>
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
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
