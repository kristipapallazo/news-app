import { useCallback, useEffect, useMemo } from "react";
import "./App.css";
import MainHeader from "./components/MainHeader/MainHeader";
import Content from "./components/Content/Content";
import "./components/UI/Antd.css";
import { AppDispatch, RootState } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "./store/Slices/ArticlesSlice";
import { AxiosRequestConfig } from "axios";
import Footer from "./components/Footer/Footer";
import { setIsMobile } from "./store/Slices/UISlice";
import { Spin } from "antd";
import { fetchSources } from "./store/Slices/NewsApiSlice";

let isInitial = true;
function App() {
  const dispatch = useDispatch<AppDispatch>();

  const status = useSelector((state: RootState) => state.articles.status);
  const filters = useSelector((state: RootState) => state.filters.everything);
  const sourcesFilters = useSelector(
    (state: RootState) => state.filters.sources
  );

  const { dSource } = useSelector((state: RootState) => state.ui);

  const memoizedFilters = useMemo(() => filters, [filters]);
  const memoizedSourceFilters = useMemo(() => sourcesFilters, [sourcesFilters]);

  const handleResize = useCallback(() => {
    const isMobile = window.innerWidth <= 768;
    dispatch(setIsMobile(isMobile));
  }, [dispatch]);

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (isInitial) {
      handleResize();
      const sourcesConfig: AxiosRequestConfig = {
        params: {
          ...memoizedSourceFilters,
          dSource,
          route: "top-headlines/sources",
        },
      };
      dispatch(fetchSources({ url: "", config: sourcesConfig }));
      isInitial = false;
    }
  }, [dispatch, handleResize, dSource, memoizedSourceFilters]);

  useEffect(() => {
    const url = "";

    const config: AxiosRequestConfig = {
      params: { ...memoizedFilters, dSource },
    };

    dispatch(fetchArticles({ url, config }));
  }, [memoizedFilters, dispatch, dSource]);

  return (
    <div className="app">
      <MainHeader />
      <Content />
      <Footer />
      <Spin spinning={status === "loading" ? true : false} fullscreen />
    </div>
  );
}

export default App;
