import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-creator-hub-server.onrender.com/api/ai",
});

export const chatWithAI = (prompt, token) => {
  return API.post(
    "/chat",
    { prompt },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
export const getHistory = (token) => {
  return API.get("/history", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const generateCode = (prompt, token) => {
  return API.post(
    "/code",
    { prompt },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};
