function ArtistContact({ artist }) {
  return (
    <div className="artist-section">
      <h2>Contact</h2>
      <p>Email: {artist.email}</p>
      <p>Phone: {artist.phone}</p>
      <p>
        Website:{" "}
        <a
          href={artist.website}
          target="_blank"
          rel="noreferrer"
        >
          {artist.website}
        </a>
      </p>
    </div>
  );
}

export default ArtistContact;
