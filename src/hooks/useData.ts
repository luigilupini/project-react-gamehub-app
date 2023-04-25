import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

interface FetchResponse<T> {
  count: number;
  results: T[];
}

export default function useData<T>(endpoint: string) {
  const [data, setData] = useState<T[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setIsLoading(true);
    // `AbortController` is a "built-in" browser API that allows us to `abort` a
    // fetch request if the user navigates away from the page before the request
    // has finished. This prevents the app from crashing. We can also use this
    // to cancel a request if the user has already made a new request. This is a
    // common pattern in React apps. We close the controller in the `return`
    const controller = new AbortController();
    // 👇🏻 We using the `/games` endpoint
    apiClient
      .get<FetchResponse<T>>(`/${endpoint}`, {
        signal: controller.signal,
      })
      .then((res) => {
        setData(res.data.results);
        setIsLoading(false);
      })
      .catch((err) => {
        // 👇🏻 We ignore the error if the request was canceled
        if (err instanceof CanceledError) return;
        setError(err.message);
        setIsLoading(false);
      });
    return () => controller.abort(); // 👈🏻 We close/cleanup the controller here
  }, [endpoint]);

  return { data, isLoading, error };
}
