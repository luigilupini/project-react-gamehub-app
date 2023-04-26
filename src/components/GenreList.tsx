import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
} from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';

import imageCropper from '../services/image-crop';

interface Props {
  setSelectGenre: (genre: Genre) => void;
  selectGenre: Genre | null;
}

export default function GenreList({ selectGenre, setSelectGenre }: Props) {
  const { data: genres, isLoading, error } = useGenres();
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      {genres.map((genre) => (
        <ListItem key={genre.id} paddingY="5px">
          <HStack gap={1}>
            <Image
              width="30px"
              height="30px"
              objectFit="cover"
              borderRadius="full"
              src={imageCropper(genre.image_background)}
            />
            <Button
              fontWeight={`${selectGenre?.id === genre.id ? 'bold' : 'normal'}`}
              fontSize="sm"
              variant="link"
              onClick={() => {
                setSelectGenre(genre);
              }}
            >
              {genre.name}
            </Button>
          </HStack>
        </ListItem>
      ))}
    </List>
  );
}
