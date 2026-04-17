// REVIEW: If only city or only country is present, the output is
// "Toronto, " or ", Canada" — render the comma conditionally.

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
