import useData from './useData';
import { Genre } from './useGenres';

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
}

const useGames = (
  // Here we passing two parameters to our generic useData hook
  selectGenre: Genre | null,
  selectPlatform: Platform | null
) =>
  useData<Game>(
    'games',
    {
      // Here we are using the optional chaining operator to avoid errors when
      // the selectGenre or selectPlatform is null or undefined
      params: {
        genres: selectGenre?.id,
        platforms: selectPlatform?.id,
      },
    },
    [selectGenre?.id, selectPlatform?.id]
  );

export default useGames;
