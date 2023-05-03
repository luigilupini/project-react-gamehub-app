import { Heading } from '@chakra-ui/react';
import { Query } from '../App';
import useGenres from '../hooks/useGenres';
import usePlatforms from '../hooks/usePlatforms';

interface Props {
  query: Query;
}

export default function GameHeading({ query }: Props) {
  const { data: genres } = useGenres();
  const { data: platforms } = usePlatforms();

  const genre = genres?.results.find((g) => g.id === query.genreId);
  const platform = platforms?.results.find((p) => p.id === query.platformId);

  const heading = `${platform?.name || ''} ${genre?.name || ''}`;
  return (
    <Heading fontSize={'5xl'} marginBottom={6}>
      {heading} Games
    </Heading>
  );
}
