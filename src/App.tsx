import { useCallback, useEffect, useMemo, useState } from "react";
import "./App.css";
import { NEWS_API, NYC_API, G_API } from "./globals/index";
import MainHeader from "./components/MainHeader/MainHeader";
import Content from "./components/Content/Content";
import { Module, SourceType } from "./types/types";
import AxiosClient from "./client/axios";
import "./components/UI/Antd.css";
import { AppDispatch, RootState } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "./store/ArticlesSlice";
import axios, { AxiosRequestConfig } from "axios";
import Footer from "./components/Footer/Footer";
import { setIsMobile } from "./store/UISlice";
import { Spin } from "antd";
import { FiltersState } from "./types/redux";
const { baseUrl } = NEWS_API;

const handleReq = async (url: string) => {
  try {
    const route = "/everything?";
    const route1 = "/top-headlines?";

    // const url =
    //   baseUrl + route + "q=test&" + "from=2024-08-10" + "&sortBy=popularity";
    // const url2 = `${NYC_API.baseUrl}/articlesearch.json?q=e`;
    // const url2 = `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=e&api-key=${NYC_API.apiKey}`;
    // const url3 = `${G_API.baseUrl}/search?q=debates`;

    // const res1 = await AxiosClient.get(url);
    // console.log("res1 :>> ", res1);
    const res = await fetch(url + `&api-key=${NEWS_API.apiKey}`);
    console.log("res :>> ", res);
    if (!res) throw new Error("Error during request!");
    const data = await res.json();
    // const { data } = res;
    console.log("data :>> ", data);
    if (!data) throw new Error("Data is missing!");
    return { data };
  } catch (error) {
    const e = error as Error;
    console.log("e :>> ", e);
    return { error: true, message: e.message };
  }
};

let isInitial = true;
function App() {
  const dispatch = useDispatch<AppDispatch>();

  const status = useSelector((state: RootState) => state.articles.status);
  const filters = useSelector((state: RootState) => state.filters);

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
    const handleUrl = (source: SourceType | null): string => {
      let baseUrl: string = NYC_API.baseUrl;
      let route: string = "/everything";

      switch (source) {
        case "nyc":
          baseUrl = NYC_API.baseUrl;
          route = "/articlesearch.json";
          break;
        case "guardian":
          baseUrl = G_API.baseUrl;
          break;
        default:
          baseUrl = NEWS_API.baseUrl;
          route = "/everything";
          break;
      }

      const url = `${baseUrl}${route}?q=test`;

      // const url = `${baseUrl}${route}?q=${keyword}${
      //   date ? `&from=${date}` : ""
      // }&sortBy=${sort}&pageSize=${pageSize}`;
      return url;
    };
    const url = handleUrl(memoizedFilters.source);

    const url2 = `${NYC_API.baseUrl}/articlesearch.json?q=e`;

    // handleReq(url);
    const config: AxiosRequestConfig = {
      params: { q: memoizedFilters.keyword, date: memoizedFilters.date },
    };
    const sourceUrls = [url];
    dispatch(fetchArticles({ sourceUrls }));
  }, [memoizedFilters, dispatch]);

  return (
    <div className="app">
      <MainHeader />
      <Content />
      <Footer />
      <Spin
        spinning={status === "loading" ? true : false}
        // percent={percent}
        fullscreen
      />
    </div>
  );
}

export default App;
