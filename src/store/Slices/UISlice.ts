import { createSlice } from "@reduxjs/toolkit";
import { UIState } from "../../types/redux";

const initialState: UIState = {
  module: "home",
  selectedArticle: "",
  isMobile: false,
  dSource: "news_api",
  route: "everything",
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
    setDSource: (state, action) => {
      state.dSource = action.payload;
    },
    setRoute: (state, action) => {
      state.route = action.payload;
    },
  },
});

export const {
  setModule,
  setSelectedArticle,
  setIsMobile,
  setDSource,
  setRoute,
} = filtersSlice.actions;
export default filtersSlice.reducer;
