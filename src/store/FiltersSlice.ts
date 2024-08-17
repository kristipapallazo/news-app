import { createSlice } from "@reduxjs/toolkit";
import { FiltersState } from "../types/redux";

const initialState: FiltersState = {
  everything: { q: "test" },
  topheadlines: {},
  sources: {},
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setEverything: (state, action) => {
      state.everything = action.payload;
    },
    setTopHeadlines: (state, action) => {
      state.topheadlines = action.payload;
    },
    setSources: (state, action) => {
      state.sources = action.payload;
    },
  },
});

export const { setEverything, setTopHeadlines, setSources } =
  filtersSlice.actions;
export default filtersSlice.reducer;
