import axios from "axios";
const baseURL = process.env.NODE_ENV === "production" ? 'https://homeonrentback.onrender.com' : import.meta.env.VITE_BACKEND_URL;

const axiosConfig = axios.create({
  baseURL,
  withCredentials: true,   
});

export default axiosConfig;
