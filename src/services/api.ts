import axios from "axios";

export const api = axios.create({
  // baseURL: " http://192.168.2.56:3333",
  baseURL: " http://192.168.2.65:3333",
  timeout: 700,
});
