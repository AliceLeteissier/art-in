import { Link } from "react-router";

function ProfileCard({ profile }) {
  return (
    <Link
      to={`/artist/${profile._id}`}
      style={{ textDecoration: "none", color: "black" }}
    >
      <div
        className="card"
        style={{ transition: "0.2s", cursor: "pointer" }}
      >
        <div
          style={{
            width: "100%",
            height: "200px",
            background: "#eee",
            borderRadius: "8px",
            marginBottom: "12px",
          }}
        >
          {profile.artworks?.[0]?.imageUrl && (
            <img
              src={profile.artworks[0].imageUrl}
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "8px",
              }}
            />
          )}
        </div>

        <h3>{profile.name}</h3>
        <p style={{ color: "#666" }}>
          {profile.location?.city}, {profile.location?.country}
        </p>

        <button
          className="btn btn-outline"
          style={{ width: "100%", marginTop: "12px" }}
        >
          View Profile
        </button>
      </div>
    </Link>
  );
}

export default ProfileCard;
