import { Box, Heading, Text } from '@chakra-ui/react';
import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import Navbar from '../components/Navbar';

export default function ErrorPage() {
  const error = useRouteError();
  return (
    <div style={{ padding: '0 1rem' }}>
      <Navbar />
      <Box paddingY={6}>
        <Heading>Oops!</Heading>
        <Text paddingY={2}>
          {isRouteErrorResponse(error)
            ? 'Sorry the page you are looking for does not exist.'
            : 'Something unexpected occurred...'}
        </Text>
      </Box>
    </div>
  );
}
