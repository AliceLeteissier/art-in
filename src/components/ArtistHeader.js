function ArtistHeader({ artist }) {
  return (
    <div className="artist-header">
      <h1>{artist.name}</h1>
      <p>
        {artist.location?.city}, {artist.location?.country}
      </p>
    </div>
  );
}

export default ArtistHeader;
