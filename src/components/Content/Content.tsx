import { FC } from "react";
import HomePage from "../../pages/HomePage/HomePage";
import Favorites from "../../pages/FavoritesPage/FavoritesPage";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import ArticlePage from "../../pages/ArticlePage/ArticlePage";
import classes from "./Content.module.css";
import NewsPage from "../../pages/NewsPage/NewsPage";
import { NewsPageCtxProvider } from "../../context/NewsPageCtx";

const Content: FC = () => {
  const { module } = useSelector((state: RootState) => state.ui);

  return (
    <div className={classes.content}>
      {module === "home" ? (
        <HomePage />
      ) : module === "fav" ? (
        <Favorites />
      ) : module === "list" ? (
        <NewsPageCtxProvider>
          <NewsPage />
        </NewsPageCtxProvider>
      ) : module === "article" ? (
        <ArticlePage />
      ) : (
        <div>Module not found</div>
      )}
    </div>
  );
};

export default Content;
