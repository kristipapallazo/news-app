import { Article, Categ, Module, SourceType } from "./types";

interface ArticleState {
  articles: Article[];
  status: "idle" | "loading" | "succeeded" | "failed";
  error: string | null;
}

interface FiltersState {
  keyword: string;
  categ: Categ;
  source: SourceType | null;
  date: string;
  toDate: string;
}

/* news api */

// type SearchIn = "title" | "description" | "content";
type SearchIn = string;
type Language = string;
type SortBy = "relevancy" | "popularity" | "publishedAt";
type PageSize = number;
type Page = number;
/* below are for /topheadlines route */
type Country = "string"; //check later => define specific country
type Category = "string"; //check later => define specific category
interface NewsTypeParams {
  q: string;
  searchIn: SearchIn;
  sources: string;
  domains: string;
  excludeDomains: string;
  from: string;
  to: string;
  language: Language;
  sortBy: SortBy;
  pageSize: PageSize;
  page: Page;
  /* below are for /topheadlines route */
  country: Country;
  category: Category;
}

interface UIState {
  module: Module;
  selectedArticle: string;
  isMobile: boolean;
}

interface UserPrefState {
  preferredSources: string[];
  preferredCategories: string[];
  preferredAuthors: string[];
}
