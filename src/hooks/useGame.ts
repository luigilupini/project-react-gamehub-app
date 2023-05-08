import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import { Game } from '../interfaces/Game';

const apiClient = new APIClient<Game>('/games');

const useGame = (slug: string) => {
  return useQuery({
    queryKey: ['game', slug],
    queryFn: () => apiClient.read(slug),
  });
};

export default useGame;
