import { Link } from "react-router-dom";

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
        <div className="profile-card-image">
          {profile.artworks?.[0]?.imageUrl && (
            <img
              src={profile.artworks[0].imageUrl}
              alt=""
            />
          )}
        </div>

        <h3>{profile.name}</h3>
        <p className="profile-card-location">
          {profile.location?.city}, {profile.location?.country}
        </p>

        <button className="btn btn-outline profile-card-btn">
          View Profile
        </button>
      </div>
    </Link>
  );
}

export default ProfileCard;
