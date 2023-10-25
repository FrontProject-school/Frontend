// import { setInterceptors } from "./common/interceptors";
import axios from "axios";
import store from "../store/index.js";

const api = axios.create({
  baseURL: "http://localhost:8000",
  headers: {
    "Content-Type": "application/json",
  },
});

api.interceptors.request.use(async (config) => {
  const token = store.state.token;

  if (token) {
    config.headers.Authorization = `${token}`;
  }
  console.log(token);

  return config;
});

export default api;
