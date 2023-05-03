import { useQuery } from '@tanstack/react-query';
import APIClient, { FetchResponse } from '../services/api-client';

import { Query } from '../App';
import { Platform } from './usePlatforms';

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  // /* cSpell:disable */
  metacritic: number;
  rating_top: number;
  // rating: number;
}

const apiClient = new APIClient<Game>('/games');

const useGames = (query: Query) => {
  const options = {
    genres: query.genre?.id,
    parent_platforms: query.platform?.id,
    ordering: query.sortOrder,
    search: query.searchText,
  };
  return useQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', query],
    queryFn: () =>
      apiClient.readAll({
        params: options,
      }),
    staleTime: 1000 * 60 * 60 * 24, // 1 day
  });
};

export default useGames;
