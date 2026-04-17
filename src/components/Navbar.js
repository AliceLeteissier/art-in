import { Link } from "react-router-dom";
import ArtInLogo from "./ArtInLogo";

// REVIEW: Navbar.css exists with styles for .navbar, .hamburger, and
// .mobile-menu but is never imported here. The component uses only inline
// styles. Either import and use the CSS file or delete the unused CSS.

// REVIEW: No responsive hamburger menu — on mobile the nav links are
// invisible (Navbar.css hides .nav-right at 768px) but there is no
// hamburger toggle implemented, so mobile users have no navigation.

// REVIEW: Heavy use of inline styles. Move these to the Navbar.css file
// for consistency and maintainability.

function Navbar() {
  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        width: "100%",
        background: "white",
        borderBottom: "1px solid #eee",
        padding: "16px 0",
        zIndex: 1000,
      }}
    >
      <div
        className="container"
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/" style={{ textDecoration: "none", color: "black" }}>
          <ArtInLogo size="large" />
        </Link>

        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
          <Link to="/profiles" className="nav-link">
            See Artist Profiles
          </Link>

          <Link to="/signup">
            <button className="btn btn-black">Sign Up</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
