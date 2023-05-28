import axios from "axios";

const api = ({ token }: { token?: string } = {}) =>
  axios.create({
    baseURL: import.meta.env.VITE_API_URL,
    headers: {
      Authorization: token ? `Bearer ${token}` : "",
    },
  });

export default api;
