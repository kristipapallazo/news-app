import { createSlice } from "@reduxjs/toolkit";

import { Articles } from "../../types/types";
import { asyncFetch } from "../../utils";

interface ArticleState {
  articles: Articles;
  status: "idle" | "loading" | "succeeded" | "failed";
  message: string | null;
}

const initialState: ArticleState = {
  articles: [],
  status: "idle",
  message: null,
};

interface Data {
  articles: Articles;
}

export const fetchArticles = asyncFetch<Data>("articles/fetchArticles");

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
        state.articles = action.payload.articles;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        console.log("action", action);

        state.status = "failed";
        state.message = action.payload || "Failed to fetch articles";
      });
  },
});

export default articlesSlice.reducer;
