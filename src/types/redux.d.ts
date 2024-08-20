import { DSourceType, Module } from "./types";

declare global {
  type SearchIn = "title" | "description" | "content";
  type Source = string | null;
  type Domains = string | null;
  type ExcludeDomains = string | null;
  type Date = string | undefined;
  type Language = string | undefined;
  type SortBy = "relevancy" | "popularity" | "publishedAt";
  type PageSize = number | null;
  type Page = number;
  type Country = string | undefined;
  type Category = string | undefined;

  interface EverythingParams {
    q: string;
    searchIn: SearchIn;
    sources: Source;
    domains: Domains;
    excludeDomains: ExcludeDomains;
    from: Date;
    to: Date;
    language: Language;
    sortBy: SortBy;
    pageSize: PageSize;
    page: Page;
  }
  interface TopHeadlinesParams {
    country: Country;
    category: Category;
    sources: Source;
    q: string;
    pageSize: PageSize;
    page: Page;
  }
  interface SourcesParams {
    country: Country;
    category: Category;
    language: Language;
  }
  interface FiltersState {
    everything: Partial<EverythingParams>;
    topheadlines: Partial<TopHeadlinesParams>;
    sources: Partial<SourcesParams>;
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

  type Route = "everything" | "top-headlines" | "top-headlines/sources";
  interface UIState {
    module: Module;
    selectedArticle: string;
    isMobile: boolean;
    dSource: DSourceType;
    route: Route;
  }

  interface UserPrefState {
    preferredSources: string[];
    preferredCategories: string[];
    preferredAuthors: string[];
  }
}

export {};
