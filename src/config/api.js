import axios from "axios";

const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL || "http://localhost/prosproperty-app/wp-json/wp/v2",

});

api.interceptors.response.use((response) => response.data);

export default api;