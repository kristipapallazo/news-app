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

type Module = "home" | "list" | "article" | "fav";

type SourceType = "news_api" | "nyc" | "guardian";
type SourceTypeArr = {
  id: SourceType;
  name: string;
}[];

type Categ = string | null;
type CategTypeArr = {
  id: Categ;
  name: string;
}[];

interface Article {
  id: string;
  source: string;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
interface ResData {
  articles: Article[];
}
