import { FC } from "react";
import classes from "./NewsPage.module.css";
import ArticlesList from "../../components/Content/ArticlesList/ArticlesList";
import PrefHeader from "../../components/PrefHeader/PrefHeader";
import useNewsPageCtx from "../../hooks/useNewsPageCtx";
import PrefModal from "../../components/Modal/PrefModal/PrefModal";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

// const NewsApiTab: FC = () => {
//   return test;
// };

const NewsPage: FC = () => {
  const { isPrefModalOpen } = useNewsPageCtx();
  const source = useSelector((state: RootState) => state.filters.source);

  return (
    <div className={classes.news}>
      <PrefHeader />
      <ArticlesList />
      {isPrefModalOpen && <PrefModal open={isPrefModalOpen} />}
    </div>
  );
};

export default NewsPage;
