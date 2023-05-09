import { useInfiniteQuery } from '@tanstack/react-query';
import APIClient, { FetchResponse } from '../services/api-client';

import ms from 'ms';
import useGameQueryStore from '../store';

import Game from '../interfaces/Game';

const apiClient = new APIClient<Game>('/games');

// USE CUSTOM HOOK IN CONSUMER (STEP 3) ⭐️
// Now that you've created a store access it via the custom hook in a component.
// You can access the store state being count, increment, & decrement properties
// from your component globally, without prop drilling.
const useGames = () => {
  // Selectors gets the current state & only a specific property from our store.
  // Now our component only rerenders when that specific property changes!
  const query = useGameQueryStore((state) => state.query);
  return useInfiniteQuery<FetchResponse<Game>, Error>({
    queryKey: ['games', query],
    queryFn: ({ pageParam }) =>
      apiClient.readAll({
        params: {
          genres: query.genreId,
          parent_platforms: query.platformId,
          ordering: query.sortOrder,
          search: query.searchText,
          page: pageParam,
        },
      }),
    staleTime: ms('24h'),
    getNextPageParam: (lastPage, allPages) => {
      // 👇🏻 If the last page has no results there are no more pages to fetch.
      if (lastPage.results.length === 0) return false;
      // Otherwise we return the next page number.
      return allPages.length + 1;
    },
  });
};

export default useGames;

/* PAGINATION & INFINITE SCROLLING
`useInfiniteQuery` is a powerful hook provided by (RQ) to handle pagination and
infinite scroll scenarios. The `getNextPageParam` function is used to determine
how to fetch the next page of data, based on the current data. 

`getNextPageParam` is a callback function that receives the `lastPage` (the most
recently fetched page) and all the `pages` fetched so far. It should return the
value that should be used as the `pageParam` for the next query, or undefined if
there are no more pages to fetch. 

Here's an example of how to use `useInfiniteQuery` with a getNextPageParam:
*/
