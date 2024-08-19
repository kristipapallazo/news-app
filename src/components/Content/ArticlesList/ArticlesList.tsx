import { FC } from "react";
import ArticleItem from "./Articletem/ArticleItem";
import classes from "./ArticlesList.module.css";

interface ArticlesListProps {
  articles: Articles;
}
const ArticlesList: FC<ArticlesListProps> = ({ articles }) => {
  const items = articles.map((article) => (
    <ArticleItem key={article.id} article={article} />
  ));

  return <div className={classes.grid}>{items}</div>;
};

export default ArticlesList;
