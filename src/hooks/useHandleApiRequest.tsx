import { useCallback, useState } from "react";
import axios, { AxiosError, AxiosResponse } from "axios";

type ApiRequestFunction<T> = () => Promise<AxiosResponse<T>>;
export function useHandleApiRequest<T>() {
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<AxiosError | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  const execute = useCallback(
    async (requestFunction: ApiRequestFunction<T>) => {
      setLoading(true);
      setData(null);
      setError(null);
      try {
        const response = await requestFunction();

        const data = JSON.parse(JSON.stringify(response.data));

        setData(data);
        return data;
      } catch (e) {
        if (axios.isAxiosError(e)) {
          setError(e);
        }
        throw e;
      } finally {
        setLoading(false);
      }
    },
    []
  );

  return { data, error, loading, execute };
}
