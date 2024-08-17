import { FC } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../store";
import ArticleItem from "./Articletem/ArticleItem";
import classes from "./ArticlesList.module.css";
import MessageLabel from "../../UI/MessageLabel/MessageLabel";

const ArticlesList: FC = () => {
  const test = useSelector((state: RootState) => state.articles);
  console.log("test :>> ", test);
  const { articles } = test;

  console.log("articles", articles);
  const items = articles.map((article) => (
    <ArticleItem key={article.id} article={article} />
  ));

  return (
    <>
      {items.length > 0 ? (
        <div className={classes.grid}>{items}</div>
      ) : (
        <MessageLabel />
      )}
    </>
  );
};

export default ArticlesList;
