import { createSlice } from "@reduxjs/toolkit";
import { UserPrefState } from "../../types/redux";

const initialState: UserPrefState = {
  preferredSources: [],
  preferredCategories: [],
  preferredAuthors: [],
};

const userPrefSlice = createSlice({
  name: "userPreferences",
  initialState,
  reducers: {
    setPreferredSources: (state, action) => {
      state.preferredSources = action.payload;
    },
    setPreferredCategories: (state, action) => {
      state.preferredCategories = action.payload;
    },
    setPreferredAuthors: (state, action) => {
      state.preferredAuthors = action.payload;
    },
  },
});

export const {
  setPreferredSources,
  setPreferredCategories,
  setPreferredAuthors,
} = userPrefSlice.actions;

export default userPrefSlice.reducer;
