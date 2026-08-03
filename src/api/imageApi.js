import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-creator-hub-server.onrender.com/api/ai",
});

export const generateImage = (prompt, token) => {
  return API.post(
    "/image",
    { prompt },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};