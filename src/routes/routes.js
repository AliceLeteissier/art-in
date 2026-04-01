import { createHashRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ArtistProfiles from "../pages/ArtistProfiles";
import ArtistSignup from "../pages/ArtistSignup";
import ArtistProfilePage from "../pages/ArtistProfilePage";
import EditArtistPage from "../pages/EditArtistPage";

export const router = createHashRouter([
  {
    path: "/",
    element: <LandingPage />,
  },
  {
    path: "/profiles",
    element: <ArtistProfiles />,
  },
  {
    path: "/signup",
    element: <ArtistSignup />,
  },
  {
    path: "/artist/:id",
    element: <ArtistProfilePage />,
  },
  {
    path: "/edit/:id",
    element: <EditArtistPage />,
  },
]);
