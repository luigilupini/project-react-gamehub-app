import { AxiosRequestConfig, CanceledError } from 'axios';
import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  requestConfig?: AxiosRequestConfig,
  deps?: any[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [isLoading, setLoading] = useState(false);

  useEffect(
    () => {
      // `AbortController` is a "built-in" browser API that allows us to `abort` a
      // fetch request if the user navigates away from the page before the request
      // has finished. This prevents the app from crashing. We can also use this
      // to cancel a request if the user has already made a new request. This is a
      // common pattern in React apps. We close the controller in the `return`
      const controller = new AbortController();

      setLoading(true);
      apiClient
        .get<FetchResponse<T>>(endpoint, {
          signal: controller.signal,
          ...requestConfig,
        })
        .then((res) => {
          setData(res.data.results);
          setLoading(false);
        })
        .catch((err) => {
          // 👇🏻 We ignore the error if the request was canceled
          if (err instanceof CanceledError) return;
          setError(err.message);
          setLoading(false);
        });

      return () => controller.abort(); // 👈🏻 We close/cleanup the controller here
    },
    deps ? [...deps] : []
  );

  return { data, error, isLoading };
};

export default useData;
