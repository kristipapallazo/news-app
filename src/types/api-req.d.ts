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
interface NewsAPIData {
  status: string;
  totalResults: number;
  articles: NewsAPIArticle[];
}

/* nyc-api */

/* g-api */
