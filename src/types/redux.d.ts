import { Article, Module } from "./types";

interface ArticleState {
  articles: Article[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

interface FiltersState {
  keyword: string;
  category: string;
  source: string;
  date: string;
}

interface UIState {
  module: Module;
  selectedArticle: string;
}

interface UserPrefState {
  preferredSources: string[];
  preferredCategories: string[];
  preferredAuthors: string[];
}
