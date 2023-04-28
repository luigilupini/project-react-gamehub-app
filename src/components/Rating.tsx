import { Flex } from '@chakra-ui/react';
import { AiFillStar } from 'react-icons/ai';

interface Props {
  rating: number;
}

export default function Rating({ rating }: Props) {
  if (rating < 3) return null;
  return (
    <Flex
      alignItems={'center'}
      fontSize="14px"
      marginTop={2}
      opacity="0.3"
      // color="#FFD700"
    >
      {Array.from({ length: rating }, (i) => i).map((_, i) => (
        <AiFillStar key={i} />
      ))}
    </Flex>
  );
}
