import { createSlice } from "@reduxjs/toolkit";

const initialState: FiltersState = {
  everything: {
    q: "test",
    sortBy: "popularity",
    language: "en",
    pageSize: 100,
    page: 1,
  },
  topheadlines: { q: "apple", pageSize: 100, page: 1 },
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
