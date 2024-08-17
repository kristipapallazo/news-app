import { NewsAPI } from "../types/types";

export const NEWS_API: NewsAPI = {
  baseUrl: "https://newsapi.org/v2",
  apiKey: "29518d79434c446b9dbcf5d92a25adc3",
};
export const NYC_API: NewsAPI = {
  baseUrl: "https://api.nytimes.com/svc/search/v2",
  apiKey: "uo5B7nCXLVmgcjYLBdNABIqc4P16PHlR",
};
export const G_API: NewsAPI = {
  baseUrl: "https://content.guardianapis.com",
  apiKey: "14b9e1d2-3233-4952-900f-d11829a94314",
};

// news-api globals
//everything route
export const S1_PARAMS = {
  searchIn: ["title", "description", "content"],
  language: [
    "ar",
    "de",
    "en",
    "es",
    "fr",
    "he",
    "it",
    "nl",
    "no",
    "pt",
    "ru",
    "sv",
    "ud",
    "zh",
  ],
  sortBy: ["relevancy", "popularity", "publishedAt"],
  pageSize: 100,
  page: 1,
};
