import axios from "axios";
const API = axios.create({
  baseURL: "https://ai-creator-hub-server.onrender.com/api/auth",
});
export const registerUser = (userData) => {
  return API.post("/register", userData);
};
export const loginUser = (userData) => {
  return API.post("/login", userData);
};
export const getProfile = (token) => {
  return API.get("/profile", {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};
export const sendOTP = (email) => {
  return API.post("/send-otp", { email });
};
export const verifyOTP = (email, otp) => {
  return API.post("/verify-otp", {
    email,
    otp,
  });
};
export const resetPassword = (email, otp, password) => {
  return API.post("/reset-password", {
    email,
    otp,
    password,
  });
};

export const googleLoginUser = (credential) => {
  return API.post("/google-login", {
    credential,
  });
};