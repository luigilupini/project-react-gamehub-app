import { Heading } from '@chakra-ui/react';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';
import useGameQueryStore from '../store';

// ZUSTAND: USE CUSTOM HOOK IN CONSUMER (STEP 3) ⭐️
// Now that you've created a store access it via the custom hook in a component.
// You can access the store state being count, increment, & decrement properties
// from your component globally, without prop drilling.
export default function GameHeading() {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  // Selectors gets the current state & only a specific property from our store.
  // Now our component only rerenders when that specific property changes!
  const genreId = useGameQueryStore((state) => state.query.genreId);
  const genre = genres?.results.find((g) => g.id === genreId);
  const platformId = useGameQueryStore((state) => state.query.platformId);
  const platform = platforms?.results.find((p) => p.id === platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''}`;
  return (
    <Heading fontSize={'5xl'} marginBottom={6}>
      {heading} Games
    </Heading>
  );
}
