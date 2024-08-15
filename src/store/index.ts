import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./ArticlesSlice";
import uiReducer from "./UISlice";
import filtersReducer from "./FiltersSlice";
import userPreferencesReducer from "./UserPrefSlice";

const store = configureStore({
  reducer: {
    articles: articlesReducer,
    filters: filtersReducer,
    userPref: userPreferencesReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
