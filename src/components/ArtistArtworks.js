function ArtistArtworks({ artworks }) {
  if (!artworks || artworks.length === 0) return null;

  return (
    <div className="artist-section">
      <h2>Artworks</h2>
      <div className="artwork-grid">
        {artworks.map((art, index) => (
          <div
            key={index}
            className="artwork-card"
          >
            <p>
              {art.title} ({art.year})
            </p>
            {art.imageUrl && (
              <img
                src={art.imageUrl}
                alt={art.title}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default ArtistArtworks;
