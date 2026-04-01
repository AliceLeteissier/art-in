import { useNavigate } from "react-router-dom";

function ArtistActions({ id, onDelete }) {
  const navigate = useNavigate();

  return (
    <div className="artist-actions">
      <button onClick={() => navigate(`/edit/${id}`)}>Edit</button>
      <button onClick={onDelete}>Delete</button>
    </div>
  );
}

export default ArtistActions;
