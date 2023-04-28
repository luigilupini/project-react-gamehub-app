import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import imageCropper from '../services/image-crop';

import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import Rating from './Rating';

interface Props {
  game: Game;
}

export default function GameCard({ game }: Props) {
  const allPlatforms = game.parent_platforms.map(
    (platform) => platform.platform
  );
  return (
    <Card height="100%">
      <Image src={imageCropper(game.background_image)} />
      <CardBody>
        <HStack justifyContent="space-between" marginBottom={3}>
          <PlatformIconList platforms={allPlatforms} />
          <CriticScore score={game.metacritic} />
        </HStack>
        <Heading fontSize="lg" isTruncated>
          {game.name}
        </Heading>
        <Rating rating={game.rating_top} />
      </CardBody>
    </Card>
  );
}
