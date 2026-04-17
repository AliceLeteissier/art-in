import { createHashRouter } from "react-router-dom";
import LandingPage from "../pages/LandingPage";
import ArtistProfiles from "../pages/ArtistProfiles";
import ArtistSignup from "../pages/ArtistSignup";
import ArtistProfilePage from "../pages/ArtistProfilePage";
import EditArtistPage from "../pages/EditArtistPage";

// REVIEW: No catch-all / 404 route. Navigating to an unmatched path shows
// a blank screen. Add a wildcard route like { path: "*", element: <NotFound /> }.

// REVIEW: Navbar is duplicated in every page component. Consider using a shared
// layout route so the Navbar is rendered once:
//   { element: <Layout />, children: [ { path: "/", element: ... }, ... ] }

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
