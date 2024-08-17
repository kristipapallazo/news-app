import { FC } from "react";
import classes from "./NewsPage.module.css";
import ArticlesList from "../../components/Content/ArticlesList/ArticlesList";
import PrefHeader from "../../components/PrefHeader/PrefHeader";
import useNewsPageCtx from "../../hooks/useNewsPageCtx";
import PrefModal from "../../components/Modal/PrefModal/PrefModal";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import MessageLabel from "../../components/UI/MessageLabel/MessageLabel";

// const NewsApiTab: FC = () => {
//   return test;
// };

const NewsPage: FC = () => {
  const { isPrefModalOpen } = useNewsPageCtx();
  const { status, message } = useSelector((state: RootState) => state.articles);

  return (
    <div className={classes.news}>
      <PrefHeader />
      {isPrefModalOpen && <PrefModal open={isPrefModalOpen} />}
      {status === "failed" ? (
        <MessageLabel label={message!} />
      ) : (
        <ArticlesList />
      )}
    </div>
  );
};

export default NewsPage;
