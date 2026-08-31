import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api/payment",
});

export const createCheckoutSession = (token) => {
  return API.post(
    "/create-checkout-session",
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const verifyStripePayment = (sessionId, token) => {
  return API.post(
    "/verify-payment",
    {
      sessionId,
    },
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};