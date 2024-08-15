import { useEffect, useState } from "react";
import "./App.css";
import { NEWS_API, NYC_API, G_API } from "./globals/index";
import MainHeader from "./components/MainHeader/MainHeader";
import Content from "./components/Content/Content";
import { Module } from "./types/types";
import AxiosClient from "./client/axios";
import "./components/UI/Antd.css";
import { AppDispatch, RootState } from "./store";
import { useDispatch, useSelector } from "react-redux";
import { fetchArticles } from "./store/ArticlesSlice";
import axios from "axios";
import Footer from "./components/Footer/Footer";
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

  useEffect(() => {
    if (isInitial) {
      // alert(1);
      const url =
        NEWS_API.baseUrl +
        "/everything" +
        "?q=test&" +
        "from=2024-08-10" +
        "&sortBy=popularity";
      // handleReq(url);
      const sourceUrls = [url];
      dispatch(fetchArticles(sourceUrls));
      isInitial = false;
    }
  }, [dispatch]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  return (
    <div className="app">
      <MainHeader />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
