function ArtistDistinctions({ distinctions }) {
  if (!distinctions || distinctions.length === 0) return null;

  return (
    <div className="artist-section">
      <h2>Distinctions</h2>
      {distinctions.map((d, index) => (
        <div key={index}>
          <p>
            {d.title} – {d.organization} ({d.year})
          </p>
        </div>
      ))}
    </div>
  );
}

export default ArtistDistinctions;
