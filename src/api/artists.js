const API_URL =
  "https://artist-profiles-api-deployed.onrender.com/api/v1/artistprofiles";

// Get all artists
export const getArtists = async () => {
  const response = await fetch(API_URL);
  const data = await response.json();
  return data.data;
};

// Create artist
export const createArtist = async (artistData) => {
  const response = await fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(artistData),
  });

  const data = await response.json();
  return data;
};

// Update artist by ID

export const updateArtist = async (id, artist) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(artist),
  });
  return res.json();
};

// DElete artist by ID
export const deleteArtist = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
