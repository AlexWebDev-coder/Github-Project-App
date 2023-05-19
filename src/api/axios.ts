import axios from "axios";
import { API_URL, AUTH_TOKEN } from "../util/constants";

const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use((config) => {
//   if (config) {
//     const token = AUTH_TOKEN;

//     if (token)
//       axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     // if (token) axios.defaults.headers!.Authorization = `Bearer ${token}`;
//   }

//   return config;
// });

export default api;
