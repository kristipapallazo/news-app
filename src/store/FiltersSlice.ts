import { createSlice } from "@reduxjs/toolkit";
import { FiltersState } from "../types/redux";

const initialState: FiltersState = {
  keyword: "text",
  categ: null,
  source: "news_api",
  date: "",
  toDate: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    setCateg: (state, action) => {
      state.categ = action.payload;
    },
    setSource: (state, action) => {
      state.source = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
    setToDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const { setKeyword, setCateg, setSource, setDate, setToDate } =
  filtersSlice.actions;
export default filtersSlice.reducer;
