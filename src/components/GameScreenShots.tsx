import { Image, SimpleGrid } from '@chakra-ui/react';
import useScreenShots from '../hooks/useScreenShots';

interface Props {
  gameId: number;
}

export default function GameScreenShots({ gameId }: Props) {
  const { data, isLoading, error } = useScreenShots(gameId);
  if (isLoading) return null;
  if (error || !data) throw error;
  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={2} marginTop={2}>
      {data?.results.map((file) => (
        <Image key={file.id} src={file.image} alt={file.image} />
      ))}
    </SimpleGrid>
  );
}
