import axios from "axios";

const api = axios.create({
  baseURL: "https://dsmovie-mecyo.herokuapp.com",
});

export default api;