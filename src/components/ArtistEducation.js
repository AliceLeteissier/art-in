// REVIEW: Using array index as key — same concern as other list components.

function ArtistEducation({ education }) {
  if (!education || education.length === 0) return null;

  return (
    <div className="artist-section">
      <h2>Education</h2>
      {education.map((ed, index) => (
        <div key={index}>
          <p>
            {ed.degree} – {ed.institution} ({ed.year})
          </p>
        </div>
      ))}
    </div>
  );
}

export default ArtistEducation;
