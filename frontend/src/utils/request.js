import axios from "axios";

const request = axios.create({
  baseURL: "https://fiverr-clone-api.vercel.app",
  withCredentials: true,
});

export default request;
