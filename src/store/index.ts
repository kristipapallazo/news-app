import { configureStore } from "@reduxjs/toolkit";
import articlesReducer from "./Slices/ArticlesSlice";
import uiReducer from "./Slices/UISlice";
import filtersReducer from "./Slices/FiltersSlice";
import sourcesReducer from "./Slices/SourcesSlice";
import userPreferencesReducer from "./Slices/UserPrefSlice";

const store = configureStore({
  reducer: {
    filters: filtersReducer,
    articles: articlesReducer,
    sources: sourcesReducer,
    userPref: userPreferencesReducer,
    ui: uiReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
