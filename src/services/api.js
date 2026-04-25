import axios from "axios";

const api = axios.create({
  baseURL: "https://www.mispltd.co.in/blogApi",
  timeout: 5000,
});

export default api;