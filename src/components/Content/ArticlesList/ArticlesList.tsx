import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import ArticleListItem from "./ArticleListItem/ArticleListItem";
import classes from "./ArticlesList.module.css";

const ArticlesList: FC = () => {
  const articles = useSelector((state: RootState) => state.articles.articles);

  console.log("articles", articles);
  const items = articles.map((article) => (
    <ArticleListItem key={article.id} article={article} />
  ));

  return <div className={classes.list}>{items}</div>;
};

export default ArticlesList;
