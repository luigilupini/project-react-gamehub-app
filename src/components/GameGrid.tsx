import ErrorMessage from './ErrorMessage';
import useGames from '../hooks/useGames';
import { SimpleGrid } from '@chakra-ui/react';
import GameCard from './GameCard';

export default function GameGrid() {
  const { games, loading, error } = useGames();
  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <ErrorMessage message={error} />}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={10}
        padding="5"
        // padding="10"
      >
        {games.map((game) => (
          <GameCard key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </div>
  );
}
