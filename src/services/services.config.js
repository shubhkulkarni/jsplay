import axios from "axios";
const services = axios.create({
  baseURL: "https://api.codex.jaagrav.in"
});
// services.defaults.withCredentials = true;
const { get, post, put, patch } = services;
export { get, post, put, patch, services };