// import { setInterceptors } from "./common/interceptors";
import axios from "axios";

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

// api.interceptors.request.use(async (config) => {
//   const token = store.getState().token.accessToken;

//   if (token) {
//     config.headers.Authorization = `${token}`;
//   }

//   return config;
// });

export default api;
