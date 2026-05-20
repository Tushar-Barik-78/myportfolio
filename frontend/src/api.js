import axios from "axios";

// Sabhi API calls yahan se jayengi — ek jagah se manage karo
const API = axios.create({ baseURL: "http://localhost:5000/api" });

// Har request mein automatically JWT token attach ho jata hai
API.interceptors.request.use((req) => {
  const token = localStorage.getItem("adminToken");
  if (token) req.headers.Authorization = `Bearer ${token}`;
  return req;
});

export const loginAdmin    = (data) => API.post("/auth/login", data);
export const getPortfolio  = ()     => API.get("/portfolio");
export const savePortfolio = (data) => API.put("/portfolio", data);
export const uploadImage   = (file) => {
  const form = new FormData();
  form.append("image", file);
  return API.post("/portfolio/upload", form);
};