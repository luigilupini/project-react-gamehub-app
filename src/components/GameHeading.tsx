import { Heading } from '@chakra-ui/react';
import { Query } from '../App';

interface Props {
  query: Query;
}

export default function GameHeading({ query }: Props) {
  const heading = `${query.platform?.name || ''} ${query.genre?.name || ''}`;
  return (
    <Heading fontSize={'5xl'} marginBottom={6}>
      {heading} Games
    </Heading>
  );
}
