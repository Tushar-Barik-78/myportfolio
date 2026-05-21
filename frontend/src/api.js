// src/api.js
import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Har request mein automatically JWT token attach ho jata hai
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("adminToken");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const loginAdmin = (data) => API.post("/auth/login", data);

// signal pass kar sakte ho — timeout/abort ke liye usePortfolio mein use hota hai
export const getPortfolio = (config = {}) => API.get("/portfolio", config);

export const savePortfolio = (data) => API.put("/portfolio", data);
export const uploadImage = (file) => {
  const form = new FormData();
  form.append("image", file);
  return API.post("/portfolio/upload", form);
};
