import { FC, useEffect, useMemo } from "react";
import { ArticlesContainer } from "../../../pages/NewsPage/NewsPage";
import { AppDispatch, RootState } from "../../../store";
import { useDispatch, useSelector } from "react-redux";
import { AxiosRequestConfig } from "axios";
import { fetchTopHeadlines } from "../../../store/Slices/NewsApiSlice";

const TopHeadlinesList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const { dSource, route } = useSelector((state: RootState) => state.ui);
  const topHeadlinesObj = useSelector(
    (state: RootState) => state.newsApi.topHeadlines
  );
  const filters = useSelector((state: RootState) => state.filters.topheadlines);

  const memoizedFilters = useMemo(() => filters, [filters]);
  useEffect(() => {
    const url = "";

    const config: AxiosRequestConfig = {
      params: { ...memoizedFilters, dSource, route },
    };

    dispatch(fetchTopHeadlines({ url, config }));
  }, [dispatch, dSource, route, memoizedFilters]);

  return <ArticlesContainer articlesObj={topHeadlinesObj} />;
};

export default TopHeadlinesList;
