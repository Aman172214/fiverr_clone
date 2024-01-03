import axios from "axios";

const request = axios.create({
  baseURL: "http://localhost:5050/",
  withCredentials: true,
});

export default request;
