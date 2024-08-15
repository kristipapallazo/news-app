import { FC, MouseEventHandler } from "react";
import { Article } from "../../../../types/types";
import classes from "./ArticleItem.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { setModule, setSelectedArticle } from "../../../../store/UISlice";
import NotFoundImg from "../../../../assets/not-found.jpg";

interface ArticleListItemProps {
  article: Article;
}
const ArticleListItem: FC<ArticleListItemProps> = ({ article }) => {
  const {
    id,
    title,
    description,
    source,
    urlToImage,
    publishedAt,
    author,
    url,
  } = article;
  const dispatch = useDispatch<AppDispatch>();

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    dispatch(setModule("article"));
    dispatch(setSelectedArticle(id));
  };

  return (
    <div className={classes.article} onClick={handleClick}>
      <img
        className={classes.img}
        src={urlToImage || NotFoundImg}
        alt={article.title}
      />
      <div className={classes.content}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.desp}>{description}</p>
        <small className={classes.date}>
          {new Date(publishedAt).toLocaleDateString()}
        </small>
        <p className={classes.source}>
          By {author} - {source}
        </p>
        <a
          className={classes.link}
          href={url}
          target="_blank"
          rel="noopener noreferrer"
        >
          Read more
        </a>
      </div>
    </div>
  );
};

export default ArticleListItem;
