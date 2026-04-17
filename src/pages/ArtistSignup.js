import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import { createArtist } from "../api/artists";
import { useNavigate } from "react-router-dom";
import "../styles/signup.css";

// REVIEW: The update path (when artistId is set) hardcodes the API URL
// in both useEffect and handleSubmit instead of using the updateArtist
// function already exported from api/artists.js.

// REVIEW: Multiple console.log statements left in (lines 53, 145) —
// remove debug logging before shipping.

// REVIEW: handleImageUpload creates object URLs via URL.createObjectURL()
// but never calls URL.revokeObjectURL() — this is a memory leak.

// REVIEW: handleImageUpload is defined but never wired to any <input
// type="file" />. The artwork image field is a plain text URL input,
// making handleImageUpload dead code.

// REVIEW: In handleSubmit, `description` is set to the same value as
// `bio` — this looks like a copy-paste bug. Description should have its
// own field or be intentionally omitted.

// REVIEW: No error handling on handleSubmit. If the create/update API
// call fails, the user still sees "Profile created/updated" and gets
// redirected.

// REVIEW: No validation on step 3 (artwork fields). Users can submit
// artworks with empty titles or years.

// REVIEW: Using Date.now() for artwork ids can cause key collisions
// if two items are added in the same millisecond tick.

