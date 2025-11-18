import axios from "axios";

export const instance = axios.create({
  // baseURL: "http://192.168.45.37:5000",
  baseURL: "http://127.0.0.1:5000",
});
