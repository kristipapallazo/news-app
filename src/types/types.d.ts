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

type DSourceType = "news_api" | "nyc" | "guardian";
type DSourceTypeArr = {
  value: SourceType;
  label: string;
}[];

type SourceType = "news_api" | "nyc" | "guardian";
type SourceTypeArr = {
  value: SourceType;
  label: string;
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

type Articles = Article[];
/* check later */
type Sources = Article[];

interface FetchArticlesPayload {
  url: string;
  config?: AxiosRequestConfig;
}
