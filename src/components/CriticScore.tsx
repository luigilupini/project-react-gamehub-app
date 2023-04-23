import { Badge } from '@chakra-ui/react';

interface Props {
  score: number;
}

export default function CriticScore({ score }: Props) {
  const color = score > 80 ? 'green' : score > 60 ? 'yellow' : '';
  return (
    <>
      <Badge
        fontSize="14px"
        paddingX={2}
        colorScheme={color}
        variant="solid"
        borderRadius="4px"
      >
        {score}
      </Badge>
    </>
  );
}
