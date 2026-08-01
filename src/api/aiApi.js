import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/ai",
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