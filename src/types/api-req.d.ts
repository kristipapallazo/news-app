/* news-api */
interface NewsAPIArticle {
  source: { id: string; name: string };
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}
interface NewsAPISource {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}
interface NewsAPIData {
  status: string;
  totalResults: number;
  articles: NewsAPIArticle[];
}
interface SourcesData {
  status: string;
  sources: NewsAPISource[];
}

/* nyc-api */

/* g-api */