function ArtistSignup({ artistId }) {
  const navigate = useNavigate();

  const [step, setStep] = useState(1);
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [mediumError, setMediumError] = useState("");

  const [basicInfo, setBasicInfo] = useState({
    name: "",
    email: "",
    website: "",
    bio: "",
    city: "",
    country: "",
  });

  const [mediums, setMediums] = useState([]);

  const mediumOptions = [
    "photography",
    "installation",
    "sculpture",
    "painting",
    "performance",
    "digital",
  ];

  const [artworks, setArtworks] = useState([
    {
      id: Date.now(),
      title: "",
      year: "",
      imagePreview: "",
    },
  ]);

  /* FETCH ARTIST IF EDIT MODE */
  useEffect(() => {
    if (!artistId) return;

    fetch(
      `https://artist-profiles-api-deployed.onrender.com/api/v1/artistprofiles/${artistId}`,
    )
      .then((res) => res.json())
      .then((result) => {
        console.log("Fetched artist:", result);

        const artist = result.data; // IMPORTANT

        setBasicInfo({
          name: artist.name || "",
          email: artist.email || "",
          website: artist.website || "",
          bio: artist.bio || "",
          city: artist.location?.city || "",
          country: artist.location?.country || "",
        });

        setMediums(artist.mediums || []);

        if (artist.artworks && artist.artworks.length > 0) {
          setArtworks(
            artist.artworks.map((art) => ({
              id: Date.now() + Math.random(),
              title: art.title || "",
              year: art.year || "",
              imagePreview: art.imageUrl || "",
            })),
          );
        }
      })
      .catch((err) => console.log(err));
  }, [artistId]);

  /* VALIDATION */
  const validateStep1 = () => {
    let newErrors = {};

    if (!basicInfo.name) newErrors.name = "Required";
    if (!basicInfo.email) newErrors.email = "Required";
    if (!basicInfo.bio) newErrors.bio = "Required";

    const emailRegex = /\S+@\S+\.\S+/;
    if (basicInfo.email && !emailRegex.test(basicInfo.email)) {
      newErrors.email = "Invalid email";
    }

    const urlRegex = /^https?:\/\/.+/;
    if (basicInfo.website && !urlRegex.test(basicInfo.website)) {
      newErrors.website = "Invalid URL";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const toggleMedium = (medium) => {
    setMediums(
      mediums.includes(medium)
        ? mediums.filter((m) => m !== medium)
        : [...mediums, medium],
    );
  };

  const addArtwork = () => {
    setArtworks([
      ...artworks,
      { id: Date.now(), title: "", year: "", imagePreview: "" },
    ]);
  };

  const handleImageUpload = (file, id) => {
    const preview = URL.createObjectURL(file);
    setArtworks(
      artworks.map((a) => (a.id === id ? { ...a, imagePreview: preview } : a)),
    );
  };

  /* SUBMIT CREATE OR UPDATE */
  const handleSubmit = async () => {
    const profileData = {
      name: basicInfo.name,
      bio: basicInfo.bio,
      description: basicInfo.bio,
      email: basicInfo.email,
      website: basicInfo.website,
      location: {
        city: basicInfo.city,
        country: basicInfo.country,
      },
      mediums,
      artworks: artworks.map((art) => ({
        title: art.title,
        year: art.year,
        imageUrl: art.imagePreview,
      })),
    };
    console.log("SENDING TO API:", profileData);

    if (artistId) {
      await fetch(
        `https://artist-profiles-api-deployed.onrender.com/api/v1/artistprofiles/${artistId}`,
        {
          method: "PUT",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(profileData),
        },
      );

      setSuccessMessage("Profile updated");
    } else {
      await createArtist(profileData);
      setSuccessMessage("Profile created");
    }

    setTimeout(() => navigate("/profiles"), 2000);
  };

  const nextStep = () => {
    if (step === 1 && !validateStep1()) return;

    if (step === 2 && mediums.length === 0) {
      setMediumError("Select at least one medium");
      return;
    }

    setMediumError("");
    setStep(step + 1);
  };

  const prevStep = () => setStep(step - 1);

  return (
    <div>
      <Navbar />

      <div className="signup-page">
        <div className="signup-card">
          <h1 className="signup-header">
            {artistId ? "Edit Artist Profile" : "Create Your Artist Profile"}
          </h1>

          {successMessage && <div className="success">{successMessage}</div>}

          {/* STEP 1 */}
          {step === 1 && (
            <div className="step">
              <p className="signup-header">Personal information</p>

              <div className="grid-2">
                <div>
                  <input
                    placeholder="Full Name"
                    className="form-input"
                    value={basicInfo.name}
                    onChange={(e) =>
                      setBasicInfo({ ...basicInfo, name: e.target.value })
                    }
                  />
                  {errors.name && <p className="error">{errors.name}</p>}
                </div>

                <div>
                  <input
                    placeholder="Email"
                    className="form-input"
                    value={basicInfo.email}
                    onChange={(e) =>
                      setBasicInfo({ ...basicInfo, email: e.target.value })
                    }
                  />
                  {errors.email && <p className="error">{errors.email}</p>}
                </div>
              </div>

              <input
                placeholder="Website"
                className="form-input"
                value={basicInfo.website}
                onChange={(e) =>
                  setBasicInfo({ ...basicInfo, website: e.target.value })
                }
              />
              {errors.website && <p className="error">{errors.website}</p>}

              <textarea
                placeholder="Bio"
                rows="3"
                className="form-input"
                value={basicInfo.bio}
                onChange={(e) =>
                  setBasicInfo({ ...basicInfo, bio: e.target.value })
                }
              />
              {errors.bio && <p className="error">{errors.bio}</p>}

              <div className="grid-2">
                <input
                  placeholder="City"
                  className="form-input"
                  value={basicInfo.city}
                  onChange={(e) =>
                    setBasicInfo({ ...basicInfo, city: e.target.value })
                  }
                />

                <input
                  placeholder="Country"
                  className="form-input"
                  value={basicInfo.country}
                  onChange={(e) =>
                    setBasicInfo({ ...basicInfo, country: e.target.value })
                  }
                />
              </div>
            </div>
          )}

          {/* STEP 2 */}
          {step === 2 && (
            <div className="step">
              <p className="signup-header">Select your mediums</p>
              {mediumError && <p className="error">{mediumError}</p>}

              <div className="medium-grid">
                {mediumOptions.map((medium) => (
                  <button
                    type="button"
                    key={medium}
                    className={`medium-btn ${
                      mediums.includes(medium) ? "active" : ""
                    }`}
                    onClick={() => toggleMedium(medium)}
                  >
                    {medium}
                  </button>
                ))}
              </div>
            </div>
          )}

          {/* STEP 3 */}
          {step === 3 && (
            <div className="step">
              <p className="signup-header">Add Artworks</p>

              {artworks.map((art) => (
                <div key={art.id} className="art-card">
                  <input
                    placeholder="Artwork Title"
                    className="form-input"
                    value={art.title}
                    onChange={(e) =>
                      setArtworks(
                        artworks.map((a) =>
                          a.id === art.id ? { ...a, title: e.target.value } : a,
                        ),
                      )
                    }
                  />

                  <input
                    placeholder="Year"
                    className="form-input"
                    value={art.year}
                    onChange={(e) =>
                      setArtworks(
                        artworks.map((a) =>
                          a.id === art.id ? { ...a, year: e.target.value } : a,
                        ),
                      )
                    }
                  />

                  <input
                    placeholder="Image URL"
                    className="form-input"
                    value={art.imagePreview}
                    onChange={(e) =>
                      setArtworks(
                        artworks.map((a) =>
                          a.id === art.id
                            ? { ...a, imagePreview: e.target.value }
                            : a,
                        ),
                      )
                    }
                  />

                  {art.imagePreview && <img src={art.imagePreview} alt="" />}
                </div>
              ))}

              <button className="btn-small" onClick={addArtwork}>
                + Add Artwork
              </button>
            </div>
          )}

          {/* STEP 4 */}
          {step === 4 && (
            <div className="step center">
              <p className="signup-header">Ready to submit?</p>
              <button className="btn-submit" onClick={handleSubmit}>
                {artistId ? "Update Profile" : "Create Profile"}
              </button>
            </div>
          )}

          {/* NAVIGATION */}
          <div className="nav-buttons">
            {step > 1 && (
              <button className="btn-small left" onClick={prevStep}>
                Previous
              </button>
            )}
            {step < 4 && (
              <button className="btn-primary" onClick={nextStep}>
                Next
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ArtistSignup;
