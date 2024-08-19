import { FC, memo, MouseEventHandler } from "react";
import { Article } from "../../../../types/types";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import {
  setModule,
  setSelectedArticle,
} from "../../../../store/Slices/UISlice";
import NotFoundImg from "../../../../assets/not-found.jpg";
import classes from "./ArticleItem.module.css";

interface ArticleItemProps {
  article: Article;
}
const ArticleItem: FC<ArticleItemProps> = memo(({ article }) => {
  const { id, title, content, source, urlToImage, publishedAt, author, url } =
    article;
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
        loading="lazy"
      />
      <div className={classes.contentCont}>
        <h3 className={classes.title}>{title}</h3>
        <p className={classes.content}>{content}</p>
        <p className={classes.source}>
          By {author} - {source}
        </p>
        <div className={classes.bottomLine}>
          <small className={classes.date}>
            {new Date(publishedAt).toLocaleDateString()}
          </small>
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
    </div>
  );
});

export default ArticleItem;
