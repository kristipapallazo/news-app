import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

import AxiosClient from "../client/axios";
import { ResData } from "../types/types";
import { ArticleState } from "../types/redux";

const initialState: ArticleState = {
  articles: [],
  status: "idle",
  error: null,
};

// Fetch articles from different APIs
export const fetchArticles = createAsyncThunk(
  "articles/fetchArticles",
  async (sourceUrls: string[]) => {
    const responses = await Promise.all(
      sourceUrls.map((url) => AxiosClient.get<ResData>(url))
    );
    console.log("responses :>> ", responses);
    /* check later */
    return responses.flatMap((response) => response.data!.articles);
    // return responses.map((response) => response.data.articles).flat();
  }
);

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
        console.log("state, action", state, action);
        state.status = "succeeded";
        state.articles = action.payload;
      })
      .addCase(fetchArticles.rejected, (state, action) => {
        state.status = "failed";
        state.error = action.error.message || "Failed to fetch articles";
      });
  },
});

export default articlesSlice.reducer;
