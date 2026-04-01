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
