import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/artistProfile.css";

import ArtistHeader from "../components/ArtistHeader";
import ArtistBio from "../components/ArtistBio";
import ArtistContact from "../components/ArtistContact";
import ArtistMediums from "../components/ArtistMediums";
import ArtistArtworks from "../components/ArtistArtworks";
import ArtistExhibitions from "../components/ArtistExhibitions";
import ArtistEducation from "../components/ArtistEducation";
import ArtistResidencies from "../components/ArtistResidencies";
import ArtistDistinctions from "../components/ArtistDistinctions";
import ArtistActions from "../components/ArtistActions";

// REVIEW: The API URL is hardcoded here instead of reusing the centralized
// functions from api/artists.js. Both the fetch in useEffect and handleDelete
// duplicate URLs that already exist in the API module.

// REVIEW: console.log("Artist data:", data) on line 32 is debug output
// left in production code — remove it.

// REVIEW: handleDelete has no error handling. If the DELETE request fails
// the user is still navigated away, and the artist may not actually be deleted.

// REVIEW: No error state is shown to the user. If the fetch fails, the only
// feedback is "Artist not found" which is misleading — it could be a network error.

function ArtistProfilePage() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchArtist = async () => {
      try {
        const res = await fetch(
          `https://artist-profiles-api-deployed.onrender.com/api/v1/artistprofiles/${id}`,
        );

        const data = await res.json();
        console.log("Artist data:", data);

        setArtist(data.data || data);
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };

    fetchArtist();
  }, [id]);

  const handleDelete = async () => {
    await fetch(
      `https://artist-profiles-api-deployed.onrender.com/api/v1/artistprofiles/${id}`,
      { method: "DELETE" },
    );

    navigate("/profiles");
  };

  if (loading) return <p>Loading...</p>;
  if (!artist) return <p>Artist not found</p>;

  return (
    <div>
      <Navbar />
      <div className="profile-container">
        <div className="profile-card">
          <ArtistHeader artist={artist} />
          <ArtistBio artist={artist} />
          <ArtistContact artist={artist} />
          <ArtistMediums mediums={artist.mediums} />
          <ArtistArtworks artworks={artist.artworks} />
          <ArtistExhibitions exhibitions={artist.exhibitions} />
          <ArtistEducation education={artist.education} />
          <ArtistResidencies residencies={artist.residencies} />
          <ArtistDistinctions distinctions={artist.distinctions} />
          <ArtistActions id={id} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
}

export default ArtistProfilePage;
