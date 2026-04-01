function ArtistResidencies({ residencies }) {
  if (!residencies || residencies.length === 0) return null;

  return (
    <div className="artist-section">
      <h2>Residencies</h2>
      {residencies.map((res, index) => (
        <div key={index}>
          <p>
            {res.program} – {res.location} ({res.year})
          </p>
        </div>
      ))}
    </div>
  );
}

export default ArtistResidencies;
