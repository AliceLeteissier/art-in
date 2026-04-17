// REVIEW: No null/empty checks on artist.bio and artist.description.
// If either is missing the section renders an empty <p> tag with just
// a heading — consider hiding the section or showing a placeholder.

function ArtistBio({ artist }) {
  return (
    <div className="artist-section">
      <h2>Bio</h2>
      <p>{artist.bio}</p>

      <h2>Description</h2>
      <p>{artist.description}</p>
    </div>
  );
}

export default ArtistBio;
