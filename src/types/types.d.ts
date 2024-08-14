import { Dispatch, SetStateAction } from "react";
// interface configObj {
//   newsAPI: string;
// }
interface NewsAPI {
  baseUrl: string;
  apiKey: string;
}

type SetStateFn<D> = Dispatch<SetStateAction<D>>;

type FavSources = string[];
type FavCategs = string[];
type FavAuthors = string[];
type FavoritesObj = {
  sources: FavSources;
  categs: FavCategs;
  authors: FavAuthors;
};
