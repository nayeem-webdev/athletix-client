import axios from "axios";

const API = axios.create({
  // baseURL: "http://localhost:5000",
  baseURL: "https://b10-a10-md-nayeem-uddin-server-side.vercel.app",
});

export default API;
