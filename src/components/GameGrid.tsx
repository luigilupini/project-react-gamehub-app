import { SimpleGrid } from '@chakra-ui/react';

import ErrorMessage from './ErrorMessage';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';

import { Genre } from '../hooks/useGenres';
import useGames, { Platform } from '../hooks/useGames';

interface Props {
  selectGenre: Genre | null;
  selectPlatform: Platform | null;
}

export default function GameGrid({ selectGenre, selectPlatform }: Props) {
  const {
    data: games,
    isLoading,
    error,
  } = useGames(selectGenre, selectPlatform);
  const skeletonPlaceholder = Array.from({ length: 6 }, (_, i) => i);
  return (
    <div>
      {error && <ErrorMessage message={error} />}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        spacing={3}
        paddingY={2}
      >
        {isLoading &&
          skeletonPlaceholder.map((skeleton) => (
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
