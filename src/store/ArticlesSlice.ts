import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import AxiosClient from "../client/axios";
import { ResData } from "../types/types";
import { ArticleState } from "../types/redux";
import { AxiosRequestConfig } from "axios";

const initialState: ArticleState = {
  articles: [],
  status: "idle",
  message: null,
};

interface FetchArticlesPayload {
  url: string;
  config?: AxiosRequestConfig;
}

export const fetchArticles = createAsyncThunk<
  ResData["articles"], // Return type
  FetchArticlesPayload, // Argument type
  { rejectValue: string } // Custom error payload type
>("articles/fetchArticles", async (payload, { rejectWithValue }) => {
  const { url, config } = payload;
  console.log("config :>> ", config);
  console.log("url :>> ", url);
  const response = await AxiosClient.get<ResData>(url, config);
  if (response.error) {
    return rejectWithValue(response.message);
  }

  return response.data!.articles;
  // const responses = await Promise.all(
  //   sourceUrls.map((url) => AxiosClient.get<ResData>(url, config))
  // );
  // return responses.flatMap((response) => {
  //   console.log("response.data :>> ", response.data);
  //   return response.data!.articles;
  // });
  // return responses.map((response) => response.data.articles).flat();
});

const articlesSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchArticles.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchArticles.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        console.log("action", action);

        state.status = "failed";
        state.message = action.payload || "Failed to fetch articles";
      });
  },
});

export default articlesSlice.reducer;
