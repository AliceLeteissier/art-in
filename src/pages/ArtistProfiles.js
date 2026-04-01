import { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ProfileCard from "../components/ProfileCard";
import { getArtists } from "../api/artists";
import "../styles/artistProfiles.css";

function ArtistProfiles() {
  const [profiles, setProfiles] = useState([]);
  const [filter, setFilter] = useState("all");
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(true);

  const profilesPerPage = 6;

  useEffect(() => {
    const fetchProfiles = async () => {
      const artists = await getArtists();
      setProfiles(artists);
      setLoading(false);
    };

    fetchProfiles();
  }, []);

  // Filter profiles by medium
  const filteredProfiles =
    filter === "all"
      ? profiles
      : profiles.filter((profile) => profile.mediums?.includes(filter));

  // Pagination logic
  const startIndex = (page - 1) * profilesPerPage;
  const paginatedProfiles = filteredProfiles.slice(
    startIndex,
    startIndex + profilesPerPage,
  );

  const totalPages = Math.ceil(filteredProfiles.length / profilesPerPage);

  return (
    <div>
      <Navbar />

      <div className="container artist-profiles-container">
        <h1 className="artist-profiles-title">Artist Profiles</h1>
        <p className="artist-profiles-subtitle">
          Discover artists from around the world.
        </p>

        {/* Filter Buttons */}
        <div className="artist-filter-buttons">
          {["all", "painting", "sculpture", "photography", "installation"].map(
            (medium) => (
              <button
                key={medium}
                className={
                  filter === medium ? "btn btn-black" : "btn btn-outline"
                }
                onClick={() => {
                  setFilter(medium);
                  setPage(1);
                }}
              >
                {medium}
              </button>
            ),
          )}
        </div>

        {/* Profile Grid */}
        <div className="artist-grid">
          {loading ? (
            <p>Loading profiles...</p>
          ) : (
            paginatedProfiles.map((profile) => (
              <ProfileCard
                key={profile._id}
                profile={profile}
              />
            ))
          )}
        </div>

        {/* Pagination */}
        <div className="artist-pagination">
          <button
            className="btn btn-outline"
            onClick={() => setPage(page - 1)}
            disabled={page === 1}
          >
            Previous
          </button>

          <span className="artist-page-info">
            Page {page} of {totalPages || 1}
          </span>

          <button
            className="btn btn-outline"
            onClick={() => setPage(page + 1)}
            disabled={page === totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
}

export default ArtistProfiles;
