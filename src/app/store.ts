import { configureStore } from "@reduxjs/toolkit";
import themeReducer from "../features/theme/theme.slice";
import languageReducer from "../features/language/language.slice";

export const store = configureStore({
  reducer: {
    theme: themeReducer,
    language: languageReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
