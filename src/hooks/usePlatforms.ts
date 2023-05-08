import platforms from '../data/platforms';

import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';
import ms from 'ms';
import { Platform } from '../interfaces/Platform';

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.readAll,
    staleTime: ms('24h'),
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
