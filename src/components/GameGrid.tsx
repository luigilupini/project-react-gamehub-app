import ErrorMessage from './ErrorMessage';
import useGames from '../hooks/useGames';

export default function GameGrid() {
  const { games, loading, error } = useGames();
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
