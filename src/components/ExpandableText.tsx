import { Button, Text } from '@chakra-ui/react';
import { useState } from 'react';

interface Props {
  children: string;
}

export default function ExpandableText({ children }: Props) {
  const [expanded, setExpanded] = useState(false);
  const limit = 300;
  if (!children) return null;
  // If text is less than limit then we don't truncate anything.
  if (children.length < limit) return <Text>{children}</Text>;
  // If text is more than limit then we truncate the text and add a button to
  // expand the text. We use the `expanded` state to toggle the text.
  const summary = expanded ? children : `${children.slice(0, limit)}...`;
  return (
    <Text>
      {summary}
      <Button
        ml={2}
        size="xs"
        fontWeight="bold"
        // colorScheme="green"
        onClick={() => setExpanded(!expanded)}
      >
        {expanded ? 'Read Less' : 'Read More'}
      </Button>
    </Text>
  );
}
