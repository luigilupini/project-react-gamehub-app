import {
  Alert,
  AlertDescription,
  AlertIcon,
  AlertTitle,
  Box,
} from '@chakra-ui/react';

interface Props {
  message: string;
}

export default function ErrorMessage({ message }: Props) {
  return (
    <div>
      <Alert status="error">
        <AlertIcon />
        <Box>
          <AlertTitle>Error!</AlertTitle>
          <AlertDescription>{message}</AlertDescription>
        </Box>
      </Alert>
    </div>
  );
}
