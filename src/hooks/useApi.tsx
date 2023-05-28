import { useContext, useEffect, useState } from "react";
import axios, { AxiosInstance } from "axios";
import { AppContext } from "../contexts/AppContext";

function useApi(): AxiosInstance {
  const { token } = useContext(AppContext);
  const [api] = useState<AxiosInstance>(() =>
    axios.create({
      baseURL: import.meta.env.VITE_API_URL,
    })
  );

  useEffect(() => {
    if (token) {
      api.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    } else {
      delete api.defaults.headers.common["Authorization"];
    }
  }, [api, token]);

  return api;
}

export default useApi;
