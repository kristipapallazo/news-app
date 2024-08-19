import { createSlice } from "@reduxjs/toolkit";

import { Sources } from "../../types/types";
import { asyncFetch } from "../../utils";

interface SourcesState {
  sources: Sources;
  status: "idle" | "loading" | "succeeded" | "failed";
  message: string | null;
}

const initialState: SourcesState = {
  sources: [],
  status: "idle",
  message: null,
};

interface Data {
  sources: Sources;
}

export const fetchSources = asyncFetch<Data>("sources/fetchSources");

const sourcesSlice = createSlice({
  name: "sources",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchSources.pending, (state) => {
        state.status = "loading";
      })
      .addCase(fetchSources.fulfilled, (state, action) => {
        state.status = "succeeded";
        state.sources = action.payload.sources;
      })
      .addCase(fetchSources.rejected, (state, action) => {
        console.log("action", action);

        state.status = "failed";
        state.message = action.payload || "Failed to fetch sources";
      });
  },
});

export default sourcesSlice.reducer;
