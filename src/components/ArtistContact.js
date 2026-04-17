// REVIEW: No null checks — if email, phone, or website is missing the UI
// renders "Email: " / "Phone: " with nothing after them, and the website
// <a> tag gets href={undefined} which produces a broken link.
// Conditionally render each field only when the value exists.

function ArtistContact({ artist }) {
  return (
    <div className="artist-section">
      <h2>Contact</h2>
      <p>Email: {artist.email}</p>
      <p>Phone: {artist.phone}</p>
      <p>
        Website:{" "}
        <a href={artist.website} target="_blank" rel="noreferrer">
          {artist.website}
        </a>
      </p>
    </div>
  );
}

export default ArtistContact;
