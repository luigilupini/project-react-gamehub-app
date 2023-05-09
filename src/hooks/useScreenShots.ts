import { useQuery } from '@tanstack/react-query';
import ScreenShots from '../interfaces/ScreenShots';
import APIClient from '../services/api-client';

const useScreenShots = (gameId: number) => {
  const apiClient = new APIClient<ScreenShots>(`/games/${gameId}/screenshots`);
  return useQuery({
    queryKey: ['screenshots', gameId],
    queryFn: () => apiClient.readAll({ params: { page_size: 4 } }),
  });
};

export default useScreenShots;
