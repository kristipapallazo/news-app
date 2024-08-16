import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import classes from "./ArticlePage.module.css";

const ArticlePage: FC = () => {
  const articles = useSelector((state: RootState) => state.articles.articles);
  const selectedArticle = useSelector(
    (state: RootState) => state.ui.selectedArticle
  );

  const article = articles.find(({ id }) => id === selectedArticle);
  console.log("article", article);

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
