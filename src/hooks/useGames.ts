import { Query } from '../App';
import useData from './useData';

export interface Platform {
  id: number;
  name: string;
  slug: string;
}

export interface Game {
  id: number;
  name: string;
  background_image: string;
  parent_platforms: { platform: Platform }[];
  metacritic: number;
  rating_top: number;
  // rating: number;
}

const useGames = (query: Query) =>
  useData<Game>(
    // Argument #1
    '/games',
    // Argument #2
    {
      params: {
        // Here we are using the optional chaining operator to avoid errors when
        // the selectGenre or selectPlatform is null or undefined
        genres: query.genre?.id,
        platforms: query.platform?.id,
        ordering: query.sortOrder,
        search: query.searchText,
      },
    },
    // Argument #3
    [query]
  );

export default useGames;
