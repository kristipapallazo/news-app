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
import { fetchSources } from "./store/Slices/SourcesSlice";

// const handleReq = async (url: string) => {
//   try {
//     const route = "/everything?";
//     const route1 = "/top-headlines?";

//     // const url =
//     //   baseUrl + route + "q=test&" + "from=2024-08-10" + "&sortBy=popularity";
//     // const url2 = `${NYC_API.baseUrl}/articlesearch.json?q=e`;
//     // const url2 = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=e&api-key=${NYC_API.apiKey}`;
//     // const url3 = `${G_API.baseUrl}/search?q=debates`;

//     // const res1 = await AxiosClient.get(url);
//     // console.log("res1 :>> ", res1);
//     const res = await fetch(url + `&api-key=${NEWS_API.apiKey}`);
//     console.log("res :>> ", res);
//     if (!res) throw new Error("Error during request!");
//     const data = await res.json();
//     // const { data } = res;
//     console.log("data :>> ", data);
//     if (!data) throw new Error("Data is missing!");
//     return { data };
//   } catch (error) {
//     const e = error as Error;
//     console.log("e :>> ", e);
//     return { error: true, message: e.message };
//   }
// };

let isInitial = true;
function App() {
  const dispatch = useDispatch<AppDispatch>();

  const status = useSelector((state: RootState) => state.articles.status);
  const filters = useSelector((state: RootState) => state.filters.everything);
  const sources = useSelector((state: RootState) => state.sources.sources);
  const { dSource, route } = useSelector((state: RootState) => state.ui);

  console.log("sources :>> ", sources);

  console.log("filters :>> ", filters);

  const memoizedFilters = useMemo(() => filters, [filters]);

  const handleResize = useCallback(() => {
    const isMobile = window.innerWidth <= 768;
    dispatch(setIsMobile(isMobile));
  }, [dispatch]);

  useEffect(() => {
    /* check device type */
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize]);

  useEffect(() => {
    if (isInitial) {
      handleResize();

      isInitial = false;
    }
  }, [dispatch, handleResize]);
  useEffect(() => {
    // const url = handleUrl(dSource);
    const url = "";

    console.log("memoizeFilter", memoizedFilters);
    const config: AxiosRequestConfig = {
      params: { ...memoizedFilters, dSource, route },
    };
    const sourcesConfig: AxiosRequestConfig = {
      params: { ...memoizedFilters, dSource, route: "top-headlines/sources" },
    };

    // dispatch(fetchArticles({ url, config }));
    dispatch(fetchSources({ url, config: sourcesConfig }));
  }, [memoizedFilters, dispatch, dSource, route]);

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
