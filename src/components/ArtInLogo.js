import React from "react";
import "../styles/artInLogo.css";

function ArtInLogo({ size = "medium" }) {
  return (
    <div className={`logo-container logo-${size}`}>
      <span className="logo-art">Art</span>
      <span className="logo-in">in</span>
    </div>
  );
}

export default ArtInLogo;
