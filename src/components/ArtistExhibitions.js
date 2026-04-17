// REVIEW: Using array index as key — same concern as other list components.

function ArtistExhibitions({ exhibitions }) {
  if (!exhibitions || exhibitions.length === 0) return null;

  return (
    <div className="artist-section">
      <h2>Exhibitions</h2>
      {exhibitions.map((ex, index) => (
        <div key={index}>
          <p>
            {ex.title} – {ex.venue} ({ex.year})
          </p>
        </div>
      ))}
    </div>
  );
}

export default ArtistExhibitions;
