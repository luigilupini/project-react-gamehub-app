import platforms from '../data/platforms';

import { useQuery } from '@tanstack/react-query';
import APIClient from '../services/api-client';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

const apiClient = new APIClient<Platform>('/platforms/lists/parents');

const usePlatforms = () => {
  return useQuery({
    queryKey: ['platforms'],
    queryFn: apiClient.readAll,
    staleTime: 24 * 60 * 60 * 1000, // 1 day
    initialData: { count: platforms.length, results: platforms },
  });
};

export default usePlatforms;
