import { SimpleGrid } from '@chakra-ui/react';

import ErrorMessage from './ErrorMessage';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

import useGames from '../hooks/useGames';
import { Query } from '../App';

interface Props {
  query: Query;
}

export default function GameGrid({ query }: Props) {
  const { data: games, isLoading, error } = useGames(query);
  const skeletons = Array.from({ length: 20 }, (_, i) => i);
  return (
    <div>
      {error && <ErrorMessage message={error} />}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        paddingY={2}
      >
        {isLoading &&
          skeletons.map((skeleton) => (
            <GameCardContainer key={skeleton}>
              <GameCardSkeleton />
            </GameCardContainer>
          ))}
        {games.map((game) => (
          <GameCardContainer key={game.id}>
            <GameCard game={game} />
          </GameCardContainer>
        ))}
      </SimpleGrid>
    </div>
  );
}
