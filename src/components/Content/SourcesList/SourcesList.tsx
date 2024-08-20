import { FC, useEffect, useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import MessageLabel from "../../UI/MessageLabel/MessageLabel";
import SourceItem from "./SourceItem";
import classes from "../ArticlesList/ArticlesList.module.css";
import { AppDispatch, RootState } from "../../../store";
import { fetchSources } from "../../../store/Slices/NewsApiSlice";
import { AxiosRequestConfig } from "axios";

const SourcesList: FC = () => {
  const dispatch = useDispatch<AppDispatch>();

  const filters = useSelector((state: RootState) => state.filters.sources);
  const { dSource } = useSelector((state: RootState) => state.ui);

  const memoizedFilters = useMemo(() => filters, [filters]);

  const sources = useSelector(
    (state: RootState) => state.newsApi.sources.sources
  );

  const items = sources.map((source) => (
    <SourceItem key={source.id} source={source} />
  ));

  useEffect(() => {
    const config: AxiosRequestConfig = {
      params: {
        ...memoizedFilters,
        dSource,
        route: "top-headlines/sources",
      },
    };
    dispatch(fetchSources({ url: "", config: config }));
  }, [dispatch, dSource, memoizedFilters]);

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

export default SourcesList;
