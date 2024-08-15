import { createSlice } from "@reduxjs/toolkit";
import { FiltersState } from "../types/redux";

const initialState: FiltersState = {
  keyword: "",
  category: "",
  source: "",
  date: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setKeyword: (state, action) => {
      state.keyword = action.payload;
    },
    setCategory: (state, action) => {
      state.category = action.payload;
    },
    setSource: (state, action) => {
      state.source = action.payload;
    },
    setDate: (state, action) => {
      state.date = action.payload;
    },
  },
});

export const { setKeyword, setCategory, setSource, setDate } =
  filtersSlice.actions;
export default filtersSlice.reducer;
