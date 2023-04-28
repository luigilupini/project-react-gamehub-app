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
      // transition="all 0.2s ease-in-out"
      // _hover={{
      //   transform: 'scale(0.98)',
      //   border: '2px solid',
      //   borderColor: '#FFD700',
      // }}
    >
      {children}
    </Box>
  );
}
