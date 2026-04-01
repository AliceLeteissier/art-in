function ArtistMediums({ mediums }) {
  if (!mediums || mediums.length === 0) return null;

  return (
    <div className="artist-section">
      <h2>Mediums</h2>

      <div className="mediums">
        {mediums.map((m) => (
          <span
            key={m}
            className="medium-tag"
          >
            {m}
          </span>
        ))}
      </div>
    </div>
  );
}

export default ArtistMediums;
