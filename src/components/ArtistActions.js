import { useNavigate } from "react-router-dom";

// REVIEW: The Delete button triggers a destructive action with no confirmation
// dialog. Add a window.confirm() or a modal before calling onDelete.

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
