import { createSlice } from "@reduxjs/toolkit";
import { asyncFetch } from "../../utils";

export interface ArticleState {
  articles: Articles;
  status: "idle" | "loading" | "succeeded" | "failed";
  message: string | null;
}

export const articleInitialState: ArticleState = {
  articles: [],
  status: "idle",
  message: null,
};

export interface ArticlesData {
  articles: Articles;
}

export const fetchArticles = asyncFetch<ArticlesData>("articles/fetchArticles");

const articlesSlice = createSlice({
  name: "articles",
  initialState: articleInitialState,
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
        state.status = "failed";
        state.message = action.payload || "Failed to fetch articles";
      });
  },
});

export default articlesSlice.reducer;
