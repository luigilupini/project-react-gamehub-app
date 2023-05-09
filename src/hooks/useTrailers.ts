import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { Trailer } from '../interfaces/Trailer';

const useTrailers = (gameId: number) => {
  const apiClient = new APIClient<Trailer>(`/games/${gameId}/movies`);
  return useQuery({
    queryKey: ['trailers', gameId],
    queryFn: () => apiClient.readAll({ params: { page_size: 3 } }),
  });
};

export default useTrailers;
