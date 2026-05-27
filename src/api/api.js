import axios from "axios";

const api = axios.create({
  baseURL: "https://probartan-server.onrender.com",
});

export default api;