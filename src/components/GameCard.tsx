import { Card, CardBody, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  const allPlatforms = game.parent_platforms.map(
    (platform) => platform.platform
  );
  return (
    <>
      <Card borderRadius={10} overflow="hidden">
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="xl">{game.name}</Heading>
          <PlatformIconList platforms={allPlatforms} />
        </CardBody>
      </Card>
    </>
  );
}
