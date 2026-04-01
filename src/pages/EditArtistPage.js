import { useParams } from "react-router-dom";
import ArtistSignup from "./ArtistSignup";

function EditArtistPage() {
  const { id } = useParams();

  return <ArtistSignup artistId={id} />;
}

export default EditArtistPage;
