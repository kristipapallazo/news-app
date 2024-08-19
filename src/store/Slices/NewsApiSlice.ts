import { createSlice } from "@reduxjs/toolkit";

import { asyncFetch } from "../../utils";
import {
  ArticleState,
  ArticlesData,
  articleInitialState,
} from "./ArticlesSlice";

interface NewsApiState {
  sources: {
    sources: Sources;
    sourcesAllIds: SourcesAllIds;
    status: "idle" | "loading" | "succeeded" | "failed";
    message: string | null;
  };
  topHeadlines: ArticleState;
}

const initialState: NewsApiState = {
  sources: {
    sources: [],
    sourcesAllIds: [],
    status: "idle",
    message: null,
  },
  topHeadlines: articleInitialState,
};

interface SourcesData {
  sources: Sources;
}

export const fetchSources = asyncFetch<SourcesData>("sources/fetchSources");
export const fetchTopHeadlines = asyncFetch<ArticlesData>(
  "sources/fetchTopHeadlines"
);

const buildSourcesAllIds = (sources: NewsAPISource[]): SourcesAllIds => {
  const arr: SourceTypeAllIds[] = sources.map(({ id, name }) => ({
    id,
    name,
  }));
  return arr;
};

const newsApiSlice = createSlice({
  name: "sources",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSources.pending, (state) => {
        state.sources.status = "loading";
      })
      .addCase(fetchSources.fulfilled, (state, action) => {
        state.sources.status = "succeeded";
        const sources = action.payload.sources;
        const sourcesAllIds = buildSourcesAllIds(sources);

        state.sources.sources = sources;
        state.sources.sourcesAllIds = sourcesAllIds;
      })
      .addCase(fetchSources.rejected, (state, action) => {
        state.sources.status = "failed";
        state.sources.message = action.payload || "Failed to fetch sources";
      })
      .addCase(fetchTopHeadlines.pending, (state) => {
        state.topHeadlines.status = "loading";
      })
      .addCase(fetchTopHeadlines.fulfilled, (state, action) => {
        state.topHeadlines.status = "succeeded";

        state.topHeadlines.articles = action.payload.articles;
      })
      .addCase(fetchTopHeadlines.rejected, (state, action) => {
        state.topHeadlines.status = "failed";
        state.topHeadlines.message =
          action.payload || "Failed to fetch top headlines";
      });
  },
});

export default newsApiSlice.reducer;
