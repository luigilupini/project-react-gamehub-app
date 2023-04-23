import { Card, CardBody, HStack, Heading, Image } from '@chakra-ui/react';
import { Game } from '../hooks/useGames';
import PlatformIconList from './PlatformIconList';
import CriticScore from './CriticScore';
import imageCropper from '../services/image-crop';

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
        <Image src={imageCropper(game.background_image)} />
        <CardBody>
          <Heading fontSize="xl">{game.name}</Heading>
          <HStack justifyContent="space-between">
            <PlatformIconList platforms={allPlatforms} />
            <CriticScore score={game.metacritic} />
          </HStack>
        </CardBody>
      </Card>
    </>
  );
}
