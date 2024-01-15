import axios from "axios";

const request = axios.create({
  baseURL: "https://fiverr-clone-api-eotf.onrender.com",
  withCredentials: true,
});

export default request;
