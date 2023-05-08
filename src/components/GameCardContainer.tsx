import { Box } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface Props {
  children: ReactNode;
}

export default function GameCardContainer({ children }: Props) {
  return (
    <Box
      borderRadius={10}
      overflow="hidden"
      width="100%"
      shadow="md"
      _hover={{
        transform: 'scale(0.98)',
        transition: 'transform 0.2s ease-in',
      }}
    >
      {children}
    </Box>
  );
}
