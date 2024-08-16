import { createSlice } from "@reduxjs/toolkit";
import { UIState } from "../types/redux";

const initialState: UIState = {
  module: "home",
  selectedArticle: "",
  isMobile: false,
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
    setIsMobile: (state, action) => {
      state.isMobile = action.payload;
    },
  },
});

export const { setModule, setSelectedArticle, setIsMobile } =
  filtersSlice.actions;
export default filtersSlice.reducer;
