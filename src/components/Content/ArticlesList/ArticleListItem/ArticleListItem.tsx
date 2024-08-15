import { FC, MouseEventHandler } from "react";
import { Article } from "../../../../types/types";
import classes from "./ArticleItem.module.css";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../../store";
import { setModule, setSelectedArticle } from "../../../../store/UISlice";

interface ArticleListItemProps {
  article: Article;
}
const ArticleListItem: FC<ArticleListItemProps> = ({ article }) => {
  const { id, title, description, source, urlToImage } = article;
  const dispatch = useDispatch<AppDispatch>();

  const handleClick: MouseEventHandler<HTMLDivElement> = () => {
    dispatch(setModule("article"));
    dispatch(setSelectedArticle(id));
  };

  return (
    <div className={classes.article} onClick={handleClick}>
      <h3>{title}</h3>
      <p>{description}</p>
      <p>{source}</p>
      <img src={urlToImage} alt="test" width={100} height={100} />
    </div>
  );
};

export default ArticleListItem;
