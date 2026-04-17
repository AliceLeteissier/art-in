const API_URL =
  "https://artist-profiles-api-deployed.onrender.com/api/v1/artistprofiles";

// REVIEW: None of the fetch calls check response.ok before parsing JSON.
// If the server returns a 4xx/5xx, these will silently return error bodies
// or throw on invalid JSON. Wrap each in a check like:
//   if (!response.ok) throw new Error(`API error: ${response.status}`);

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

// REVIEW: Typo — "DElete" should be "Delete".

// Update artist by ID

export const updateArtist = async (id, artist) => {
  const res = await fetch(`${API_URL}/${id}`, {
    method: "PUT",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(artist),
  });
  return res.json();
};

// REVIEW: deleteArtist does not check response status or return anything.
// Callers have no way to know if the delete actually succeeded.
export const deleteArtist = async (id) => {
  await fetch(`${API_URL}/${id}`, {
    method: "DELETE",
  });
};
