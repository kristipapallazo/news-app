import { FC } from "react";
import ArticlesList from "../../components/Content/ArticlesList/ArticlesList";
import PrefHeader from "../../components/PrefHeader/PrefHeader";
import useNewsPageCtx from "../../hooks/useNewsPageCtx";
import PrefModal from "../../components/Modal/PrefModal/PrefModal";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import MessageLabel from "../../components/UI/MessageLabel/MessageLabel";
import classes from "./NewsPage.module.css";
import NewsTab from "./NewsTab/NewsTab";
import TopHeadlinesList from "../../components/Content/TopHealinesList/TopHeadlinesList";
import SourcesList from "../../components/Content/SourcesList/SourcesList";
import { ArticleState } from "../../store/Slices/ArticlesSlice";
import { Spin } from "antd";

interface ArticlesContainerProps {
  articlesObj: ArticleState;
}
export const ArticlesContainer: FC<ArticlesContainerProps> = ({
  articlesObj,
}) => {
  const { articles, status, message } = articlesObj;
  return (
    <>
      {status === "failed" ? (
        <MessageLabel label={message!} />
      ) : articles.length === 0 ? (
        <MessageLabel />
      ) : (
        <ArticlesList articles={articles} />
      )}
      <Spin spinning={status === "loading" ? true : false} fullscreen />
    </>
  );
};
const NewsPage: FC = () => {
  const { isPrefModalOpen } = useNewsPageCtx();

  const { dSource, route } = useSelector((state: RootState) => state.ui);
  const articlesObj = useSelector((state: RootState) => state.articles);

  return (
    <div className={classes.news}>
      {dSource === "news_api" && <NewsTab />}
      <PrefHeader />
      {route === "top-headlines" ? (
        <TopHeadlinesList />
      ) : route === "top-headlines/sources" ? (
        <SourcesList />
      ) : (
        <ArticlesContainer articlesObj={articlesObj} />
      )}
      {isPrefModalOpen && <PrefModal open={isPrefModalOpen} />}
    </div>
  );
};

export default NewsPage;
