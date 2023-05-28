import { useState } from "react";

import axios, { AxiosError, AxiosResponse } from "axios";

export function useHandleApiRequest<T = any>() {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const execute = async (requestFunction: () => Promise<AxiosResponse<T>>) => {
    setLoading(true);
    setData(null);
    setError(null);
    try {
      const response = await requestFunction();
      setData(response.data);
      return response;
    } catch (e) {
      if (axios.isAxiosError(e)) {
        setError(e);
      }
      throw e;
    } finally {
      setLoading(false);
    }
  };

  return { data, error, loading, execute };
}
