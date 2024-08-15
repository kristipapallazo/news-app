import { createSlice } from "@reduxjs/toolkit";
import { UIState } from "../types/redux";
import { Module } from "../types/types";

const initialState: UIState = {
  module: "home",
  selectedArticle: "",
};

const filtersSlice = createSlice({
  name: "filters",
  initialState,
  reducers: {
    setModule: (state, action) => {
      state.module = action.payload;
    },
    setSelectedArticle: (state, action) => {
      state.selectedArticle = action.payload;
    },
  },
});

export const { setModule, setSelectedArticle } = filtersSlice.actions;
export default filtersSlice.reducer;
