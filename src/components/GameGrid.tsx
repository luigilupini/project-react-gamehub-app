import { useEffect, useState } from 'react';
import apiClient from '../services/api-client';
import ErrorMessage from './ErrorMessage';

interface Game {
  id: number;
  name: string;
}

interface GameResponse {
  count: number;
  results: Game[];
}

export default function GameGrid() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    setLoading(true);
    apiClient
      .get<GameResponse>('/games') // 👈🏻 We using the `/games` endpoint
      .then((res) => {
        setGames(res.data.results);
        setLoading(false);
      })
      .catch((err) => {
        setError(err.message);
        setLoading(false);
      });
  }, []);
  console.log(games);
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <ErrorMessage message={error} />}
      {games.map((game) => (
        <p key={game.id}>{game.name}</p>
      ))}
    </div>
  );
}
