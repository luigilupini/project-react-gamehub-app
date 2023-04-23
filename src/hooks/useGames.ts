import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import { CanceledError } from 'axios';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
}

interface GamesResponse {
  count: number;
  results: Game[];
}

export default function useGames() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    // `AbortController` is a "built-in" browser API that allows us to `abort` a
    // fetch request if the user navigates away from the page before the request
    // has finished. This prevents the app from crashing. We can also use this
    // to cancel a request if the user has already made a new request. This is a
    // common pattern in React apps. We close the controller in the `return`
    const controller = new AbortController();
    // 👇🏻 We using the `/games` endpoint
    apiClient
      .get<GamesResponse>('/games', {
        signal: controller.signal,
      })
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        // 👇🏻 We ignore the error if the request was canceled
        if (err instanceof CanceledError) return;
        setError(err.message);
        setLoading(false);
      });
    return () => controller.abort(); // 👈🏻 We close/cleanup the controller here
  }, []);

  return { games, loading, error };
}
