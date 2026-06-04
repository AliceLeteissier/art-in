import { useState } from "react";
import { Link } from "react-router-dom";
import ArtInLogo from "./ArtInLogo";
import "../styles/Navbar.css";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="container navbar-inner">
        <Link
          to="/"
          className="logo-link"
        >
          <ArtInLogo size="large" />
        </Link>

        {/* Desktop links */}
        <div className="nav-right">
          <Link
            to="/profiles"
            className="nav-link"
          >
            See Artist Profiles
          </Link>
          <Link to="/signup">
            <button className="btn btn-black">Sign Up</button>
          </Link>
        </div>

        {/* Hamburger */}
        <div
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span />
          <span />
          <span />
        </div>
      </div>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="mobile-menu">
          <Link
            to="/profiles"
            onClick={() => setMenuOpen(false)}
          >
            See Artist Profiles
          </Link>
          <Link
            to="/signup"
            onClick={() => setMenuOpen(false)}
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
