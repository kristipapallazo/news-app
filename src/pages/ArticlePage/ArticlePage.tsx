import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import classes from "./ArticlePage.module.css";

const ArticlePage: FC = () => {
  const { route, selectedArticle } = useSelector(
    (state: RootState) => state.ui
  );
  const articles = useSelector((state: RootState) => {
    return route === "top-headlines"
      ? state.newsApi.topHeadlines.articles
      : state.articles.articles;
  });

  const article = articles.find(({ id }) => id === selectedArticle);

  const { title, source, author, publishedAt, content, url, urlToImage } =
    article!;

  return (
    <div className={classes.article}>
      <h1 className={classes.title}>{title}</h1>
      <img src={urlToImage} alt={title} className={classes.img} />
      <div className={classes.meta}>
        <p>By {author}</p>
        <p>{new Date(publishedAt).toLocaleDateString()}</p>
        <p>Source: {source}</p>
      </div>
      <p className={classes.content}>{content}</p>
      <a
        className={classes.link}
        href={url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read the full article
      </a>
    </div>
  );
};

export default ArticlePage;
