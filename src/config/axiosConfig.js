import axios from "axios";
const baseURL=process.env.NODE_ENV==="production"?'/api':"https://homeonrentback.onrender.com"
const axiosConfig = axios.create({
  baseURL,
  withCredentials: true,   
});

export default axiosConfig;