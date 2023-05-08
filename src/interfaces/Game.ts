import { Genre } from './Genre';
import { Platform } from './Platform';
import { Publisher } from './Publisher';

export interface Game {
  id: number;
  name: string;
  genres: Genre[];
  publishers: Publisher[];
  background_image: string;
  parent_platforms: { platform: Platform }[];
  // /* cSpell:disable */
  metacritic: number;
  rating_top: number;
  // rating: number;
  slug: string;
  description_raw: string;
}
