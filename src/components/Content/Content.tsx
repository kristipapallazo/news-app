import { FC } from "react";
import Home from "../../pages/Home";
import Favorites from "../../pages/Favorites";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ArticlePage from "../../pages/ArticlePage/ArticlePage";
import ArticlesList from "./ArticlesList/ArticlesList";
import classes from "./Content.module.css";

const Content: FC = () => {
  const { module } = useSelector((state: RootState) => state.ui);

  return (
    <div className={classes.content}>
      {module === "home" ? (
        <Home />
      ) : module === "fav" ? (
        <Favorites />
      ) : module === "list" ? (
        <ArticlesList />
      ) : module === "article" ? (
        <ArticlePage />
      ) : (
        <div>Module not found</div>
      )}
    </div>
  );
};

export default Content;
