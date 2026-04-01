import { Link } from "react-router-dom";
import ArtInLogo from "./ArtInLogo";

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
        <Link
          to="/"
          style={{ textDecoration: "none", color: "black" }}
        >
          <ArtInLogo size="large" />
        </Link>

        <div
          style={{
            display: "flex",
            gap: "20px",
            alignItems: "center",
          }}
        >
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
      </div>
    </div>
  );
}

export default Navbar;
